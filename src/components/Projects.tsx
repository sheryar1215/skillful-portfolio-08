import React, { useState } from "react";
import { cn } from '@/lib/utils';
import { TranslatedText } from "./TranslatedText";
import { ProjectCard } from "./ProjectCard";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import { projects } from "./projectsData";
import { ProjectModal } from "./ProjectModal";
import { AnimatedProjectCard } from "./AnimatedProjectCard";
import { CategoryTag } from "./CategoryTag";

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filters: Array<{ key: string, label: string }> = [
    { key: "all", label: "All" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "fullstack", label: "Fullstack" }
  ];

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

        {/* FILTER BUTTONS */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white/90 dark:bg-slate-800/90 rounded-lg p-1 shadow-md border border-border transition">
            {filters.map((cat, i) => (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-all duration-200",
                  filter === cat.key
                    ? "bg-blue-600 text-white shadow"
                    : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                )}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* GRID PROJECTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <AnimatedProjectCard
              key={project.id}
              project={project}
              onDetails={() => setSelectedProject(project)}
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
