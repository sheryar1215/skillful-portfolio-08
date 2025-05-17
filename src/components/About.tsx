
import React from 'react';
import { cn } from '@/lib/utils';

const skills = [
  { category: "Programming Languages", items: ["JavaScript","C++","PHP","Matlab", "Java", "HTML", "CSS"] },
  { category: "Frontend", items: ["React", "Bootstrap", "Tailwind CSS", "HTML", "CSS"] },
  { category: "Backend", items: ["Node.js", ,"PHP","Laravel", "Express","RESTful APIs"] },
  { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", "Supabase"] },
  { category: "DevOps & Tools", items: ["Git", "GitHub", "Figma", "Sublime Text3", "VS Code", "n8n", "Lovable AI"] }
];

const About = () => {
  return (
    <section id="about" className="py-24 relative bg-white dark:bg-slate-950">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0,rgba(59,130,246,0)_70%)]"></div>
      
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-slate-900 dark:text-white opacity-0 animate-slide-up">About Me</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mb-12 opacity-0 animate-slide-up-delay-1">
              A passionate computer science graduate with a strong foundation in both frontend and backend development.
            </p>
            
            <div className="space-y-6 opacity-0 animate-slide-up-delay-2">
              <p className="text-slate-700 dark:text-slate-300">
                Hello! I'm Sheryar Khan, a dedicated full-stack developer with a Bachelor's degree in Computer Science from the University of Peshawar. I specialize in building clean, functional, and user-friendly web applications with the PHP, LARAVEL, Loveable AI and MERN stack (MongoDB, Express, React, Node.js).
              </p>
              
              <p className="text-slate-700 dark:text-slate-300">
                My development approach focuses on creating scalable and responsive web applications with seamless user experiences. I'm particularly experienced in SEO strategies, especially React SEO, helping websites improve their rankings and performance. I've also worked with n8n for workflow automation and Lovable AI for creating AI-driven applications.
              </p>
              
              <p className="text-slate-700 dark:text-slate-300">
                Based in Peshawar, Khyber Pakhtunkhwa, Pakistan, I'm passionate about using technology to solve real-world problems and deliver exceptional digital experiences to users.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="sticky top-24">
              <h3 className="text-2xl font-display font-bold mb-8 text-slate-900 dark:text-white opacity-0 animate-slide-up-delay-1">Technical Skills</h3>
              
              <div className="space-y-8 opacity-0 animate-slide-up-delay-2">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-medium mb-3 text-slate-800 dark:text-slate-200">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={cn(
                            "px-3 py-1 rounded-full text-sm font-medium transition-all hover:bg-blue-100 dark:hover:bg-slate-700 hover:-translate-y-1 hover:shadow-md",
                            skillIndex % 2 === 0 
                              ? "bg-blue-50 text-blue-800 dark:bg-slate-800 dark:text-blue-300" 
                              : "bg-indigo-50 text-indigo-800 dark:bg-slate-800 dark:text-indigo-300"
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
