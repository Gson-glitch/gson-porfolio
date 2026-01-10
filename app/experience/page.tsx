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
      <section className="min-h-screen w-full py-24 md:py-32 px-4 md:px-6 bg-white/5 pl-safe pr-safe landscape:py-20 lg:landscape:py-32">
        <div className="container mx-auto max-w-6xl">
          {/* Work Experience */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center text-gradient landscape:text-2xl lg:landscape:text-5xl">
            Work Experience
          </h2>
          <div className="space-y-6 md:space-y-8 mb-12 md:mb-16 landscape:space-y-4 lg:landscape:space-y-8">
            {experiences.map((exp, index) => {
              const isExpanded = expandedExperience === exp.id;
              
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-xl p-5 md:p-6 hover:bg-white/10 transition-all landscape:p-4 lg:landscape:p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 landscape:mb-2 lg:landscape:mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2 landscape:text-lg lg:landscape:text-2xl">{exp.position}</h3>
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg md:text-xl text-primary hover:text-accent transition-colors mb-1 inline-flex items-center gap-2 group landscape:text-base lg:landscape:text-xl"
                        >
                          {exp.company}
                          <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      ) : (
                        <p className="text-lg md:text-xl text-primary mb-1 landscape:text-base lg:landscape:text-xl">{exp.company}</p>
                      )}
                      <div className="flex flex-wrap gap-3 md:gap-4 text-xs md:text-sm text-foreground/60">
                        <span className="flex items-center gap-1">
                          <MapPin size={12} className="md:w-3.5 md:h-3.5" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase size={12} className="md:w-3.5 md:h-3.5" />
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <div className="mt-3 md:mt-0 landscape:mt-2 lg:landscape:mt-0">
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-primary/20 text-primary rounded-lg text-xs md:text-sm">
                        <Calendar size={12} className="md:w-3.5 md:h-3.5" />
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span className="ml-2 px-2 py-1 bg-accent/20 text-accent rounded-full text-[10px] md:text-xs">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-sm md:text-base text-foreground/80 mb-4 landscape:text-xs lg:landscape:text-base">{exp.description}</p>
                  
                  {/* Preview: Only show tech stack when collapsed */}
                  {!isExpanded && (
                    <div className="flex flex-wrap gap-2 mb-4 landscape:mb-2 lg:landscape:mb-4">
                      {exp.tech.slice(0, 5).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 md:px-3 bg-white/5 rounded-full text-[10px] md:text-xs text-foreground/80 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                      {exp.tech.length > 5 && (
                        <span className="px-2 py-1 text-[10px] md:text-xs text-foreground/60">
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
                      <h4 className="text-base md:text-lg font-semibold mb-3 text-accent landscape:text-sm lg:landscape:text-lg">Accomplishments</h4>
                      <div className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, idx) => (
                          <p key={idx} className="text-sm md:text-base text-foreground/70 flex items-start gap-2 landscape:text-xs lg:landscape:text-base">
                            <span className="text-accent mt-1">•</span>
                            <span>{achievement}</span>
                          </p>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 md:px-3 bg-white/5 rounded-full text-[10px] md:text-xs text-foreground/80 border border-white/10"
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
                    className="flex items-center gap-2 text-primary hover:text-accent transition-colors text-xs md:text-sm font-medium"
                  >
                    {isExpanded ? (
                      <>
                        Hide Details <ChevronUp size={14} className="md:w-4 md:h-4" />
                      </>
                    ) : (
                      <>
                        View Details <ChevronDown size={14} className="md:w-4 md:h-4" />
                      </>
                    )}
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Education Section */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-center text-gradient landscape:text-2xl lg:landscape:text-5xl">
            Education
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-xl p-5 md:p-6 landscape:p-4 lg:landscape:p-6"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 md:p-3 bg-accent/20 rounded-lg">
                <GraduationCap className="text-accent w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold mb-1 landscape:text-base lg:landscape:text-xl">{education.degree}</h3>
                
                {education.url ? (
                  <a
                    href={education.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-base text-primary hover:text-accent transition-colors mb-1 inline-flex items-center gap-2 group landscape:text-xs lg:landscape:text-base"
                  >
                    {education.institution}
                    <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <p className="text-sm md:text-base text-primary mb-1 landscape:text-xs lg:landscape:text-base">{education.institution}</p>
                )}

                <div className="flex flex-wrap gap-3 md:gap-4 text-xs md:text-sm text-foreground/60">
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
                    <h4 className="text-base md:text-lg font-semibold mb-2 text-accent landscape:text-sm lg:landscape:text-lg">Accomplishments</h4>
                    <p className="text-sm md:text-base text-foreground/70 landscape:text-xs lg:landscape:text-base">{education.description}</p>
                  </motion.div>
                )}
              </div>
            </div>
            
            <button
              onClick={() => setShowEducationDetails(!showEducationDetails)}
              className="flex items-center gap-2 text-primary hover:text-accent transition-colors text-xs md:text-sm font-medium"
            >
              {showEducationDetails ? (
                <>
                  Hide Details <ChevronUp size={14} className="md:w-4 md:h-4" />
                </>
              ) : (
                <>
                  View Details <ChevronDown size={14} className="md:w-4 md:h-4" />
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
