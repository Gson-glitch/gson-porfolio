'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X, Github, Linkedin, Mail, FileDown } from 'lucide-react';
import { contactInfo } from '@/data/skills';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Experience', href: '/experience' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pl-safe pr-safe ${
        isScrolled 
        ? 'glass py-4 landscape:py-2 lg:landscape:py-4' 
        : 'bg-transparent py-6 landscape:py-2 lg:landscape:py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-gradient hover:opacity-80 transition-opacity landscape:text-xl lg:landscape:text-2xl"
        >
          GO
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transition-colors relative group ${
                isActive(link.href)
                  ? 'text-foreground'
                  : 'text-foreground/80 hover:text-foreground'
              }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                  isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Social Links & Resume - Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/80 hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/80 hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className="text-foreground/80 hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="/resume/Gloryson_Ondanje_Resume.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-accent rounded-lg hover:opacity-90 transition-opacity"
          >
            <FileDown size={18} />
            <span className="font-medium">Resume</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Optimized for Landscape Phones */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass mt-4 mx-6 rounded-lg p-6 animate-fade-in max-h-[70vh] landscape:max-h-[80vh] overflow-y-auto landscape:mt-1 landscape:p-3 landscape:mx-4">
          <div className="flex flex-col gap-4 landscape:gap-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`transition-colors py-2 landscape:py-1 ${
                  isActive(link.href)
                    ? 'text-foreground font-medium'
                    : 'text-foreground/80 hover:text-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10 landscape:pt-2">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
            
            <a
              href="/resume/Gloryson_Ondanje_Resume.pdf"
              download
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-accent rounded-lg hover:opacity-90 transition-opacity landscape:py-1.5 landscape:mt-1"
            >
              <FileDown size={18} />
              <span className="font-medium">Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
