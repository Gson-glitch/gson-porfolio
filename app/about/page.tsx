'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/dom/Footer';
import RobotAnimation from '@/components/dom/RobotAnimation';

export default function AboutPage() {
  return (
    <>
      <section className="h-screen overflow-hidden py-16 md:py-20 px-4 md:px-6 flex items-center">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Lottie Animation - Left side (hidden on mobile) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="hidden md:flex justify-center"
            >
              <RobotAnimation />
            </motion.div>

            {/* Content - Right side (full width on mobile) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass rounded-2xl p-6 md:p-8 lg:p-10"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                <span className="text-gradient">Hi, I&apos;m Gloryson. 👋</span>
              </h2>
              
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 md:mb-6 text-foreground/90">
                I build intelligent systems that work in the real world.
              </h3>
              
              <p className="text-sm sm:text-base lg:text-lg text-foreground/80 leading-relaxed mb-3 md:mb-4">
                With 3+ years of production experience, I specialize in shipping scalable models across{' '}
                <span className="text-primary font-semibold">Computer Vision</span>,{' '}
                <span className="text-accent font-semibold">NLP</span>, and{' '}
                <span className="text-orange-500 font-semibold">Reinforcement Learning</span>. 
                I bridge the gap between complex research and reliable software.
              </p>
              
              <p className="text-sm sm:text-base lg:text-lg text-foreground/80 leading-relaxed">
                My goal? Making machines smarter without the robot apocalypse. 
                So far, so good. 🤖
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="absolute bottom-0 left-0 right-0">
        <Footer />
      </div>
    </>
  );
}
