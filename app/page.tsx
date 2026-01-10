'use client';

import dynamic from 'next/dynamic';
import HeroOverlay from './components/dom/HeroOverlay';

const Scene = dynamic(() => import('./components/canvas/Scene'), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background to-primary/10" />
  ),
});

export default function Home() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden grain">
      <Scene />
      <HeroOverlay />
    </section>
  );
}
