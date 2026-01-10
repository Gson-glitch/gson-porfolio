'use client';

import Link from 'next/link';

export default function HeroOverlay() {
  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
      <div className="animate-slide-up max-w-lg md:max-w-2xl">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-3 md:mb-4">
          Gloryson <span className="text-gradient">Ondanje</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-2">
          Machine Learning Engineer
        </p>
        <p className="text-sm sm:text-base md:text-lg text-foreground/60 mb-6 md:mb-8">
          Building intelligent systems across Computer Vision, NLP, and
          Reinforcement Learning with 3+ years of production experience
        </p>

        {/* Quick Stats */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-6 md:mb-12">
          <div className="glass px-4 py-2 sm:px-6 sm:py-3 rounded-lg">
            <p className="text-xl sm:text-2xl font-bold text-gradient">3+</p>
            <p className="text-xs sm:text-sm text-foreground/60">Years Experience</p>
          </div>
          <div className="glass px-4 py-2 sm:px-6 sm:py-3 rounded-lg">
            <p className="text-xl sm:text-2xl font-bold text-gradient">8+</p>
            <p className="text-xs sm:text-sm text-foreground/60">Projects Deployed</p>
          </div>
          <div className="glass px-4 py-2 sm:px-6 sm:py-3 rounded-lg">
            <p className="text-xl sm:text-2xl font-bold text-gradient">92%</p>
            <p className="text-xs sm:text-sm text-foreground/60">Model Accuracy</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/projects"
            className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-gradient-to-r from-primary to-accent rounded-lg font-medium hover:opacity-90 transition-opacity text-xs sm:text-sm md:text-base"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 glass rounded-lg font-medium hover:bg-white/10 transition-colors text-xs sm:text-sm md:text-base"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
