'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Calendar, GraduationCap, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { experiences, education } from '@/data/experience';
import Footer from '@/components/dom/Footer';

export default function ExperiencePage() {
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null);
  const [showEducationDetails, setShowEducationDetails] = useState(false);

  const toggleExperience = (id: string) => {
    setExpandedExperience(expandedExperience === id ? null : id);
  };

  return (
    <>
      <section className="py-32 px-6 min-h-screen bg-white/5">
        <div className="container mx-auto max-w-6xl">
          {/* Work Experience */}
          <h2 className="text-4xl font-bold mb-12 text-center text-gradient">
            Work Experience
          </h2>
          <div className="space-y-8 mb-16">
            {experiences.map((exp, index) => {
              const isExpanded = expandedExperience === exp.id;
              
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-xl p-6 hover:bg-white/10 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{exp.position}</h3>
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl text-primary hover:text-accent transition-colors mb-1 inline-flex items-center gap-2 group"
                        >
                          {exp.company}
                          <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      ) : (
                        <p className="text-xl text-primary mb-1">{exp.company}</p>
                      )}
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
                  
                  {/* Preview: Only show tech stack when collapsed */}
                  {!isExpanded && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.tech.slice(0, 5).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white/5 rounded-full text-xs text-foreground/80 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                      {exp.tech.length > 5 && (
                        <span className="px-3 py-1 text-xs text-foreground/60">
                          +{exp.tech.length - 5} more
                        </span>
                      )}
                    </div>
                  )}
                  
                  {/* Expanded: Show full details */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="text-lg font-semibold mb-3 text-accent">Accomplishments</h4>
                      <div className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, idx) => (
                          <p key={idx} className="text-foreground/70 flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span>{achievement}</span>
                          </p>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
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
                  )}
                  
                  {/* Toggle Button */}
                  <button
                    onClick={() => toggleExperience(exp.id)}
                    className="flex items-center gap-2 text-primary hover:text-accent transition-colors text-sm font-medium"
                  >
                    {isExpanded ? (
                      <>
                        Hide Details <ChevronUp size={16} />
                      </>
                    ) : (
                      <>
                        View Details <ChevronDown size={16} />
                      </>
                    )}
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Education Section */}
          <h2 className="text-4xl font-bold mb-8 text-center text-gradient">
            Education
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-xl p-6"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-accent/20 rounded-lg">
                <GraduationCap className="text-accent" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">{education.degree}</h3>
                <p className="text-primary mb-1">{education.institution}</p>
                <div className="flex flex-wrap gap-4 text-sm text-foreground/60">
                  <span>{education.location}</span>
                  <span>•</span>
                  <span>{education.period}</span>
                </div>
                
                {showEducationDetails && education.description && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <h4 className="text-lg font-semibold mb-2 text-accent">Accomplishments</h4>
                    <p className="text-foreground/70">{education.description}</p>
                  </motion.div>
                )}
              </div>
            </div>
            
            {/* Toggle Button */}
            <button
              onClick={() => setShowEducationDetails(!showEducationDetails)}
              className="flex items-center gap-2 text-primary hover:text-accent transition-colors text-sm font-medium"
            >
              {showEducationDetails ? (
                <>
                  Hide Details <ChevronUp size={16} />
                </>
              ) : (
                <>
                  View Details <ChevronDown size={16} />
                </>
              )}
            </button>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
