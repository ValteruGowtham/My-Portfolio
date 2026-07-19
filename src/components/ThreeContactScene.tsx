import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Ring, Torus } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

// Orbiting ring
const OrbitingRing = ({ radius, speed, color, tilt }: { 
  radius: number; 
  speed: number; 
  color: string;
  tilt: number;
}) => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * speed;
    }
  });

  return (
    <group ref={groupRef} rotation={[tilt, 0, 0]}>
      <Ring args={[radius, radius + 0.03, 64]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color={color} transparent opacity={0.4} side={THREE.DoubleSide} />
      </Ring>
    </group>
  );
};

// Central glowing sphere
const CentralSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.05;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color="#ffffff"
        emissive="#ffffff"
        emissiveIntensity={0.3}
        metalness={0.9}
        roughness={0.1}
      />
    </mesh>
  );
};

// Floating torus
const FloatingTorus = ({ position, rotation }: { 
  position: [number, number, number]; 
  rotation: [number, number, number];
}) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = rotation[0] + state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = rotation[1] + state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={1.2} floatIntensity={0.3}>
      <Torus ref={meshRef} args={[0.3, 0.1, 16, 32]} position={position}>
        <meshStandardMaterial
          color="#c7d2fe"
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.7}
        />
      </Torus>
    </Float>
  );
};

const ContactScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      className="w-full h-full"
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 3, 3]} intensity={0.8} />
      <pointLight position={[-3, -3, -3]} intensity={0.4} color="#a5b4fc" />

      <CentralSphere />
      
      <OrbitingRing radius={1.2} speed={0.5} color="#ffffff" tilt={0.3} />
      <OrbitingRing radius={1.6} speed={-0.3} color="#c7d2fe" tilt={-0.5} />
      <OrbitingRing radius={2} speed={0.2} color="#a5b4fc" tilt={0.8} />

      <FloatingTorus position={[-2, 1.5, -1]} rotation={[0.5, 0.3, 0]} />
      <FloatingTorus position={[2.5, -1, 0.5]} rotation={[0.2, 0.8, 0]} />
    </Canvas>
  );
};

const ThreeContactScene = () => {
  return (
    <div className="absolute inset-0 opacity-30 pointer-events-none">
      <Suspense fallback={null}>
        <ContactScene />
      </Suspense>
    </div>
  );
};

export default ThreeContactScene;
