import React, { useState } from 'react';
import { Github, ExternalLink, BadgeInfo } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { TranslatedText } from './TranslatedText';

const projects = [
  {
    id: 1,
    title: "Patient Management System",
    description: "A comprehensive patient management system for healthcare providers to manage patient records, appointments, and medical histories effectively.",
    longDescription: "Designed and implemented a full-stack patient management system that transformed healthcare operations for multiple clinics. The system features secure patient record management, appointment scheduling with reminders, medical history tracking, and comprehensive reporting capabilities. Reduced administrative workload by 30% and improved patient check-in time by 45%.",
    image: "https://images.unsplash.com/photo-1587691592099-24045742c181?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["HTML", "CSS", "Bootstrap", "Javascript", "MySQL", "PHP"],
    demoLink: "https://patient-management.example.com",
    repoLink: "https://github.com/sheryar1215/pms_project",
    category: "fullstack",
    challenges: "Ensuring HIPAA compliance while maintaining a user-friendly interface was challenging. Implemented robust security measures while keeping the UX intuitive.",
    role: "Lead Developer",
    duration: "4 months"
  },
  {
    id: 2,
    title: "Point of Sales System",
    description: "A modern point of sales system for retail businesses with inventory management, sales tracking, and reporting features.",
    longDescription: "Developed a comprehensive Point of Sales system that integrates inventory management, sales tracking, and detailed reporting. The system supports multiple payment methods, barcode scanning, and real-time inventory updates. It includes advanced features like customer loyalty tracking and discount management, making it a complete solution for retail businesses.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["HTML", "CSS", "Bootstrap", "Javascript", "MySQL", "PHP"],
    demoLink: "https://pos-system.example.com",
    repoLink: "https://github.com/sheryar1215/pfms",
    category: "fullstack",
    challenges: "Creating a system that works both online and offline presented significant synchronization challenges. Implemented a robust local-first architecture with background syncing.",
    role: "Full Stack Developer",
    duration: "6 months"
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product listings, shopping cart, user authentication, and payment processing.",
    longDescription: "Built a scalable e-commerce platform from the ground up using React and Node.js. The platform features a responsive product catalog, user authentication system, shopping cart functionality, and secure payment processing via Stripe. Admin dashboard provides detailed analytics, inventory management, and order processing capabilities.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    demoLink: "https://e-commerce-demo.example.com",
    repoLink: "https://github.com/sheryar1215/e-commerce",
    category: "fullstack",
    challenges: "Performance optimization for large product catalogs required implementing advanced caching and pagination strategies.",
    role: "Full Stack Developer",
    duration: "5 months"
  },
  {
    id: 4,
    title: "Prototype Real Time Coaching",
    description: "A real-time coaching platform that connects mentors with mentees for live feedback and development.",
    longDescription: "Created a real-time coaching platform that leverages WebSockets to enable instant communication between coaches and mentees. The application supports video calls, screen sharing, and collaborative document editing. Features include session scheduling, progress tracking, and post-session feedback mechanisms.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Lovable AI", "Webhook", "Supabase", "GitHub"],
    demoLink: "https://coaching-platform.example.com",
    repoLink: "https://github.com/sheryar1215/prototype-nexus",
    category: "fullstack",
    challenges: "Ensuring low-latency communication across different geographic regions required implementing sophisticated networking solutions.",
    role: "Lead Developer",
    duration: "3 months"
  },
  {
    id: 5,
    title: "Educational Institute Website",
    description: "A modern and responsive website for an educational institute featuring course information, faculty profiles, and student resources.",
    longDescription: "Designed and implemented a comprehensive website for an educational institute that significantly improved their online presence. The site features an intuitive course catalog, detailed faculty profiles, student resources, and an integrated registration system. The responsive design ensures optimal viewing on all devices.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://education-institute.example.com",
    repoLink: "https://github.com/sheryar1215/education-website",
    category: "frontend",
    challenges: "Organizing and presenting a complex course catalog in an intuitive way required innovative UI/UX approaches.",
    role: "Frontend Developer",
    duration: "2 months"
  },
  {
    id: 6,
    title: "Todo List Application",
    description: "An interactive todo list application that allows users to add, complete, edit, and delete tasks with local storage persistence.",
    longDescription: "Built an elegant yet powerful todo list application that helps users manage their tasks effectively. Features include task categorization, priority levels, due dates with reminders, and persistent storage using localStorage. The clean, minimalist UI ensures distraction-free task management.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
    demoLink: "https://todo-app.example.com",
    repoLink: "https://github.com/sheryar1215/todo-list",
    category: "frontend",
    challenges: "Creating smooth animations and transitions while maintaining performance on mobile devices required careful optimization.",
    role: "Frontend Developer",
    duration: "3 weeks"
  },
  {
    id: 7,
    title: "E-commerce Website Design",
    description: "A sleek and responsive e-commerce website design with product showcase, shopping cart functionality, and user-friendly navigation.",
    longDescription: "Crafted a visually stunning e-commerce website design with an emphasis on user experience and conversion optimization. The design includes a dynamic product showcase, intuitive product filtering, a streamlined shopping cart, and a simplified checkout process designed to maximize conversions.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://ecommerce-design.example.com",
    repoLink: "https://github.com/sheryar1215/ecommerce-design",
    category: "frontend",
    challenges: "Balancing aesthetic appeal with optimal page load speed required implementing advanced lazy loading and progressive image techniques.",
    role: "UI/UX Designer & Frontend Developer",
    duration: "1.5 months"
  },
  {
    id: 8,
    title: "ChatBOT (Google Gemini + React.js)",
    description: "An AI chatbot built with React.js and Google Gemini API for natural conversation and task assistance.",
    longDescription: "Developed an AI-powered chatbot leveraging Google Gemini API and React.js. The bot is capable of natural conversation, contextual query handling, and assists users with various tasks. Integrated UI employs responsive design for seamless desktop and mobile experience.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["React.js", "Google Gemini API", "JavaScript", "CSS"],
    demoLink: "https://chatbot-gemini.example.com",
    repoLink: "https://github.com/sheryar1215/chatbot-gemini",
    category: "frontend",
    challenges: "Enabling contextual understanding with smooth real-time feedback while keeping latency low during API calls.",
    role: "Frontend Developer",
    duration: "2 months"
  },
  {
    id: 9,
    title: "MiniBlogApp (MERN + Cloudinary)",
    description: "A scalable blogging platform using the MERN stack and Cloudinary, featuring media uploads and rich content editing.",
    longDescription: "Developed a full-featured blogging platform using MERN stack. Integrated Cloudinary for media uploads, rich content editing, and seamless authoring workflow. Included support for authentication, media management, and dynamic rendering of posts.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["MongoDB", "Express", "React.js", "Node.js", "Cloudinary"],
    demoLink: "https://miniblogapp.example.com",
    repoLink: "https://github.com/sheryar1215/miniblogapp",
    category: "fullstack",
    challenges: "Implementing secure media uploads and efficient retrieval for fast page load while preventing untrusted file abuse.",
    role: "Full Stack Developer",
    duration: "3 months"
  },
  {
    id: 10,
    title: "Professional Automatic Email Sender (n8n)",
    description: "Automates professional email workflows using n8n, integrating with various platforms for scheduled and event-based messaging.",
    longDescription: "Created an automated email sender using n8n, allowing integration of scheduled, triggered, and conditional professional emails. Supports dynamic templates, attachments, multi-service integration, and reporting for sent emails.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["n8n", "JavaScript", "Email APIs"],
    demoLink: "https://email-n8n.example.com",
    repoLink: "https://github.com/sheryar1215/email-n8n",
    category: "backend",
    challenges: "Complex logic for scheduling, error handling for third-party APIs and ensuring reliable delivery for bulk emails.",
    role: "Backend Automation Developer",
    duration: "1.5 months"
  },
  {
    id: 11,
    title: "Inventory Management (n8n)",
    description: "A workflow automated inventory management solution built with n8n for real-time stock tracking and reporting.",
    longDescription: "Implemented an inventory management workflow using n8n for real-time stock tracking, low-inventory alerts, and sales reporting. Features dashboard integration, multi-channel syncing, and automation for inventory adjustments.",
    image: "https://images.unsplash.com/photo-1515168833906-d2a3b82b8e91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["n8n", "Automation", "JavaScript"],
    demoLink: "https://inventory-n8n.example.com",
    repoLink: "https://github.com/sheryar1215/inventory-n8n",
    category: "backend",
    challenges: "Real-time data synchronization and handling race conditions while updating inventory across multiple sales channels.",
    role: "Backend Automation Developer",
    duration: "1 month"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="section-container">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-slate-900 dark:text-white opacity-0 animate-slide-up">
          <TranslatedText>Projects</TranslatedText>
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12 opacity-0 animate-slide-up-delay-1">
          <TranslatedText>A selection of my recent work, showcasing my skills and experience in building web applications.</TranslatedText>
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
            <p className="text-slate-500 dark:text-slate-400">No projects found in this category. Check back soon!</p>
          </div>
        )}
        
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </section>
  );
};

