import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

const RotatingTorus = () => {
  const meshRef = useRef<Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!meshRef.current) return;
    meshRef.current.rotation.x = t * 0.3;
    meshRef.current.rotation.y = t * 0.5;
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <torusKnotGeometry args={[1.1, 0.35, 220, 32]} />
      <meshStandardMaterial
        color="#ffffff"
        metalness={0.9}
        roughness={0.15}
        envMapIntensity={1.2}
      />
    </mesh>
  );
};

const HeroScene = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 6], fov: 45 }}
      className="w-full h-full"
    >
      <color attach="background" args={[0.08, 0.08, 0.08]} />

      <ambientLight intensity={0.4} />
      <directionalLight
        position={[4, 6, 6]}
        intensity={1.4}
        castShadow
      />
      <pointLight position={[-6, -4, -4]} intensity={0.4} />

      <Stars
        radius={40}
        depth={50}
        count={8000}
        factor={4}
        saturation={0}
        fade
        speed={0.3}
      />

      <RotatingTorus />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
};

const ThreeHeroScene = () => {
  return (
    <div className="w-full h-full">
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>
    </div>
  );
};

export default ThreeHeroScene;
