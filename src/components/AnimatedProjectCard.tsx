import React from "react";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { CategoryTag } from "./CategoryTag";
import { TechIcon } from "./TechIcon";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  category: "frontend" | "backend" | "fullstack";
};

interface Props {
  project: Project;
  onDetails?: () => void;
}

export const AnimatedProjectCard: React.FC<Props> = ({ project, onDetails }) => (
  <div
    tabIndex={0}
    className="relative group bg-white/80 dark:bg-slate-900/60 rounded-2xl overflow-hidden card-lift shadow-xl hover:shadow-2xl focus:shadow-2xl border border-border transition-all duration-300 h-full flex flex-col cursor-pointer"
    onClick={onDetails}
    onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onDetails?.()}
    aria-label={`View details for project ${project.title}`}
    role="button"
  >
    <div className="h-48 w-full relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute top-3 left-3 z-10">
        <CategoryTag category={project.category as any} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
      <button
        onClick={e => { e.stopPropagation(); onDetails?.(); }}
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="View details"
      >
        <span className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-base font-medium flex items-center gap-2 shadow-xl hover:scale-105 transition-transform">
          <ExternalLink className="w-4 h-4" /> View Details
        </span>
      </button>
    </div>
    <div className="p-5 flex-1 flex flex-col">
      <h4 className="font-bold font-display text-lg mb-1 gradient-text">{project.title}</h4>
      <p className="text-muted-foreground text-sm mb-3 line-clamp-2 flex-1">{project.description}</p>
      <div className="mt-auto flex flex-wrap gap-2">
        {project.technologies.slice(0, 3).map(tech =>
          <span key={tech} className="bg-secondary text-secondary-foreground text-xs rounded px-2 py-0.5 font-medium flex items-center gap-1">
            <TechIcon tech={tech} className="w-3 h-3" />
            {tech}
          </span>
        )}
      </div>
    </div>
  </div>
);
