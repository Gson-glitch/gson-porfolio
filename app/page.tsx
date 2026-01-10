'use client';

import dynamic from 'next/dynamic';
import HeroOverlay from './components/dom/HeroOverlay';
import Footer from './components/dom/Footer';

const Scene = dynamic(() => import('./components/canvas/Scene'), {
  ssr: false,
  loading: () => (
    <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-background to-primary/10" />
  ),
});

export default function Home() {
  return (
    <section className="relative h-screen overflow-hidden grain w-full">
      <div className="hidden md:block landscape:hidden lg:landscape:block absolute top-0 left-0 right-0 h-1/3 -z-10">
        <Scene />
      </div>
      
      <HeroOverlay />
      
      <div className="absolute bottom-0 left-0 right-0">
        <Footer />
      </div>
    </section>
  );
}
