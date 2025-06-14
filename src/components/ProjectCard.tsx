
import React from "react";
import { BadgeInfo, Github, ExternalLink, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";

type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  demoLink: string;
  repoLink: string;
  category: string;
  challenges: string;
  role: string;
  duration: string;
};

export function ProjectCard({
  project,
  onDetails,
}: {
  project: Project;
  onDetails: () => void;
}) {
  const cardRef = useAnimateOnScroll<HTMLDivElement>("animate-fade-in", (project.id % 3) * 100);

  return (
    <div
      ref={cardRef}
      className="group relative flex flex-col bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-slate-200 dark:border-slate-700 focus-within:ring-2 focus-within:ring-primary/40 min-h-[390px]"
      tabIndex={0}
    >
      <div className="relative h-48 w-full overflow-hidden cursor-pointer">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          draggable={false}
        />
        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70 pointer-events-none transition group-hover:opacity-80" />
        {/* Featured Star */}
        <div className="absolute top-4 right-4 z-10 rounded-full bg-white/70 dark:bg-black/20 shadow px-2 py-1 text-yellow-500 flex items-center gap-1 text-xs font-semibold">
          <Star className="h-4 w-4 fill-yellow-400" />
          {/* Optionally mark "Featured" */}
          <span>Featured</span>
        </div>
      </div>

      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-xl font-bold mb-1 text-slate-900 dark:text-white tracking-tight gradient-text">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-2 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {project.technologies.slice(0, 3).map((tech, idx) => (
            <Badge key={idx} variant="secondary" className="text-xs">{tech}</Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{project.technologies.length - 3} more
            </Badge>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-auto">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onDetails();
            }}
            className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg bg-primary text-white font-semibold hover:bg-primary/80 transition focus:outline focus:ring-2 focus:ring-offset-1 focus:ring-primary"
          >
            <BadgeInfo className="h-4 w-4" />
            Details
          </button>
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-semibold focus:outline-none focus:ring-2 focus:ring-primary"
            tabIndex={-1}
            onClick={e => e.stopPropagation()}
          >
            <ExternalLink className="h-4 w-4" />
            Demo
          </a>
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-semibold focus:outline-none focus:ring-2 focus:ring-secondary"
            tabIndex={-1}
            onClick={e => e.stopPropagation()}
          >
            <Github className="h-4 w-4" />
            Repo
          </a>
        </div>
      </div>
    </div>
  );
}
