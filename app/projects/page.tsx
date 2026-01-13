'use client';

import { useState, useEffect } from 'react';
import ProjectCard from '@/components/dom/ProjectCard';
import ShowMoreButton from '@/components/dom/ShowMoreButton';
import { useCardLimits } from '@/hooks/useCardLimits';
import type { Project } from '@/data/projects';
import Footer from '@/components/dom/Footer';

// Define the Skeleton Component
function ProjectSkeleton() {
  return (
    <div className="glass rounded-xl p-6 border-l-4 border-white/5 animate-pulse h-full flex flex-col justify-between">
      <div>
        {/* Header: Title & Date */}
        <div className="flex items-start justify-between mb-4">
          <div className="space-y-2 w-3/4">
            <div className="h-6 bg-white/10 rounded w-3/4"></div>
            <div className="h-4 bg-white/5 rounded w-1/4"></div>
          </div>
          <div className="h-5 w-16 bg-white/5 rounded-full"></div>
        </div>

        {/* Description: 3 lines */}
        <div className="space-y-2 mb-6">
          <div className="h-4 bg-white/5 rounded w-full"></div>
          <div className="h-4 bg-white/5 rounded w-[90%]"></div>
          <div className="h-4 bg-white/5 rounded w-[75%]"></div>
        </div>

        {/* Metrics */}
        <div className="flex gap-4 mb-4">
          <div className="h-8 w-20 bg-white/5 rounded"></div>
          <div className="h-8 w-20 bg-white/5 rounded"></div>
        </div>
      </div>

      {/* Tech Stack Pills */}
      <div className="flex flex-wrap gap-2 mt-auto">
        <div className="h-6 w-16 bg-white/10 rounded-md"></div>
        <div className="h-6 w-20 bg-white/10 rounded-md"></div>
        <div className="h-6 w-14 bg-white/10 rounded-md"></div>
        <div className="h-6 w-18 bg-white/10 rounded-md"></div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [pinnedRepos, setPinnedRepos] = useState<Project[]>([]);
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [showAllFeatured, setShowAllFeatured] = useState(false);
  const cardLimits = useCardLimits();

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

  const displayedFeatured = showAllFeatured
    ? pinnedRepos
    : pinnedRepos.slice(0, cardLimits.large);

  return (
    <>
      <section className="py-24 md:py-32 px-4 md:px-6 min-h-screen">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center text-gradient">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {loadingRepos ? (
              // Render Skeletons when loading
              Array.from({ length: 6 }).map((_, i) => (
                <ProjectSkeleton key={i} />
              ))
            ) : pinnedRepos.length > 0 ? (
              displayedFeatured.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  showLink={true}
                />
              ))
            ) : (
              <p className="text-center w-full col-span-1 md:col-span-2 lg:col-span-3 text-sm md:text-base text-foreground/60">
                No pinned repositories found.
              </p>
            )}
          </div>

          {!loadingRepos && pinnedRepos.length > cardLimits.large && (
            <ShowMoreButton
              isExpanded={showAllFeatured}
              onClick={() => setShowAllFeatured(!showAllFeatured)}
            />
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
