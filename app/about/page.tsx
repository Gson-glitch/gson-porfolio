'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/dom/Footer';

export default function AboutPage() {
  return (
    <>
      <section className="py-32 px-6 min-h-screen">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-8"
          >
            <h2 className="text-4xl font-bold mb-6 text-gradient">About Me</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              I&apos;m a Machine Learning Engineer with 3+ years of experience designing,
              training, and deploying ML models in production. I specialize in building
              end-to-end ML systems across{' '}
              <span className="text-primary font-semibold">Computer Vision</span>,{' '}
              <span className="text-accent font-semibold">NLP</span>, and{' '}
              <span className="text-orange-500 font-semibold">
                Reinforcement Learning
              </span>{' '}
              domains.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              I&apos;m proficient in Python, TensorFlow, and PyTorch, with strong expertise
              in model optimization, data pipelines, and evaluation metrics.
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
