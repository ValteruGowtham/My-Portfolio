import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Octahedron, MeshDistortMaterial } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

// Rotating geometric shape
const RotatingShape = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <Icosahedron ref={meshRef} args={[0.5, 1]} position={position}>
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.6}
        />
      </Icosahedron>
    </Float>
  );
};

// Pulsing octahedron
const PulsingOctahedron = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      meshRef.current.scale.setScalar(scale);
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float speed={1} floatIntensity={0.4}>
      <Octahedron ref={meshRef} args={[0.6]} position={position}>
        <MeshDistortMaterial
          color="#ffffff"
          attach="material"
          distort={0.2}
          speed={3}
          roughness={0.3}
          metalness={0.7}
        />
      </Octahedron>
    </Float>
  );
};

const ProjectsScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 45 }}
      className="w-full h-full"
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={0.6} />
      <pointLight position={[-5, -5, -5]} intensity={0.3} color="#c0c0c0" />

      <RotatingShape position={[-4, 2, 0]} color="#ffffff" />
      <RotatingShape position={[4, -1.5, 1]} color="#e0e0e0" />
      <RotatingShape position={[-3, -2, -1]} color="#d0d0d0" />
      <PulsingOctahedron position={[3, 1.5, -1]} />
      <PulsingOctahedron position={[0, -2.5, 0]} />
    </Canvas>
  );
};

const ThreeProjectsScene = () => {
  return (
    <div className="absolute inset-0 opacity-25 pointer-events-none">
      <Suspense fallback={null}>
        <ProjectsScene />
      </Suspense>
    </div>
  );
};

export default ThreeProjectsScene;
