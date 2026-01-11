'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import type { Project } from '@/data/projects';
import type { Accomplishment } from '@/data/accomplishments';

interface ProjectCardProps {
  project: Project | Accomplishment;
  index: number;
  showLink?: boolean;
}

const isProject = (item: Project | Accomplishment): item is Project => {
  return 'featured' in item;
};

export default function ProjectCard({ project, index, showLink = false }: ProjectCardProps) {
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      nlp: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
      'computer-vision': 'from-purple-500/20 to-pink-500/20 border-purple-500/30',
      rl: 'from-orange-500/20 to-red-500/20 border-orange-500/30',
      web: 'from-green-500/20 to-emerald-500/20 border-green-500/30',
      mlops: 'from-indigo-500/20 to-purple-500/20 border-indigo-500/30',
    };
    return colors[category] || colors.web;
  };

  const projectData = isProject(project) ? project : project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border-l-4 bg-gradient-to-br ${getCategoryColor(
        projectData.category
      )}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold mb-2">{projectData.title}</h3>
          <p className="text-sm text-foreground/60">{projectData.date}</p>
        </div>
        {isProject(project) && project.featured && (
          <span className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full">
            Featured
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-foreground/80 mb-4">{projectData.description}</p>

      {/* Metrics - only for Project type */}
      {isProject(project) && project.metrics && project.metrics.length > 0 && (
        <div className="flex flex-wrap gap-4 mb-4">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="text-sm">
              <p className="text-foreground/60">{metric.label}</p>
              <p className="text-primary font-bold">{metric.value}</p>
            </div>
          ))}
        </div>
      )}

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {projectData.tech.slice(0, 5).map((tech: string, idx: number) => (
          <span
            key={idx}
            className="px-2 py-1 bg-white/5 rounded text-xs text-foreground/80 border border-white/10"
          >
            {tech}
          </span>
        ))}
        {projectData.tech.length > 5 && (
          <span className="px-2 py-1 text-xs text-foreground/60">
            +{projectData.tech.length - 5} more
          </span>
        )}
      </div>

      {/* Highlights - only for Project type */}
      {isProject(project) && project.highlights && project.highlights.length > 0 && (
        <div className="space-y-2 mb-4">
          {project.highlights.slice(0, 2).map((highlight, idx) => (
            <p key={idx} className="text-sm text-foreground/70 flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span>{highlight}</span>
            </p>
          ))}
        </div>
      )}

      {/* View Details / External Link */}
      {showLink && 'url' in project && project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-accent transition-colors text-sm font-medium flex items-center gap-2"
        >
          View on GitHub
          <ExternalLink size={14} />
        </a>
      ) : null}
    </motion.div>
  );
}
