'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { contactInfo } from '@/data/skills';

export default function ContactPage() {
  return (
    <section className="py-32 px-6 min-h-screen bg-white/5">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6 text-gradient">Get In Touch</h2>
          <p className="text-lg text-foreground/80 mb-12">
            I&apos;m currently open to new opportunities and collaborations. Feel free to
            reach out!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <a
              href={`mailto:${contactInfo.email}`}
              className="glass rounded-xl p-6 hover:bg-white/10 transition-all flex items-center gap-4"
            >
              <Mail className="text-primary" size={24} />
              <div className="text-left">
                <p className="text-sm text-foreground/60">Email</p>
                <p className="font-medium">{contactInfo.email}</p>
              </div>
            </a>

            <a
              href={`tel:${contactInfo.phone}`}
              className="glass rounded-xl p-6 hover:bg-white/10 transition-all flex items-center gap-4"
            >
              <Phone className="text-accent" size={24} />
              <div className="text-left">
                <p className="text-sm text-foreground/60">Phone</p>
                <p className="font-medium">{contactInfo.phone}</p>
              </div>
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass rounded-lg hover:bg-white/10 transition-all"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass rounded-lg hover:bg-white/10 transition-all"
            >
              <Github size={24} />
            </a>
          </div>
        </motion.div>
      </div>

      <footer className="mt-20 py-8 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-6xl text-center text-foreground/60">
          <p>© 2025 Gloryson Ondanje.</p>
        </div>
      </footer>
    </section>
  );
}
