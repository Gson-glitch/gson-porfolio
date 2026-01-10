'use client';

import Link from 'next/link';

export default function HeroOverlay() {
  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
      <div className="animate-slide-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Gloryson <span className="text-gradient">Ondanje</span>
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 mb-2">
          Machine Learning Engineer
        </p>
        <p className="text-lg text-foreground/60 mb-8 max-w-2xl">
          Building intelligent systems across Computer Vision, NLP, and
          Reinforcement Learning with 3+ years of production experience
        </p>

        {/* Quick Stats */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
          <div className="glass px-6 py-3 rounded-lg">
            <p className="text-2xl font-bold text-gradient">3+</p>
            <p className="text-sm text-foreground/60">Years Experience</p>
          </div>
          <div className="glass px-6 py-3 rounded-lg">
            <p className="text-2xl font-bold text-gradient">8+</p>
            <p className="text-sm text-foreground/60">Projects Deployed</p>
          </div>
          <div className="glass px-6 py-3 rounded-lg">
            <p className="text-2xl font-bold text-gradient">40%</p>
            <p className="text-sm text-foreground/60">Latency Reduced</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/projects"
            className="px-8 py-3 bg-gradient-to-r from-primary to-accent rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 glass rounded-lg font-medium hover:bg-white/10 transition-colors"
          >
            Get In Touch
          </Link>
        </div>

        {/* Scroll Indicator */}
        <Link
          href="/about"
          className="inline-block animate-bounce cursor-pointer hover:text-primary transition-colors"
          aria-label="Scroll down"
        >
        </Link>
      </div>
    </div>
  );
}
