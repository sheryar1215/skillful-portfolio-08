
import React from 'react';
import { cn } from '@/lib/utils';
import { TranslatedText } from './TranslatedText';

const skills = [
  { category: "Programming Languages", items: ["JavaScript","C++","PHP","Matlab", "Java", "HTML", "CSS"] },
  { category: "Frontend", items: ["React", "Bootstrap", "Tailwind CSS", "HTML", "CSS"] },
  { category: "Backend", items: ["Node.js", "PHP","Laravel", "Express","RESTful APIs"] },
  { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", "Supabase"] },
  { category: "DevOps & Tools", items: ["Git", "GitHub", "Figma", "VS Code", "n8n", "Lovable AI"] }
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background/80" />
      </div>
      
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          <div className="w-full md:w-1/2">
            <h2 className="section-title">
              <TranslatedText>About Me</TranslatedText>
            </h2>
            <p className="section-subtitle">
              <TranslatedText>
                A passionate computer science graduate with expertise in modern web development technologies.
              </TranslatedText>
            </p>
            
            <div className="space-y-6 opacity-0 animate-slide-up-delay-2">
              <p className="text-foreground/90 leading-relaxed">
                <TranslatedText>
                  Hello! I'm Sheryar Khan, a professional full-stack developer with a Bachelor's degree in Computer Science from the University of Peshawar. I specialize in building scalable, efficient, and user-friendly web applications using PHP, Laravel, and the MERN stack (MongoDB, Express, React, Node.js).
                </TranslatedText>
              </p>
              
              <p className="text-foreground/90 leading-relaxed">
                <TranslatedText>
                  My development philosophy centers on creating responsive applications with exceptional user experiences. I have particular expertise in implementing SEO strategies for React applications, helping businesses improve their online visibility and performance. My experience extends to workflow automation with n8n and developing AI-driven applications with Lovable AI.
                </TranslatedText>
              </p>
              
              <p className="text-foreground/90 leading-relaxed">
                <TranslatedText>
                  Based in Peshawar, Pakistan, I'm dedicated to leveraging technology to solve complex business challenges and deliver high-quality digital solutions that exceed client expectations.
                </TranslatedText>
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="sticky top-24">
              <h3 className="text-2xl font-display font-bold mb-8 opacity-0 animate-slide-up-delay-1">
                <TranslatedText>Technical Skills</TranslatedText>
              </h3>
              
              <div className="space-y-8 opacity-0 animate-slide-up-delay-2">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-medium mb-3 text-foreground/90">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={cn(
                            "px-3 py-1.5 rounded-full text-sm font-medium transition-all",
                            "hover:shadow-md hover:-translate-y-1",
                            index % 2 === 0 
                              ? "bg-primary/10 text-primary-foreground/90 hover:bg-primary/15" 
                              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
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
