'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl text-center text-foreground/60">
        <p>© {currentYear} Gloryson Ondanje. All rights Reserved.</p>
      </div>
    </footer>
  );
}