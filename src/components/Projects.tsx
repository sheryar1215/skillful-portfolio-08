import React, { useState } from "react";
import { BadgeInfo, ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from "@/components/ui/badge";
import { TranslatedText } from "./TranslatedText";
import { ProjectCard } from "./ProjectCard";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import { projects } from "./projectsData";
import { ProjectModal } from "./ProjectModal";

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const sectionRef = useAnimateOnScroll<HTMLElement>("animate-fade-in-scale", 0);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="section-container">
        <h2 className="section-title gradient-text">
          <TranslatedText>Projects</TranslatedText>
        </h2>
        <p className="section-subtitle">
          <TranslatedText>
            A selection of my recent work, showcasing my skills and experience in building web applications.
          </TranslatedText>
        </p>

        <div className="flex justify-center mb-10 opacity-0 animate-slide-up-delay-2">
          <div className="inline-flex bg-white dark:bg-slate-800 rounded-lg p-1 shadow-md">
            {["all", "frontend", "backend", "fullstack"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-all",
                  filter === category
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                )}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 animate-slide-up-delay-3">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-10">
            <p className="text-slate-500 dark:text-slate-400">
              No projects found in this category. Check back soon!
            </p>
          </div>
        )}

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};

export default Projects;
