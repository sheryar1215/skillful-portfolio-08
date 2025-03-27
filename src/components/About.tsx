
import React from 'react';
import { cn } from '@/lib/utils';

const skills = [
  { category: "Programming Languages", items: ["JavaScript", "TypeScript", "Python", "Java", "HTML", "CSS"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Material UI", "Redux"] },
  { category: "Backend", items: ["Node.js", "Express", "MongoDB", "RESTful APIs"] },
  { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", "Supabase"] },
  { category: "DevOps & Tools", items: ["Git", "GitHub", "Vercel", "Netlify", "VS Code", "n8n", "Lovable AI"] }
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
                Hello! I'm Sheryar Khan, a dedicated full-stack developer with a Bachelor's degree in Computer Science from the University of Peshawar. I specialize in building clean, functional, and user-friendly web applications with the MERN stack (MongoDB, Express, React, Node.js).
              </p>
              
              <p className="text-foreground/90">
                My development approach focuses on creating scalable and responsive web applications with seamless user experiences. I'm particularly experienced in SEO strategies, especially React SEO, helping websites improve their rankings and performance. I've also worked with n8n for workflow automation and Lovable AI for creating AI-driven applications.
              </p>
              
              <p className="text-foreground/90">
                Based in Peshawar, Khyber Pakhtunkhwa, Pakistan, I'm passionate about using technology to solve real-world problems and deliver exceptional digital experiences to users.
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
