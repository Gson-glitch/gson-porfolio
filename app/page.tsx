'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import HeroOverlay from './components/dom/HeroOverlay';
import ProjectCard from './components/dom/ProjectCard';
import CertificateModal from './components/dom/CertificateModal';
import { projects, type Project } from './data/projects';
import { experiences, education } from './data/experience';
import { skillCategories, contactInfo } from './data/skills';
import { motion } from 'framer-motion';
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Github,
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  Eye,
} from 'lucide-react';

// Import generated certificate data
// Run `npm run dev` to generate this file if missing
import generatedCertificates from './data/certificates.json';

const Scene = dynamic(() => import('./components/canvas/Scene'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-primary/10" />
  ),
});

export default function Home() {
  const [pinnedRepos, setPinnedRepos] = useState<Project[]>([]);
  const [loadingRepos, setLoadingRepos] = useState(true);
  
  // State for the PDF Modal
  const [selectedCert, setSelectedCert] = useState<any | null>(null);

  // 1. Fetch Pinned Repos (GitHub) - Preserved from your version
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch('/api/github');
        if (res.ok) {
          const data = await res.json();
          setPinnedRepos(data);
        }
      } catch (error) {
        console.error('Failed to fetch repos', error);
      } finally {
        setLoadingRepos(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <>
      <section id="hero" className="relative min-h-screen overflow-hidden grain">
        <Scene />
        <HeroOverlay />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            <h2 className="text-4xl font-bold mb-6 text-gradient">About Me</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              I'm a Machine Learning Engineer with 3+ years of experience designing,
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
              I'm proficient in Python, TensorFlow, and PyTorch, with strong expertise
              in model optimization, data pipelines, and evaluation metrics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-white/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-gradient">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{exp.position}</h3>
                    <p className="text-xl text-primary mb-1">{exp.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-foreground/60">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase size={14} />
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-lg text-sm">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    {exp.current && (
                      <span className="ml-2 px-3 py-1 bg-accent/20 text-accent rounded-full text-xs">
                        Current
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-foreground/80 mb-4">{exp.description}</p>
                <div className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, idx) => (
                    <p key={idx} className="text-foreground/70 flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{achievement}</span>
                    </p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/5 rounded-full text-xs text-foreground/80 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-6 mt-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/20 rounded-lg">
                <GraduationCap className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">{education.degree}</h3>
                <p className="text-primary mb-1">{education.institution}</p>
                <div className="flex flex-wrap gap-4 text-sm text-foreground/60">
                  <span>{education.location}</span>
                  <span>•</span>
                  <span>{education.period}</span>
                </div>
                {education.description && (
                  <p className="text-foreground/70 mt-2">{education.description}</p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section - Preserved Layout */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          
          <h2 className="text-4xl font-bold mb-12 text-center text-gradient">
            Accomplishments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
                showLink={false}
              />
            ))}
          </div>

          <h3 className="text-3xl font-bold mb-8 text-center">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loadingRepos ? (
              <p className="text-center w-full col-span-3 text-foreground/60">Loading GitHub projects...</p>
            ) : pinnedRepos.length > 0 ? (
              pinnedRepos.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index} 
                  showLink={true}
                />
              ))
            ) : (
              <p className="text-center w-full col-span-3 text-foreground/60">No pinned repositories found.</p>
            )}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-white/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-gradient">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} mb-4 flex items-center justify-center`}
                >
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/5 rounded-full text-sm text-foreground/80 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section (MERGED PREVIEW FEATURE) */}
      <section id="certifications" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-gradient">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {generatedCertificates.length > 0 ? (
              generatedCertificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedCert(cert)}
                  className="glass rounded-xl overflow-hidden cursor-pointer group hover:bg-white/10 transition-all flex flex-col"
                >
                  {/* Image Preview Area */}
                  <div className="relative w-full h-48 bg-black/20 overflow-hidden">
                    <Image 
                      src={cert.thumbnail} 
                      alt={cert.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay Icon */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white/10 backdrop-blur-md p-3 rounded-full">
                         <Eye className="text-white" size={24} />
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-accent/20 rounded-lg shrink-0">
                        <Award className="text-accent" size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1 leading-snug">
                          {cert.name}
                        </h3>
                        <p className="text-sm text-foreground/60">{cert.issuer}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="text-center w-full col-span-3 text-foreground/60">
                No certificates found. Add .pdf files to public/certificates
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Certificate Modal Instance */}
      <CertificateModal 
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        fileUrl={selectedCert?.pdf || ''}
        title={selectedCert?.name || ''}
      />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white/5">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gradient">Get In Touch</h2>
            <p className="text-lg text-foreground/80 mb-12">
              I'm currently open to new opportunities and collaborations. Feel free to
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
      </section>

      <footer className="py-8 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-6xl text-center text-foreground/60">
          <p>© 2025 Gloryson Ondanje. Built with Next.js, React Three Fiber & GSAP</p>
        </div>
      </footer>
    </>
  );
}