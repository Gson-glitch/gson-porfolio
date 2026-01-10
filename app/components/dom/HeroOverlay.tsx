'use client';

import Link from 'next/link';

export default function HeroOverlay() {
  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center overflow-y-auto overflow-x-hidden no-scrollbar pl-safe pr-safe pb-safe pt-20 landscape:pt-16 landscape:justify-start lg:landscape:justify-center lg:landscape:pt-0">
      <div className="animate-slide-up max-w-lg md:max-w-2xl w-full py-4 landscape:py-2 lg:landscape:py-4">
        {/* Heading: Compact on phone landscape, Huge on Desktop */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-3 md:mb-4 landscape:mb-1 landscape:text-3xl lg:landscape:text-7xl lg:landscape:mb-4">
          Gloryson <span className="text-gradient">Ondanje</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-2 landscape:text-base landscape:mb-1 lg:landscape:text-2xl lg:landscape:mb-2">
          Machine Learning Engineer
        </p>
        
        {/* Bio Text */}
        <p className="text-sm sm:text-base md:text-lg text-foreground/60 mb-6 md:mb-8 landscape:mb-3 landscape:text-xs landscape:max-w-xl landscape:mx-auto lg:landscape:text-lg lg:landscape:mb-8 lg:landscape:max-w-2xl">
          Building intelligent systems across Computer Vision, NLP, and
          Reinforcement Learning with 3+ years of production experience
        </p>

        {/* Quick Stats: Small on phone landscape, Original size on Desktop */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-6 md:mb-12 landscape:mb-4 landscape:gap-2 lg:landscape:gap-6 lg:landscape:mb-12">
          <div className="glass px-4 py-2 sm:px-6 sm:py-3 rounded-lg landscape:px-3 landscape:py-1 lg:landscape:px-6 lg:landscape:py-3">
            <p className="text-xl sm:text-2xl font-bold text-gradient landscape:text-lg lg:landscape:text-2xl">3+</p>
            <p className="text-xs sm:text-sm text-foreground/60 landscape:text-[10px] lg:landscape:text-sm">Years Experience</p>
          </div>
          <div className="glass px-4 py-2 sm:px-6 sm:py-3 rounded-lg landscape:px-3 landscape:py-1 lg:landscape:px-6 lg:landscape:py-3">
            <p className="text-xl sm:text-2xl font-bold text-gradient landscape:text-lg lg:landscape:text-2xl">8+</p>
            <p className="text-xs sm:text-sm text-foreground/60 landscape:text-[10px] lg:landscape:text-sm">Projects Deployed</p>
          </div>
          <div className="glass px-4 py-2 sm:px-6 sm:py-3 rounded-lg landscape:px-3 landscape:py-1 lg:landscape:px-6 lg:landscape:py-3">
            <p className="text-xl sm:text-2xl font-bold text-gradient landscape:text-lg lg:landscape:text-2xl">&lt;1ms</p>
            <p className="text-xs sm:text-sm text-foreground/60 landscape:text-[10px] lg:landscape:text-sm">Response Time</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 pb-8 landscape:pb-4 lg:landscape:pb-0">
          <Link
            href="/projects"
            className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-gradient-to-r from-primary to-accent rounded-lg font-medium hover:opacity-90 transition-opacity text-xs sm:text-sm md:text-base landscape:py-1.5 landscape:text-xs lg:landscape:text-base lg:landscape:py-3"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 glass rounded-lg font-medium hover:bg-white/10 transition-colors text-xs sm:text-sm md:text-base landscape:py-1.5 landscape:text-xs lg:landscape:text-base lg:landscape:py-3"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
