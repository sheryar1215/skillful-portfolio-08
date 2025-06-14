
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
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display">{project.title}</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {project.category.charAt(0).toUpperCase() + project.category.slice(1)} Project • {project.duration}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="space-y-4">
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
                  <Badge key={index} variant="secondary">
                    {tech}
                  </Badge>
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
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { ProjectModal };
