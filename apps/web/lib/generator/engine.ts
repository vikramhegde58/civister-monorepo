import { FloorPlan, GeneratorConfig, Room, RoomType, Feature, WallSide } from "./types";

const COLORS: Record<RoomType, string> = {
  master_bedroom: "#FDFBF7", 
  bedroom: "#FDFBF7",       
  kitchen: "#FDFBF7",       
  living: "#FDFBF7",        
  dining: "#FDFBF7",        
  toilet: "#F0F4F8", 
  utility: "#F0F4F8",       
  parking: "#E2E8F0", 
  staircase: "#FDFBF7",     
  foyer: "#FDFBF7",
  balcony: "#FDFBF7",
  sitout: "#FDFBF7",
  passage: "#FDFBF7" // Added passage color
};

// Extended RoomType for internal logic
type ExtendedRoomType = RoomType | "passage";

export class FloorPlanGenerator {
  private config: GeneratorConfig;
  private plan: FloorPlan;

  constructor(config: GeneratorConfig) {
    this.config = config;
    const width = Number(config.plotWidth);
    const depth = Number(config.plotLength);

    const setbackFront = depth > 50 ? 5 : 4;
    const setbackBack = 2;
    const setbackSide = width > 30 ? 2.5 : 1.5;

    this.plan = {
      plotWidth: width,
      plotDepth: depth,
      setbacks: {
        front: setbackFront,
        back: setbackBack,
        left: setbackSide,
        right: setbackSide
      },
      buildableWidth: width - (setbackSide * 2),
      buildableDepth: depth - setbackFront - setbackBack,
      rooms: [],
      columns: [],
      totalArea: 0
    };
  }

  public generate(): FloorPlan {
    this.plan.rooms = [];
    this.plan.columns = [];
    
    const { buildableWidth, buildableDepth, setbacks } = this.plan;
    const startX = setbacks.left;
    const startY = setbacks.back; 

    // --- LAYOUT LOGIC: "Central Spine" Connectivity ---
    
    // Split Width: West (40%) | Center-Passage (10%) | East (50%)?
    // Or just West (45%) | East (55%) but carve out passage from West.
    
    const westW = buildableWidth * 0.45;
    const eastW = buildableWidth - westW;
    const splitX = startX + westW;

    let currentY_West = startY;
    let currentY_East = startY;

    // --- ROW 1: BACK (South) ---
    
    // 1. Master Bedroom (West - Back)
    const masterH = Math.max(11, buildableDepth * 0.3);
    const masterRoom = this.createRoom("master_bedroom", "Master Bed", startX, currentY_West, westW, masterH);
    currentY_West += masterH;

    // 2. Kitchen (East - Back)
    // Kitchen matches Master height for clean line
    const kitchenH = masterH;
    const kitchenRoom = this.createRoom("kitchen", "Kitchen", splitX, currentY_East, eastW, kitchenH);
    currentY_East += kitchenH;


    // --- ROW 2: MIDDLE (Service/Dining) ---

    // 3. Toilet & Passage (West - Middle)
    // We split the West zone here: Toilet on Left, Passage on Right.
    const toiletH = 6; // Common/Attached toilet
    const passageW = 4; // 4ft walking space
    const toiletW = westW - passageW;
    
    const toiletRoom = this.createRoom("toilet", "Toilet", startX, currentY_West, toiletW, toiletH);
    // Implicit Passage created by empty space? Better to define it as a room/floor for continuity.
    // Let's add a "Passage" room featureless to show floor.
    // this.createRoom("passage" as RoomType, "", startX + toiletW, currentY_West, passageW, toiletH);
    
    currentY_West += toiletH;

    // 4. Dining (East - Middle)
    // Dining starts where Kitchen ends.
    // Height depends on remaining space.
    // Living needs ~14ft. Parking ~15ft.
    
    const parkingH = 15;
    const frontY = startY + buildableDepth - parkingH;
    const sitoutH = 4;
    
    // Calculate available middle height
    const livingH = Math.max(12, (buildableDepth - masterH - parkingH)); 
    // Actually Living is on East side, Parking on West.
    // East side length available = buildableDepth - kitchenH - sitoutH.
    // Split East remaining into Dining and Living.
    const eastRemaining = buildableDepth - kitchenH - sitoutH;
    const diningH = eastRemaining * 0.45;
    const livingH_Actual = eastRemaining * 0.55;

    const diningRoom = this.createRoom("dining", "Dining", splitX, currentY_East, eastW, diningH);
    currentY_East += diningH;

    // --- ROW 3: FRONT (Bed/Living) ---
    
    // 5. Bedroom 2 / Guest (West - Middle/Front)
    // Fills space between Toilet and Parking
    const bed2StartY = currentY_West;
    const bed2EndY = startY + buildableDepth - parkingH;
    const bed2H = bed2EndY - bed2StartY;
    
    if (bed2H > 8) {
        this.createRoom("bedroom", "Bedroom 2", startX, bed2StartY, westW, bed2H);
    } else {
        // Not enough space, extend Parking or Utility
        // Or if 2BHK, maybe Bedroom 2 is bigger and Parking smaller
    }
    currentY_West += bed2H;

    // 6. Living (East - Front)
    const livingRoom = this.createRoom("living", "Living", splitX, currentY_East, eastW, livingH_Actual);
    currentY_East += livingH_Actual;

    // 7. Parking (West - Front)
    this.createRoom("parking", "Parking", startX, currentY_West, westW, parkingH);

    // 8. Sitout (East - Front)
    this.createRoom("sitout", "Sit-out", splitX, currentY_East, eastW, sitoutH);


    // --- INTELLIGENT CONNECTIVITY ---
    
    this.plan.rooms.forEach(room => {
        // EXTERIOR WINDOWS
        if (Math.abs(room.y - startY) < 0.5) this.addWindow(room, 'top'); // Back
        if (Math.abs(room.x - startX) < 0.5) this.addWindow(room, 'left'); // Left
        if (Math.abs((room.x + room.width) - (startX + buildableWidth)) < 0.5) this.addWindow(room, 'right'); // Right
        // Front windows only for Living/Bed
        if (Math.abs((room.y + room.height) - (startY + buildableDepth)) < 0.5 && room.type !== 'parking' && room.type !== 'sitout') {
            this.addWindow(room, 'bottom');
        }

        // DOORS - The Crucial Fix
        // West Rooms open East/Bottom towards the Spine/Dining.

        if (room.type === 'master_bedroom') {
            // Door on Bottom Wall (opening to the Passage/Lobby created by Toilet offset)
            // The Toilet is narrower (westW - passageW).
            // So the bottom-right section of Master Bed aligns with the Passage.
            this.addFeature(room, 'door', 'bottom', 0.9, 3); 
        }

        if (room.type === 'toilet') {
             // Door on Right Wall (opening to Passage)
             this.addFeature(room, 'door', 'right', 0.5, 2.5);
        }

        if (room.type === 'bedroom') { // Guest Bed
            // Door on Top (to Passage) OR Right (to Dining/Living)
            // Usually Right is better for flow
            this.addFeature(room, 'door', 'right', 0.2, 3);
        }

        if (room.type === 'kitchen') {
            // Open to Dining (Bottom)
            this.addFeature(room, 'opening', 'bottom', 0.5, 4);
        }

        if (room.type === 'dining') {
            // Open to Living (Bottom)
            this.addFeature(room, 'opening', 'bottom', 0.5, 6);
        }

        if (room.type === 'living') {
            // Entrance (Bottom)
            this.addFeature(room, 'entrance', 'bottom', 0.5, 4);
        }
    });

    this.generateColumns();

    return this.plan;
  }

