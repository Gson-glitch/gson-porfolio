'use client';

import { useState, useEffect } from 'react';

interface CardLimits {
  large: number;
  tablet: number;
}

export const useCardLimits = (): CardLimits => {
  const getCardLimits = (): CardLimits => {
    if (typeof window === 'undefined') return { large: 6, tablet: 4 };
    const width = window.innerWidth;
    if (width >= 1024) return { large: 6, tablet: 6 }; // lg screens
    if (width >= 768) return { large: 4, tablet: 4 }; // md screens
    return { large: 4, tablet: 4 }; // mobile
  };

  const [cardLimits, setCardLimits] = useState<CardLimits>({ large: 6, tablet: 4 });

  useEffect(() => {
    const updateLimits = () => setCardLimits(getCardLimits());
    updateLimits();
    window.addEventListener('resize', updateLimits);
    return () => window.removeEventListener('resize', updateLimits);
  }, []);

  return cardLimits;
};
