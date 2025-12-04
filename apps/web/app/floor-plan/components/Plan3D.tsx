"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, Environment } from "@react-three/drei";
import { Suspense } from "react";

function PlaceholderModel() {
    return (
        <group>
             {/* Simple House Representation */}
             <mesh position={[0, 0.5, 0]}>
                <boxGeometry args={[4, 1, 4]} />
                <meshStandardMaterial color="lightgray" />
             </mesh>
             <mesh position={[0, 1.5, 0]}>
                <coneGeometry args={[3, 1.5, 4]} />
                 <meshStandardMaterial color="salmon" />
             </mesh>
        </group>
    )
}

export default function Plan3D() {
  return (
    <div className="h-full w-full min-h-[400px] rounded-lg border bg-slate-100">
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 50 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <PlaceholderModel />
          </Stage>
        </Suspense>
        <OrbitControls autoRotate />
      </Canvas>
    </div>
  );
}

