'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, FileDown } from 'lucide-react';
import { contactInfo } from '@/data/skills';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-bold text-gradient hover:opacity-80 transition-opacity"
        >
          GO
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground/80 hover:text-foreground transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Social Links & Resume */}
        <div className="hidden md:flex items-center gap-4">
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
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-4 mx-6 rounded-lg p-6 animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground/80 hover:text-foreground transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
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
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-accent rounded-lg hover:opacity-90 transition-opacity"
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