const ProjectCard = ({ 
  project, 
  onClick 
}: { 
  project: typeof projects[0],
  onClick: () => void
}) => {
  return (
    <div 
      className="flex flex-col h-full bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-slate-200 dark:border-slate-700"
      onClick={onClick}
    >
      <div className="relative h-48 w-full overflow-hidden cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-110"
          loading="lazy"
        />
      </div>
      
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-xl font-display font-bold mb-2 text-slate-900 dark:text-white">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4 flex-grow">
          {project.description}
        </p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{project.technologies.length - 3} more
              </Badge>
            )}
          </div>
        </div>
        
        <div className="flex gap-4 mt-auto">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }} 
            className="flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            <BadgeInfo className="h-4 w-4" />
            <span><TranslatedText>Details</TranslatedText></span>
          </button>
          <a 
            href={project.demoLink} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="h-4 w-4" />
            <span><TranslatedText>Demo</TranslatedText></span>
          </a>
          <a 
            href={project.repoLink} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Github className="h-4 w-4" />
            <span><TranslatedText>Repo</TranslatedText></span>
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectModal = ({ 
  project, 
  onClose 
}: { 
  project: typeof projects[0] | null,
  onClose: () => void
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
              <h4 className="text-lg font-medium mb-2"><TranslatedText>Description</TranslatedText></h4>
              <p className="text-slate-700 dark:text-slate-300">
                {project.longDescription}
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-2"><TranslatedText>Role</TranslatedText></h4>
              <p className="text-slate-700 dark:text-slate-300">{project.role}</p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-2"><TranslatedText>Challenges & Solutions</TranslatedText></h4>
              <p className="text-slate-700 dark:text-slate-300">{project.challenges}</p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-2"><TranslatedText>Technologies</TranslatedText></h4>
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
                <span><TranslatedText>Live Demo</TranslatedText></span>
              </a>
              <a 
                href={project.repoLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-white rounded-md transition-colors"
              >
                <Github className="h-4 w-4" />
                <span><TranslatedText>View Code</TranslatedText></span>
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Projects;
