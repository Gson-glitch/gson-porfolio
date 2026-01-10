'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, Eye } from 'lucide-react';
import { skillCategories } from '@/data/skills';
import CertificateModal from '@/components/dom/CertificateModal';
import ShowMoreButton from '@/components/dom/ShowMoreButton';
import { useCardLimits } from '@/hooks/useCardLimits';
import generatedCertificates from '@/data/certificates.json';
import Footer from '@/components/dom/Footer';

export default function SkillsPage() {
  const [selectedCert, setSelectedCert] = useState<any | null>(null);
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
      <div className="py-32 px-6 min-h-screen">
        <div className="container mx-auto max-w-6xl">
          {/* Technical Skills */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center text-gradient">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {displayedSkills.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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

            {skillCategories.length > cardLimits.large && (
              <ShowMoreButton
                isExpanded={showAllSkills}
                onClick={() => setShowAllSkills(!showAllSkills)}
              />
            )}
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-4xl font-bold mb-12 text-center text-gradient">
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
                    className="glass rounded-xl overflow-hidden cursor-pointer group hover:bg-white/10 transition-all flex flex-col"
                  >
                    <div className="relative w-full h-48 bg-black/20 overflow-hidden">
                      <Image
                        src={cert.thumbnail}
                        alt={cert.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="bg-white/10 backdrop-blur-md p-3 rounded-full">
                          <Eye className="text-white" size={24} />
                        </div>
                      </div>
                    </div>

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
