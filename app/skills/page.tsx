'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Award, 
  Eye, 
  Brain, 
  Bot, 
  Workflow, 
  LineChart, 
  ScanSearch, 
  Database,
  Layers, 
  Cpu, 
  GitBranch,
  Globe,
  RefreshCw,
  BookOpen,
  type LucideIcon
} from 'lucide-react';
import { skillCategories } from '@/data/skills';
import CertificateModal from '@/components/dom/CertificateModal';
import ShowMoreButton from '@/components/dom/ShowMoreButton';
import { useCardLimits } from '@/hooks/useCardLimits';
import generatedCertificates from '@/data/certificates.json';
import Footer from '@/components/dom/Footer';

interface GeneratedCert {
  id: string;
  name: string;
  issuer: string;
  pdf: string;
  thumbnail: string;
}

// Configuration for Skill Assets (Icon, Color)
const getSkillAsset = (name: string) => {
  const n = name.toLowerCase();
  
  const colors: Record<string, string> = {
    python: '#3776AB',
    java: '#007396',
    typescript: '#3178C6',
    javascript: '#F7DF1E',
    rust: '#DEA584',
    'react.js': '#61DAFB',
    'next.js': '#FFFFFF',
    fastapi: '#009688',
    django: '#092E20',
    flask: '#FFFFFF',
    pytorch: '#EE4C2C',
    tensorflow: '#FF6F00',
    'scikit-learn': '#F7931E',
    pandas: '#150458',
    numpy: '#013243',
    opencv: '#5C3EE8',
    redis: '#DC382D',
    postgresql: '#4169E1',
    llamaindex: '#E5E7EB',
    langchain: '#1C3C3C',
    docker: '#2496ED',
    kubernetes: '#326CE5',
    helm: '#0F1689',
    gcp: '#4285F4',
    azure: '#0078D4',
    aws: '#FF9900',
    git: '#F05032',
    linux: '#FCC624',
    default: '#3B82F6'
  };

  const devIcons: Record<string, string> = {
    python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    typescript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    rust: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg',
    'react.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    pytorch: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
    tensorflow: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    'scikit-learn': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
    pandas: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
    numpy: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
    opencv: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
    docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    kubernetes: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
    terraform: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg',
    git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    fastapi: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
    django: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
    flask: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
    graphql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
    postgresql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    redis: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    gcp: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    azure: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    linux: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    jenkins: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
    pyspark: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg',
    rabbitmq: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg',
    argocd: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg',
    helm: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-original.svg',
    llamaindex: 'https://avatars.githubusercontent.com/u/130722866?s=200&v=4',
    langchain: 'https://cdn.simpleicons.org/langchain/1C3C3C',
  };

  const customIcons: Record<string, LucideIcon> = {
    'supervised learning': Layers,
    'unsupervised learning': GitBranch,
    'nlp': Brain,
    'computer vision': Eye,
    'time-series analysis': LineChart,
    'reinforcement learning': Bot,
    'robotics (ros2, px4, gazebo)': Cpu,
    'rag': ScanSearch,
    'faiss': Layers,
    'deepeval': Award,
    'rest api': Globe,
    'asyncio': Workflow,
    'celery': Layers,
    'multiprocessing': Layers,
    'nltk': BookOpen,
    'ci/cd': RefreshCw,
    'databricks': Database,
  };

  const color = colors[n] || colors.default;
  const devIconUrl = devIcons[n];
  const CustomIcon = customIcons[n];

  return { color, devIconUrl, CustomIcon };
};

