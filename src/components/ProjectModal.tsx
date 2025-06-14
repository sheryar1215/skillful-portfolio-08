
import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { TranslatedText } from "./TranslatedText";

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

const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) => {
  if (!project) return null;

  return (
    <Dialog open={!!project} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto !px-0 !pb-0 bg-gradient-to-br from-white/85 via-slate-50/95 to-blue-100/90 dark:from-slate-900/95 dark:to-slate-900/90 border-0 rounded-2xl shadow-2xl">
        <DialogHeader className="p-6">
          <DialogTitle className="text-2xl font-display">{project.title}</DialogTitle>
          <DialogDescription className="text-muted-foreground pb-2">
            {project.category.charAt(0).toUpperCase() + project.category.slice(1)} Project • {project.duration}
          </DialogDescription>
        </DialogHeader>
        <div className="relative h-64 rounded-xl overflow-hidden mx-6">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover object-center shadow-lg"
          />
        </div>
        <div className="space-y-6 mt-7 mx-6">
          <div>
            <h4 className="text-lg font-medium mb-2">
              <TranslatedText>Description</TranslatedText>
            </h4>
            <p className="text-slate-700 dark:text-slate-300">{project.longDescription}</p>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-2">
              <TranslatedText>Role</TranslatedText>
            </h4>
            <p className="text-slate-700 dark:text-slate-300">{project.role}</p>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-2">
              <TranslatedText>Challenges & Solutions</TranslatedText>
            </h4>
            <p className="text-slate-700 dark:text-slate-300">{project.challenges}</p>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-2">
              <TranslatedText>Technologies</TranslatedText>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-secondary text-secondary-foreground text-xs rounded px-2 py-0.5 font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-4 pt-4 border-t border-border">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              <span>
                <TranslatedText>Live Demo</TranslatedText>
              </span>
            </a>
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-white rounded-md transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>
                <TranslatedText>View Code</TranslatedText>
              </span>
            </a>
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-muted text-muted-foreground hover:bg-primary hover:text-white rounded-full p-2 transition-colors shadow-lg"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          ×
        </button>
      </DialogContent>
    </Dialog>
  );
};

export { ProjectModal };
