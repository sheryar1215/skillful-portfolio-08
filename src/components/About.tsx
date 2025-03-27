
import React from 'react';
import { cn } from '@/lib/utils';

const skills = [
  { category: "Programming Languages", items: ["JavaScript", "TypeScript", "Python", "Java", "C++", "HTML", "CSS"] },
  { category: "Frontend", items: ["React", "Vue.js", "Next.js", "Tailwind CSS", "Material UI", "Redux"] },
  { category: "Backend", items: ["Node.js", "Express", "Django", "Flask", "RESTful APIs", "GraphQL"] },
  { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"] },
  { category: "DevOps & Tools", items: ["Git", "Docker", "AWS", "Vercel", "Netlify", "CI/CD", "VS Code", "Figma"] }
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_0,rgba(0,0,0,0)_70%)]" />
      </div>
      
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          <div className="w-full md:w-1/2">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              A passionate computer science graduate with a strong foundation in both frontend and backend development.
            </p>
            
            <div className="space-y-6 opacity-0 animate-slide-up-delay-2">
              <p className="text-foreground/90">
                Hello! I'm a dedicated full-stack developer with a Computer Science degree and a passion for creating clean, functional, and user-friendly web applications. My journey in technology began with a curiosity about how digital experiences are built, which led me to pursue formal education and continuous self-learning in this ever-evolving field.
              </p>
              
              <p className="text-foreground/90">
                I approach each project with a focus on writing clean, maintainable code while ensuring exceptional user experiences. I enjoy the challenge of solving complex problems and continuously expanding my technical expertise through hands-on project work and staying current with industry trends.
              </p>
              
              <p className="text-foreground/90">
                When I'm not coding, you might find me exploring new technologies, contributing to open-source projects, or expanding my knowledge through online courses and technical books.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="sticky top-24">
              <h3 className="text-2xl font-display font-bold mb-8 opacity-0 animate-slide-up-delay-1">Technical Skills</h3>
              
              <div className="space-y-8 opacity-0 animate-slide-up-delay-2">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-medium mb-3 text-foreground/90">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={cn(
                            "skill-badge",
                            skillIndex % 2 === 0 ? "bg-secondary" : "bg-secondary/70"
                          )}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