export default function SkillsPage() {
  const [selectedCert, setSelectedCert] = useState<GeneratedCert | null>(null);
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [showAllCerts, setShowAllCerts] = useState(false);
  const cardLimits = useCardLimits();

  const displayedSkills = showAllSkills
    ? skillCategories
    : skillCategories.slice(0, cardLimits.large);

  const displayedCerts = showAllCerts
    ? generatedCertificates
    : generatedCertificates.slice(0, cardLimits.large);

  return (
    <>
      <svg width="0" height="0" className="absolute">
        <linearGradient id="skill-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(217, 91%, 60%)" />
          <stop offset="100%" stopColor="hsl(142, 71%, 45%)" />
        </linearGradient>
      </svg>

      <div className="py-24 md:py-32 px-4 md:px-6 min-h-screen">
        <div className="container mx-auto max-w-6xl">
          {/* Technical Skills */}
          <section className="mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center text-gradient">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {displayedSkills.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group glass rounded-xl p-6 hover:bg-white/10 transition-all border border-white/10 hover:border-primary/50 relative overflow-hidden"
                >
                  <h3 className="text-lg md:text-xl font-bold mb-6 text-foreground/90 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, idx) => {
                      const skillName = typeof skill === 'string' ? skill : skill.name;
                      const { color, devIconUrl, CustomIcon } = getSkillAsset(skillName);
                      
                      return (
                        <div
                          key={idx}
                          className="group/skill relative px-3 py-2 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-2.5 overflow-hidden"
                          style={{
                            '--skill-color': color,
                          } as React.CSSProperties}
                        >
                          <div className="absolute inset-0 bg-[var(--skill-color)] opacity-0 group-hover/skill:opacity-10 transition-opacity duration-300" />

                          <div className="relative z-10">
                            {devIconUrl ? (
                              <Image 
                                src={devIconUrl} 
                                alt={skillName}
                                width={20} 
                                height={20}
                                unoptimized={devIconUrl.endsWith('.svg') || devIconUrl.includes('simpleicons.org')}
                                className="w-5 h-5 transition-transform group-hover/skill:scale-110"
                                style={{
                                  filter: `drop-shadow(0 0 8px ${color}80)` 
                                }}
                              />
                            ) : CustomIcon ? (
                              <CustomIcon 
                                size={20}
                                stroke="url(#skill-gradient)"
                                style={{
                                  filter: 'drop-shadow(0 0 5px rgba(59, 130, 246, 0.5))' 
                                }}
                                className="transition-transform group-hover/skill:scale-110"
                              />
                            ) : (
                              <div className="w-2 h-2 rounded-full bg-foreground/50" />
                            )}
                          </div>

                          <span className="text-xs md:text-sm text-foreground/80 font-medium z-10 group-hover/skill:text-foreground transition-colors">
                            {skillName}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>

            {skillCategories.length > cardLimits.large && (
              <ShowMoreButton
                isExpanded={showAllSkills}
                onClick={() => setShowAllSkills(!showAllSkills)}
              />
            )}
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center text-gradient">
              Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {displayedCerts.length > 0 ? (
                displayedCerts.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => setSelectedCert(cert)}
                    className="glass rounded-xl overflow-hidden cursor-pointer group hover:bg-white/10 transition-all flex flex-col border border-white/10 hover:border-primary/40"
                  >
                    <div className="relative w-full h-40 md:h-48 bg-black/20 overflow-hidden">
                      <Image
                        src={cert.thumbnail}
                        alt={cert.name}
                        fill
                        /* ADDED SIZES PROP HERE */
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="bg-white/10 backdrop-blur-md p-2 md:p-3 rounded-full border border-white/20">
                          <Eye className="text-white w-5 h-5 md:w-6 md:h-6" />
                        </div>
                      </div>
                    </div>

                    <div className="p-5 md:p-6">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-accent/10 rounded-lg shrink-0 group-hover:bg-accent/20 transition-colors">
                          <Award className="text-accent w-4 h-4 md:w-5 md:h-5" />
                        </div>
                        <div>
                          <h3 className="font-bold text-base md:text-lg mb-1 leading-snug group-hover:text-primary transition-colors">
                            {cert.name}
                          </h3>
                          <p className="text-xs md:text-sm text-foreground/60">{cert.issuer}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <p className="text-center w-full col-span-1 md:col-span-2 lg:col-span-3 text-sm md:text-base text-foreground/60">
                  No certificates found. Add .pdf files to public/certificates
                </p>
              )}
            </div>

            {generatedCertificates.length > cardLimits.large && (
              <ShowMoreButton
                isExpanded={showAllCerts}
                onClick={() => setShowAllCerts(!showAllCerts)}
              />
            )}
          </section>

          <CertificateModal
            isOpen={!!selectedCert}
            onClose={() => setSelectedCert(null)}
            fileUrl={selectedCert?.pdf || ''}
            title={selectedCert?.name || ''}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
