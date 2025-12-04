"use client";

import { useRef, Suspense, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { 
  Float, 
  Environment, 
  MeshReflectorMaterial,
  Sparkles,
  useGLTF,
  Html,
  OrbitControls,
  Edges
} from "@react-three/drei";
import * as THREE from "three";

// --- CONSTANTS ---
const PRIMARY_COLOR = "#FF4D00"; // Civister Orange
const SECONDARY_COLOR = "#0EA5E9"; // Tech Blue

function MouseFollowLight() {
  const lightRef = useRef<THREE.PointLight>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const { camera, gl, raycaster } = useThree();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const rect = gl.domElement.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      setMousePosition({ x, y });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const canvas = gl.domElement;
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [gl]);

  useFrame(() => {
    if (!lightRef.current) return;

    // Project mouse onto a plane at model height (approximately y=0)
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    raycaster.setFromCamera(new THREE.Vector2(mousePosition.x, mousePosition.y), camera);
    
    const intersection = new THREE.Vector3();
    raycaster.ray.intersectPlane(plane, intersection);

    if (intersection) {
      // Smoothly interpolate to the target position
      lightRef.current.position.lerp(intersection, 0.15);
      
      // Update sphere position to match light
      if (sphereRef.current) {
        sphereRef.current.position.copy(lightRef.current.position);
      }
    }

    // Fade light intensity based on hover state
    const targetIntensity = isHovering ? 2.5 : 0;
    lightRef.current.intensity = THREE.MathUtils.lerp(lightRef.current.intensity, targetIntensity, 0.1);
    
    // Fade sphere opacity to match light intensity
    if (sphereRef.current && sphereRef.current.material) {
      const material = sphereRef.current.material as THREE.MeshStandardMaterial;
      const targetOpacity = isHovering ? 0.8 : 0;
      material.opacity = THREE.MathUtils.lerp(material.opacity, targetOpacity, 0.1);
      material.transparent = true;
    }
  });

  return (
    <group>
      <pointLight 
        ref={lightRef}
        position={[0, 2, 0]} 
        intensity={0} 
        color={PRIMARY_COLOR} 
        distance={15}
        decay={2}
      />
      {/* Visual Indicator Sphere */}
      <mesh ref={sphereRef} position={[0, 2, 0]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial 
          color={PRIMARY_COLOR} 
          emissive={PRIMARY_COLOR}
          emissiveIntensity={2}
          transparent
          opacity={0}
        />
      </mesh>
    </group>
  );
}

function GlbModel(props: any) {
  // Path to file in /public folder
  const { scene } = useGLTF("/modern_dining_room.glb", true); // useDraco = true/string

  // Enable shadows for all meshes in the model
  scene.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      // Optional: Adjust material properties if the model looks dull
      if ((child as THREE.Mesh).material) {
          const mat = (child as THREE.Mesh).material as THREE.MeshStandardMaterial;
          mat.envMapIntensity = 1.5; // Boost reflections
          mat.needsUpdate = true;
      }
    }
  });

  return (
    <group {...props} dispose={null}>
        <primitive object={scene} />
        
        {/* --- FLOOR PLANE (Visible) --- */}
        <mesh position={[0, -1.477, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <planeGeometry args={[30, 30]} />
            <meshStandardMaterial 
                color="#1a1a1a" 
                roughness={0.8} 
                metalness={0.2}
                transparent
                opacity={0.9}
            />
            <Edges color={PRIMARY_COLOR} threshold={15} opacity={0.3} />
        </mesh>
        
        {/* --- GROUND REFLECTION (Fading) --- */}
        <mesh position={[0, -1.475, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
                blur={[300, 50]}
                resolution={1024}
                mixBlur={1}
                mixStrength={10} 
                roughness={0.8}
                depthScale={1}
                minDepthThreshold={0.5}
                maxDepthThreshold={1.2}
                color="#0b0e14"
                metalness={0.5}
                mirror={0.2}
                transparent
                opacity={0.8}
            />
        </mesh>
    </group>
  );
}

function FloatingParticles() {
    return (
        <Sparkles 
            count={500} 
            scale={100} 
            size={6} 
            speed={0.2} 
            opacity={0.4} 
            color={SECONDARY_COLOR}
        />
    );
}

// Preload the model
useGLTF.preload("/modern_dining_room.glb");

export default function Hero3D() {
  return (
    <div className="w-full h-full absolute inset-0 pointer-events-auto">
      <Canvas 
          shadows 
          dpr={[1, 1]} 
          gl={{ 
              antialias: true, 
              alpha: true, 
              toneMapping: THREE.ACESFilmicToneMapping,
              powerPreference: "high-performance"
          }} 
          camera={{ position: [12, 6, 15], fov: 25 }}
          style={{ pointerEvents: 'auto' }}
      >
        <Suspense fallback={<Html center><div className="text-white/50 text-sm font-mono">Loading 3D Experience...</div></Html>}>
            
            {/* Matching Fog to blend ground plane edges */}
            <fog attach="fog" args={['#0b0e14', 15, 40]} />

            {/* Lighting */}
            <ambientLight intensity={0.3} />
            <pointLight position={[-10, 5, -10]} intensity={1} color={SECONDARY_COLOR} distance={20} />
            <pointLight position={[10, 0, 10]} intensity={0.6} color={PRIMARY_COLOR} distance={20} />
            
            {/* Mouse Follow Light */}
            <MouseFollowLight />

            {/* Scene */}
            <Float 
                speed={1.2} 
                rotationIntensity={0.05} 
                floatIntensity={0.2} 
                floatingRange={[-0.1, 0.1]}
                position={[0, 0, 0]} 
            >
                <GlbModel scale={1} /> 
            </Float>

            <FloatingParticles />
            
            <Environment preset="city" blur={1} environmentIntensity={0.5} />
        </Suspense>
        
        {/* Controls - Outside Suspense so they work immediately */}
        <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={0.5}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
            minDistance={8}
            maxDistance={25}
            enableDamping
            dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}
