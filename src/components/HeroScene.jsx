import * as THREE from 'three';
import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Stars, Sparkles, useTexture } from '@react-three/drei';
import suvoImg from '../assets/suvo.jpeg';

/* ─── Premium Orbiting Ring with path variation ─── */
function OrbitRing({ radius, tube, color, rotation, speed, opacity = 0.6 }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.z = clock.getElapsedTime() * speed;
      // Subtle wobble
      ref.current.rotation.x += Math.sin(clock.getElapsedTime() * 0.5) * 0.0005;
    }
  });
  return (
    <mesh ref={ref} rotation={rotation}>
      <torusGeometry args={[radius, tube, 32, 200]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.2}
        transparent
        opacity={opacity}
      />
    </mesh>
  );
}

/* ─── Premium Glass Card with Image ─── */
function AvatarCard() {
  const texture = useTexture(suvoImg);
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Gentle floating and tilting
      meshRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.8) * 0.15;
      meshRef.current.rotation.y = Math.cos(clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={meshRef}>
        {/* Main Card */}
        <mesh>
          <boxGeometry args={[2.8, 3.8, 0.1]} />
          <meshPhysicalMaterial
            transparent
            opacity={0.4}
            transmission={0.95}
            thickness={0.5}
            roughness={0.05}
            metalness={0.1}
            color="#ffffff"
            ior={1.5}
          />
        </mesh>

        {/* Image Mesh (slightly in front) */}
        <mesh position={[0, 0, 0.06]}>
          <planeGeometry args={[2.5, 3.5]} />
          <meshBasicMaterial map={texture} transparent opacity={0.95} />
        </mesh>

        {/* Bezel / Border Glow */}
        <mesh position={[0, 0, -0.01]}>
          <boxGeometry args={[2.85, 3.85, 0.08]} />
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#22d3ee"
            emissiveIntensity={1.5}
            wireframe
          />
        </mesh>
      </group>
    </Float>
  );
}

/* ─── Scene root — handles mouse-follow rotation ─── */
function Scene({ mouseRef }) {
  const groupRef = useRef();

  useFrame(() => {
    if (!groupRef.current) return;
    const g = groupRef.current;
    // Smooth lerp toward cursor direction
    g.rotation.y += (mouseRef.current.x * 0.45 - g.rotation.y) * 0.04;
    g.rotation.x += (-mouseRef.current.y * 0.32 - g.rotation.x) * 0.04;
  });

  return (
    <>
      {/* Cinematic Lighting System */}
      <ambientLight intensity={0.4} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
      <pointLight position={[-5, 5, 5]} intensity={3} color="#818cf8" />
      <pointLight position={[5, -5, 5]} intensity={3} color="#22d3ee" />
      
      {/* Moving Highlight Light */}
      <MovingLight />

      {/* Background stars */}
      <Stars radius={50} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />

      {/* Floating sparkle particles */}
      <Sparkles
        count={60}
        scale={8}
        size={2}
        speed={0.4}
        color="#22d3ee"
        opacity={0.7}
      />

      {/* Mouse-tracked group */}
      <group ref={groupRef}>
        <AvatarCard />

        {/* Ring 1 — Outer */}
        <OrbitRing
          radius={3.2}
          tube={0.015}
          color="#818cf8"
          rotation={[Math.PI / 3, 0, 0]}
          speed={0.2}
          opacity={0.4}
        />

        {/* Ring 2 — Middle */}
        <OrbitRing
          radius={2.8}
          tube={0.025}
          color="#22d3ee"
          rotation={[-Math.PI / 4, Math.PI / 4, 0]}
          speed={-0.3}
          opacity={0.5}
        />

        {/* Ring 3 — Inner fast */}
        <OrbitRing
          radius={2.4}
          tube={0.01}
          color="#ffffff"
          rotation={[Math.PI / 2, 0, Math.PI / 3]}
          speed={0.5}
          opacity={0.3}
        />
      </group>
    </>
  );
}

function MovingLight() {
  const lightRef = useRef();
  useFrame(({ clock }) => {
    if (lightRef.current) {
      const t = clock.getElapsedTime();
      lightRef.current.position.set(Math.sin(t) * 5, Math.cos(t * 0.5) * 5, 5);
    }
  });
  return <pointLight ref={lightRef} intensity={2} color="#ffffff" />;
}

/* ─── Exported canvas wrapper ─── */
export default function HeroScene() {
  const mouseRef = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    mouseRef.current = {
      x: ((e.clientX - left) / width - 0.5) * 2,
      y: ((e.clientY - top) / height - 0.5) * 2,
    };
  };

  // Smoothly return to center when cursor leaves
  const handleMouseLeave = () => {
    mouseRef.current = { x: 0, y: 0 };
  };

  return (
    <div
      className="w-full h-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 42 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <Scene mouseRef={mouseRef} />
        </Suspense>
      </Canvas>
    </div>
  );
}
