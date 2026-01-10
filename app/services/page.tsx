'use client';

import { motion } from 'framer-motion';
import { Brain, Eye, Cpu, Code, Database, Rocket } from 'lucide-react';
import Footer from '@/components/dom/Footer';

const services = [
  {
    icon: Brain,
    title: 'Machine Learning Solutions',
    description: 'End-to-end ML model development, training, and deployment for production environments.',
    features: ['Model Architecture Design', 'Hyperparameter Tuning', 'Performance Optimization', 'Production Deployment']
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Advanced image and video processing solutions using state-of-the-art deep learning techniques.',
    features: ['Object Detection', 'Image Classification', 'Semantic Segmentation', 'Video Analysis']
  },
  {
    icon: Cpu,
    title: 'Natural Language Processing',
    description: 'NLP solutions including RAG systems, text analysis, and language understanding.',
    features: ['RAG Systems', 'Text Classification', 'Sentiment Analysis', 'Information Extraction']
  },
  {
    icon: Rocket,
    title: 'Reinforcement Learning',
    description: 'RL-based solutions for autonomous systems, robotics, and control optimization.',
    features: ['Policy Optimization', 'Self-Tuning Controllers', 'Autonomous Navigation', 'ROS2 Integration']
  },
  {
    icon: Code,
    title: 'MLOps & Deployment',
    description: 'Scalable ML infrastructure setup with containerization and CI/CD pipelines.',
    features: ['Docker & Kubernetes', 'Model Monitoring', 'A/B Testing', 'AutoML Pipelines']
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Data pipeline development and optimization for ML workflows.',
    features: ['ETL Pipelines', 'Data Preprocessing', 'Feature Engineering', 'Big Data Processing']
  }
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-24 md:py-32 px-4 md:px-6 min-h-screen bg-white/5">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gradient">Services</h2>
            <p className="text-sm md:text-lg text-foreground/80 max-w-3xl mx-auto">
              Comprehensive ML engineering services from concept to deployment. 
              I help businesses leverage AI to solve complex problems and drive innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-xl p-5 md:p-6 hover:bg-white/10 transition-all group"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-br from-primary to-accent mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="text-white w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{service.title}</h3>
                  <p className="text-sm md:text-base text-foreground/70 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-foreground/60 flex items-start gap-2 text-xs md:text-sm">
                        <span className="text-accent mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 md:mt-16 text-center"
          >
            <div className="glass rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Ready to Start Your Project?</h3>
              <p className="text-sm md:text-base text-foreground/80 mb-6">
                Let&apos;s discuss how I can help bring your ML project to life
              </p>
              <a
                href="/contact"
                className="inline-flex px-6 py-2.5 md:px-8 md:py-3 bg-gradient-to-r from-primary to-accent rounded-lg text-sm md:text-base font-medium hover:opacity-90 transition-opacity"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
