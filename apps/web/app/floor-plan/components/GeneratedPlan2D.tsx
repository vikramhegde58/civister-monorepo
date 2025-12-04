"use client";

import { useEffect, useRef } from "react";
import { Feature, FloorPlan, Room } from "@/lib/generator/types";

interface GeneratedPlan2DProps {
  plan: FloorPlan;
}

export default function GeneratedPlan2D({ plan }: GeneratedPlan2DProps) {
  // Scale factor to fit screen
  const padding = 40;
  const maxW = 800;
  const scale = Math.min(maxW / plan.plotWidth, 600 / plan.plotDepth);
  
  // Convert feet to pixels
  const ft = (val: number) => val * scale;
  
  // Standardized Architectural Constants (Scaled)
  const wallThickness = Math.max(2, ft(0.75)); // 9 inch wall
  const partitionThickness = Math.max(1, ft(0.375)); // 4.5 inch wall
  const glassThickness = Math.max(1, ft(0.15));

  const renderFeature = (feature: Feature, room: Room) => {
    const { side, offset, width, type } = feature;
    const w = ft(width);
    // Calculate offset in pixels along the wall
    const off = offset <= 1 ? (side === 'top' || side === 'bottom' ? ft(room.width) : ft(room.height)) * offset : ft(offset);

    // Determine coords
    let x = 0, y = 0, rot = 0;
    
    // We want features to be centered at 'off'
    switch (side) {
        case 'top':
            x = ft(room.x) + off;
            y = ft(room.y);
            rot = 0;
            break;
        case 'bottom':
            x = ft(room.x) + off;
            y = ft(room.y + room.height);
            rot = 180;
            break;
        case 'left':
            x = ft(room.x);
            y = ft(room.y) + off;
            rot = -90;
            break;
        case 'right':
            x = ft(room.x + room.width);
            y = ft(room.y) + off;
            rot = 90;
            break;
    }

    // Render specific feature types
    if (type === 'window') {
        // Architectural Window:
        // 1. White fill to clear wall
        // 2. Outer lines (Wall edges)
        // 3. Middle line (Glass)
        // 4. End caps
        return (
            <g key={`${room.id}-${side}-${offset}`} transform={`translate(${x}, ${y}) rotate(${rot})`}>
                {/* Cut Wall Hole */}
                <rect x={-w/2} y={-wallThickness/2} width={w} height={wallThickness} fill="white" />
                
                {/* Sill Lines (Outer Wall) */}
                <line x1={-w/2} y1={-wallThickness/2} x2={w/2} y2={-wallThickness/2} stroke="#334155" strokeWidth="1" />
                <line x1={-w/2} y1={wallThickness/2} x2={w/2} y2={wallThickness/2} stroke="#334155" strokeWidth="1" />
                
                {/* Jambs (Sides) */}
                <line x1={-w/2} y1={-wallThickness/2} x2={-w/2} y2={wallThickness/2} stroke="#334155" strokeWidth="1" />
                <line x1={w/2} y1={-wallThickness/2} x2={w/2} y2={wallThickness/2} stroke="#334155" strokeWidth="1" />

                {/* Glass (Middle Cyan lines) */}
                <line x1={-w/2} y1={-2} x2={w/2} y2={-2} stroke="#0ea5e9" strokeWidth={glassThickness} opacity="0.6" />
                <line x1={-w/2} y1={2} x2={w/2} y2={2} stroke="#0ea5e9" strokeWidth={glassThickness} opacity="0.6" />
            </g>
        );
    }

    if (type === 'door' || type === 'entrance') {
        // Architectural Door:
        // 1. Clear opening
        // 2. Door leaf (Panel) at 90 deg
        // 3. Swing arc (Dotted)
        const doorThickness = 4; 
        return (
            <g key={`${room.id}-${side}-${offset}`} transform={`translate(${x}, ${y}) rotate(${rot})`}>
                {/* Clear Wall */}
                <rect x={-w/2} y={-wallThickness/2 - 2} width={w} height={wallThickness + 4} fill={room.color} />
                
                {/* Jambs - Small bits of wall sticking out if needed, but usually clear. Let's draw jamb lines */}
                <line x1={-w/2} y1={-wallThickness/2} x2={-w/2} y2={wallThickness/2} stroke="#334155" strokeWidth="1" />
                <line x1={w/2} y1={-wallThickness/2} x2={w/2} y2={wallThickness/2} stroke="#334155" strokeWidth="1" />

                {/* Door Leaf (Swing Open - usually inwards into room, but here we rotate simply) */}
                {/* Let's assume right-hand hinge for now (hinge at -w/2) */}
                <rect x={-w/2} y={-w} width={doorThickness} height={w} fill="white" stroke="black" strokeWidth="1" />
                
                {/* Swing Arc */}
                <path d={`M -${w/2} -${w} A ${w} ${w} 0 0 1 ${w/2} 0`} fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
            </g>
        );
    }

    if (type === 'opening') {
        return (
            <g key={`${room.id}-${side}-${offset}`} transform={`translate(${x}, ${y}) rotate(${rot})`}>
                {/* Clear Wall completely */}
                <rect x={-w/2} y={-wallThickness/2 - 2} width={w} height={wallThickness + 4} fill={room.color} />
                {/* Dashed lintel line overhead */}
                <line x1={-w/2} y1={0} x2={w/2} y2={0} stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" />
            </g>
        );
    }
    
    return null;
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-[#fffdfa] rounded-none border border-neutral-300 p-4 overflow-hidden relative shadow-xl">
      {/* Paper Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")` }}></div>

      <svg
        width="100%"
        height="100%"
        viewBox={`-${padding} -${padding} ${ft(plan.plotWidth) + padding*2} ${ft(plan.plotDepth) + padding*2}`}
        className="max-w-full max-h-[600px] font-sans"
      >
        <defs>
            {/* Concrete Hatch for Columns */}
            <pattern id="concrete" width="4" height="4" patternUnits="userSpaceOnUse">
                <path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2" stroke="#000000" strokeWidth="0.5" opacity="0.2" />
            </pattern>
            {/* Grid */}
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="1" />
            </pattern>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#000" />
            </marker>
        </defs>

        {/* Background Grid */}
        <rect x={-padding} y={-padding} width="200%" height="200%" fill="url(#grid)" />

        {/* Plot Boundary */}
        <rect
          x="0"
          y="0"
          width={ft(plan.plotWidth)}
          height={ft(plan.plotDepth)}
          fill="none"
          stroke="#dc2626"
          strokeWidth="1"
          strokeDasharray="10 5"
          opacity="0.5"
        />
        
        {/* Setback Lines */}
        <rect
          x={ft(plan.setbacks.left)}
          y={ft(plan.setbacks.back)}
          width={ft(plan.buildableWidth)}
          height={ft(plan.buildableDepth)}
          fill="none"
          stroke="#0ea5e9"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.3"
        />

        {/* ROOMS (Fill Only) */}
        {plan.rooms.map((room) => (
          <rect
            key={`fill-${room.id}`}
            x={ft(room.x)}
            y={ft(room.y)}
            width={ft(room.width)}
            height={ft(room.height)}
            fill={room.color}
          />
        ))}

        {/* WALLS (Stroke Only) */}
        {plan.rooms.map((room) => {
            // For Sit-out/Parking, maybe lighter walls or no walls
            if (room.type === 'sitout' || room.type === 'parking') return null;
            return (
                <rect
                    key={`wall-${room.id}`}
                    x={ft(room.x)}
                    y={ft(room.y)}
                    width={ft(room.width)}
                    height={ft(room.height)}
                    fill="none"
                    stroke="#1e293b" 
                    strokeWidth={wallThickness}
                />
            )
        })}
        
        {/* BALCONY / SITOUT RAILING */}
        {plan.rooms.filter(r => r.type === 'sitout' || r.type === 'balcony').map(room => (
             <g key={`railing-${room.id}`}>
                 {/* Dashed Boundary for Sitout */}
                 <rect
                    x={ft(room.x)}
                    y={ft(room.y)}
                    width={ft(room.width)}
                    height={ft(room.height)}
                    fill="none"
                    stroke="#1e293b" 
                    strokeWidth="2"
                    strokeDasharray="0"
                />
                {/* Railing Pattern (Bottom and Right/Left open sides typically) */}
                <line x1={ft(room.x)} y1={ft(room.y + room.height)} x2={ft(room.x + room.width)} y2={ft(room.y + room.height)} stroke="#1e293b" strokeWidth="4" />
             </g>
        ))}

        {/* COLUMNS */}
        {plan.columns.map((col, i) => (
            <rect
                key={`col-${i}`}
                x={ft(col.x)}
                y={ft(col.y)}
                width={ft(col.width)}
                height={ft(col.height)}
                fill="#1e293b" // Solid Black/Dark Grey structural column
                // fill="url(#concrete)"
            />
        ))}

        {/* FEATURES (Doors, Windows - Drawn ON TOP to cut walls) */}
        {plan.rooms.flatMap(room => room.features?.map(f => renderFeature(f, room)))}

        {/* LABELS */}
        {plan.rooms.map((room) => (
          <g key={`label-${room.id}`}>
            <text
              x={ft(room.x + room.width / 2)}
              y={ft(room.y + room.height / 2)}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-[10px] font-bold fill-slate-800 uppercase tracking-widest pointer-events-none"
              style={{ fontSize: `${Math.max(10, scale * 0.7)}px` }}
            >
              {room.name}
            </text>
            <text
              x={ft(room.x + room.width / 2)}
              y={ft(room.y + room.height / 2) + (scale * 1.2)}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-[8px] fill-slate-500 pointer-events-none font-medium"
              style={{ fontSize: `${Math.max(8, scale * 0.5)}px` }}
            >
              {Math.round(room.width)}' x {Math.round(room.height)}'
            </text>
          </g>
        ))}

        {/* Dimensions */}
        <g transform={`translate(0, -20)`}>
            <line x1="0" y1="0" x2={ft(plan.plotWidth)} y2="0" stroke="black" strokeWidth="1" markerEnd="url(#arrow)" markerStart="url(#arrow)" />
            <text x={ft(plan.plotWidth)/2} y="-8" textAnchor="middle" className="text-xs fill-black font-bold tracking-widest">{plan.plotWidth}' 0"</text>
        </g>
        <g transform={`translate(-20, 0)`}>
             <line x1="0" y1="0" x2="0" y2={ft(plan.plotDepth)} stroke="black" strokeWidth="1" markerEnd="url(#arrow)" markerStart="url(#arrow)" />
             <text x="-8" y={ft(plan.plotDepth)/2} textAnchor="middle" transform={`rotate(-90, -8, ${ft(plan.plotDepth)/2})`} className="text-xs fill-black font-bold tracking-widest">{plan.plotDepth}' 0"</text>
        </g>
        
        {/* North Arrow */}
        <g transform={`translate(${ft(plan.plotWidth) + 20}, 20)`}>
             <circle cx="0" cy="0" r="12" stroke="black" strokeWidth="1" fill="none" />
             <path d="M0,-8 L4,4 L0,2 L-4,4 Z" fill="black" />
             <text x="0" y="-14" textAnchor="middle" fontSize="10" fontWeight="bold">N</text>
        </g>

      </svg>
    </div>
  );
}
