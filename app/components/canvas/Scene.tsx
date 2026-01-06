'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float } from '@react-three/drei';
import { Suspense } from 'react';
import Model from './Model';
import Effects from './Effects';

export default function Scene() {
  return (
    <Canvas
      className="absolute inset-0 -z-10"
      gl={{ antialias: true, alpha: true }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
      
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4f46e5" />
      
      {/* 3D Model */}
      <Suspense fallback={null}>
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <Model />
        </Float>
      </Suspense>
      
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
