'use client';

import HeroOverlay from './components/dom/HeroOverlay';
import Footer from './components/dom/Footer';

export default function Home() {
  return (
    <section className="relative h-screen overflow-hidden grain w-full">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-primary/5" />
        <HeroOverlay />
      <div className="absolute bottom-0 left-0 right-0">
        <Footer />
      </div>
    </section>
  );
}
