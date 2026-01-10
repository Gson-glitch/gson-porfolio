'use client';

import { useState, useEffect } from 'react';
import ProjectCard from '@/components/dom/ProjectCard';
import ShowMoreButton from '@/components/dom/ShowMoreButton';
import { useCardLimits } from '@/hooks/useCardLimits';
import type { Project } from '@/data/projects';
import Footer from '@/components/dom/Footer';

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
              <p className="text-center w-full col-span-1 md:col-span-2 lg:col-span-3 text-sm md:text-base text-foreground/60">
                Loading GitHub projects...
              </p>
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

          {pinnedRepos.length > cardLimits.large && (
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
