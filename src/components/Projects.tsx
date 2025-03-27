
import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product listings, shopping cart, user authentication, and payment processing.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    demoLink: "https://e-commerce-demo.example.com",
    repoLink: "https://github.com/yourusername/e-commerce",
    category: "fullstack"
  },
  {
    id: 2,
    title: "Personal Finance Dashboard",
    description: "Interactive dashboard for personal finance tracking with data visualization, budget planning, and expense categorization.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "TypeScript", "Chart.js", "Firebase", "Tailwind CSS"],
    demoLink: "https://finance-dashboard.example.com",
    repoLink: "https://github.com/yourusername/finance-dashboard",
    category: "frontend"
  },
  {
    id: 3,
    title: "Content Management System",
    description: "Custom CMS built for content creators with markdown support, media management, and customizable templates.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Next.js", "PostgreSQL", "GraphQL", "AWS S3"],
    demoLink: "https://cms-example.example.com",
    repoLink: "https://github.com/yourusername/custom-cms",
    category: "fullstack"
  },
  {
    id: 4,
    title: "Task Management API",
    description: "RESTful API for task management applications with user authentication, task CRUD operations, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Jest"],
    demoLink: "https://task-api-docs.example.com",
    repoLink: "https://github.com/yourusername/task-api",
    category: "backend"
  },
  {
    id: 5,
    title: "Weather Forecast App",
    description: "Responsive weather application with 7-day forecasts, location detection, and interactive weather maps.",
    image: "https://images.unsplash.com/photo-1532178910-7815d6919875?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "OpenWeather API", "Leaflet.js", "Styled Components"],
    demoLink: "https://weather-app.example.com",
    repoLink: "https://github.com/yourusername/weather-app",
    category: "frontend"
  },
  {
    id: 6,
    title: "Real-time Chat Application",
    description: "Chat platform with real-time messaging, user presence indicators, and file sharing capabilities.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Socket.io", "Express", "MongoDB", "Redis"],
    demoLink: "https://chat-app.example.com",
    repoLink: "https://github.com/yourusername/chat-app",
    category: "fullstack"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          A selection of my recent work, showcasing my skills and experience in building web applications.
        </p>
        
        <div className="flex justify-center mb-10 opacity-0 animate-slide-up-delay-2">
          <div className="inline-flex bg-secondary rounded-lg p-1">
            {["all", "frontend", "backend", "fullstack"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-all",
                  filter === category 
                    ? "bg-background text-foreground shadow-sm" 
                    : "text-foreground/70 hover:text-foreground"
                )}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 animate-slide-up-delay-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <div className="project-card flex flex-col h-full">
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-10" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-xl font-display font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">
          {project.description}
        </p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className="text-xs px-2 py-1 bg-secondary rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex gap-3 mt-auto">
          <a 
            href={project.demoLink} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            <span>Live Demo</span>
          </a>
          <a 
            href={project.repoLink} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors"
          >
            <Github className="h-4 w-4" />
            <span>Repository</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
