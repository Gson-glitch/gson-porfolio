'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 px-6 border-t border-white/10 landscape:py-2 lg:landscape:py-8 transition-all bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl text-center text-foreground/60">
        <p className="text-sm landscape:text-[10px] lg:landscape:text-sm">
          © {currentYear} Gloryson Ondanje. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
