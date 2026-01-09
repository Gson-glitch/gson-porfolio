'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense, useMemo } from 'react';
import Model from './Model';
import Effects from './Effects';
import FloatingBubbles from './FloatingBubbles';

export default function Scene() {
  // Generate random bubble positions once on mount
  const bubblePositions = useMemo(() => {
    return Array.from({ length: 4 }, () => ({
      x: (Math.random() - 0.5) * 8,
      y: (Math.random() - 0.5) * 6,
      z: (Math.random() - 0.5) * 4,
      color: ['#10b981', '#f59e0b', '#ef4444', '#8b5cf6'][Math.floor(Math.random() * 4)],
      scale: 0.2 + Math.random() * 0.2,
      speed: 0.3 + Math.random() * 0.4,
    }));
  }, []);

  return (
    <Canvas
      className="fixed inset-0 -z-10"
      gl={{ antialias: true, alpha: true }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
      
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4f46e5" />
      
      {/* 3D Model */}
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      
      {/* Floating Bubbles with random positions */}
      <FloatingBubbles positions={bubblePositions} />
      
      {/* Effects */}
      <Effects />
      
      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </Canvas>
  );
}