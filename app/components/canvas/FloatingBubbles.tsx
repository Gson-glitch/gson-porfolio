'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

interface BubblePosition {
  x: number;
  y: number;
  z: number;
  color: string;
  scale: number;
  speed: number;
}

interface FloatingBubblesProps {
  positions: BubblePosition[];
}

export default function FloatingBubbles({ positions }: FloatingBubblesProps) {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((bubble, index) => {
        const pos = positions[index];
        const time = state.clock.elapsedTime * pos.speed;
        
        // Slow circular motion
        bubble.position.x = pos.x + Math.sin(time) * 0.5;
        bubble.position.y = pos.y + Math.cos(time * 0.7) * 0.3;
        bubble.position.z = pos.z + Math.sin(time * 0.5) * 0.2;
        
        // Gentle rotation
        bubble.rotation.x = time * 0.1;
        bubble.rotation.y = time * 0.15;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {positions.map((pos, index) => (
        <mesh key={index} position={[pos.x, pos.y, pos.z]} scale={pos.scale}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color={pos.color}
            emissive={pos.color}
            emissiveIntensity={0.5}
            transparent
            opacity={0.6}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}