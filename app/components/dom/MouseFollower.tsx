'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MouseFollower() {
  const [isDesktop, setIsDesktop] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const hasPointer = window.matchMedia('(pointer: fine)').matches;
    setIsDesktop(hasPointer);
    if (!hasPointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16); 
      mouseY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isDesktop) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-50 w-8 h-8 rounded-full border-2 border-accent mix-blend-difference"
      style={{
        x,
        y,
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
        willChange: 'transform',
      }}
    />
  );
}
