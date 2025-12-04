export type Point = { x: number; y: number };
export type Dimension = { width: number; height: number };

export type RoomType = 
  | "master_bedroom" 
  | "bedroom" 
  | "kitchen" 
  | "living" 
  | "dining" 
  | "toilet" 
  | "utility" 
  | "parking" 
  | "staircase"
  | "foyer"
  | "balcony" // Added
  | "sitout" // Added
  | "passage"; // Added for internal corridors

export type WallSide = "top" | "bottom" | "left" | "right";

export interface Feature {
  type: "door" | "window" | "opening" | "entrance" | "sliding_door";
  side: WallSide;
  offset: number; // 0 to 1
  width: number;
}

export interface Column {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Room {
  id: string;
  name: string;
  type: RoomType;
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  features: Feature[];
}

export interface FloorPlan {
  plotWidth: number;
  plotDepth: number;
  buildableWidth: number;
  buildableDepth: number;
  setbacks: {
    front: number;
    back: number;
    left: number;
    right: number;
  };
  rooms: Room[];
  columns: Column[]; // Added structural columns
  totalArea: number;
}

export interface GeneratorConfig {
  plotLength: number; // Depth
  plotWidth: number;  // Width
  facing: "North" | "East" | "West" | "South";
  bedrooms: number;
  floors: number;
  vastu: boolean;
}
