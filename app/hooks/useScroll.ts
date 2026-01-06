'use client';

import { useEffect, useState } from 'react';

export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (currentScrollY / scrollHeight) * 100 : 0;

      setScrollY(currentScrollY);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, scrollProgress };
};