  private addWindow(room: Room, side: WallSide) {
      if (room.type === 'parking' || room.type === 'sitout') return;
      let width = 4;
      if (room.type === 'toilet') width = 2;
      if (room.type === 'living') width = 6;
      this.addFeature(room, 'window', side, 0.5, width);
  }

  private createRoom(type: RoomType, name: string, x: number, y: number, w: number, h: number) {
      const room: Room = {
          id: `${type}-${this.plan.rooms.length}`,
          name,
          type,
          x, y, width: w, height: h,
          color: COLORS[type],
          features: []
      };
      this.plan.rooms.push(room);
      return room;
  }

  private addFeature(room: Room, type: Feature['type'], side: WallSide, offset: number, width: number) {
      room.features.push({ type, side, offset, width });
  }

  private generateColumns() {
      const colW = 1; const colD = 1;
      const add = (x: number, y: number) => {
          if (!this.plan.columns.some(c => Math.abs(c.x - x) < 0.5 && Math.abs(c.y - y) < 0.5)) {
              this.plan.columns.push({ x, y, width: colW, height: colD });
          }
      };
      this.plan.rooms.forEach(r => {
          if(r.type === 'sitout' || r.type === 'parking') return;
          add(r.x, r.y);
          add(r.x + r.width - colW, r.y);
          add(r.x, r.y + r.height - colD);
          add(r.x + r.width - colW, r.y + r.height - colD);
      });
      // Add front columns
      const frontY = this.plan.setbacks.back + this.plan.buildableDepth - colD;
      add(this.plan.setbacks.left, frontY);
      add(this.plan.setbacks.left + this.plan.buildableWidth - colW, frontY);
  }
}
