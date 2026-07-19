import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Suspense, useRef, useMemo } from "react";
import * as THREE from "three";

// Floating particles for background
const Particles = ({ count = 100 }) => {
  const mesh = useRef<THREE.Points>(null!);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.02;
      mesh.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

// Floating orb with distortion
const FloatingOrb = ({ position, color, speed = 1, distort = 0.4 }: { 
  position: [number, number, number]; 
  color: string; 
  speed?: number;
  distort?: number;
}) => {
  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.8}>
      <Sphere args={[0.4, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const SkillsScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      className="w-full h-full"
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.4} color="#c7d2fe" />

      <Particles count={150} />
      
      <FloatingOrb position={[-3, 1.5, 0]} color="#ffffff" speed={1.2} />
      <FloatingOrb position={[3, -1, 1]} color="#a5b4fc" speed={0.8} distort={0.3} />
      <FloatingOrb position={[0, 2, -2]} color="#c7d2fe" speed={1} distort={0.5} />
      <FloatingOrb position={[-2, -1.5, 1]} color="#cbd5e1" speed={1.4} distort={0.35} />
      <FloatingOrb position={[2.5, 0.5, -1]} color="#f0f0f0" speed={0.9} distort={0.45} />
    </Canvas>
  );
};

const ThreeSkillsScene = () => {
  return (
    <div className="absolute inset-0 opacity-30 pointer-events-none">
      <Suspense fallback={null}>
        <SkillsScene />
      </Suspense>
    </div>
  );
};

export default ThreeSkillsScene;
