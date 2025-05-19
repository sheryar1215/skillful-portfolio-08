
import React from 'react';
import { cn } from '@/lib/utils';
import { TranslatedText } from './TranslatedText';
import { 
  CheckCircle2, 
  Award, 
  GraduationCap, 
  Book,
  Globe,
  Code
} from 'lucide-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const skills = [
  { category: "Programming Languages", items: ["JavaScript", "C++", "PHP", "Matlab", "Java", "HTML", "CSS"] },
  { category: "Frontend", items: ["React", "Bootstrap", "Tailwind CSS", "HTML", "CSS"] },
  { category: "Backend", items: ["Node.js", "PHP", "Laravel", "Express", "RESTful APIs"] },
  { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", "Supabase"] },
  { category: "DevOps & Tools", items: ["Git", "GitHub", "Figma", "Sublime Text3", "VS Code", "n8n", "Lovable AI"] }
];

const certifications = [
  {
    name: "Modern Web Development with React",
    issuer: "Udemy",
    date: "2023",
    link: "#"
  },
  {
    name: "Full Stack JavaScript Developer",
    issuer: "FreeCodeCamp",
    date: "2022",
    link: "#"
  },
  {
    name: "PHP & Laravel Framework",
    issuer: "Coursera",
    date: "2021",
    link: "#"
  }
];

const strengths = [
  "Building responsive and user-friendly web applications",
  "Full-stack development with a focus on MERN stack",
  "Clean, maintainable code with focus on performance",
  "Problem-solving and analytical thinking",
  "Rapid prototyping and agile development"
];

const interests = [
  "AI and machine learning applications in web development",
  "UX/UI design principles and accessibility",
  "Open source contribution",
  "Mobile app development",
  "Learning new programming languages"
];

const languages = [
  { language: "English", proficiency: "Professional" },
  { language: "Urdu", proficiency: "Native" },
  { language: "Pashto", proficiency: "Native" }
];

const About = () => {
  return (
    <section id="about" className="py-24 relative bg-white dark:bg-slate-950">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0,rgba(59,130,246,0)_70%)]"></div>
      
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-slate-900 dark:text-white opacity-0 animate-slide-up">
              <TranslatedText>About Me</TranslatedText>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mb-6 opacity-0 animate-slide-up-delay-1">
              <TranslatedText>A passionate computer science graduate with a strong foundation in both frontend and backend development.</TranslatedText>
            </p>
            
            <div className="space-y-6 opacity-0 animate-slide-up-delay-2">
              <p className="text-slate-700 dark:text-slate-300">
                <TranslatedText>
                  Hello! I'm Sheryar Khan, a dedicated full-stack developer with a Bachelor's degree in Computer Science from the University of Peshawar. I specialize in building clean, functional, and user-friendly web applications with PHP, LARAVEL, Loveable AI and the MERN stack (MongoDB, Express, React, Node.js).
                </TranslatedText>
              </p>
              
              <p className="text-slate-700 dark:text-slate-300">
                <TranslatedText>
                  My development approach focuses on creating scalable and responsive web applications with seamless user experiences. I'm particularly experienced in SEO strategies, especially React SEO, helping websites improve their rankings and performance. I've also worked with n8n for workflow automation and Lovable AI for creating AI-driven applications.
                </TranslatedText>
              </p>
              
              <p className="text-slate-700 dark:text-slate-300">
                <TranslatedText>
                  Based in Peshawar, Khyber Pakhtunkhwa, Pakistan, I'm passionate about using technology to solve real-world problems and deliver exceptional digital experiences to users. I am constantly learning and expanding my skills to stay current with the latest industry trends and technologies.
                </TranslatedText>
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-display font-bold mb-4 text-slate-900 dark:text-white">
                  <TranslatedText>Professional Strengths</TranslatedText>
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {strengths.map((strength, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Accordion type="single" collapsible className="w-full border rounded-lg px-4">
                <AccordionItem value="certifications">
                  <AccordionTrigger className="text-lg font-medium">
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-blue-500" />
                      <TranslatedText>Certifications</TranslatedText>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-3 py-2">
                      {certifications.map((cert, index) => (
                        <li key={index} className="flex justify-between">
                          <div>
                            <p className="font-medium text-slate-900 dark:text-slate-100">{cert.name}</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">{cert.issuer}</p>
                          </div>
                          <span className="text-sm text-slate-500">{cert.date}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="education">
                  <AccordionTrigger className="text-lg font-medium">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-blue-500" />
                      <TranslatedText>Education</TranslatedText>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="py-2">
                      <p className="font-medium text-slate-900 dark:text-slate-100">Bachelor of Computer Science</p>
                      <p className="text-slate-600 dark:text-slate-400">University of Peshawar</p>
                      <p className="text-sm text-slate-500 mt-1">2017 - 2021</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="interests">
                  <AccordionTrigger className="text-lg font-medium">
                    <div className="flex items-center gap-2">
                      <Book className="h-5 w-5 text-blue-500" />
                      <TranslatedText>Interests</TranslatedText>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 py-2">
                      {interests.map((interest, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                          <span className="text-slate-700 dark:text-slate-300">{interest}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="languages">
                  <AccordionTrigger className="text-lg font-medium">
                    <div className="flex items-center gap-2">
                      <Globe className="h-5 w-5 text-blue-500" />
                      <TranslatedText>Languages</TranslatedText>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 py-2">
                      {languages.map((lang, index) => (
                        <li key={index} className="flex justify-between">
                          <span className="text-slate-700 dark:text-slate-300">{lang.language}</span>
                          <span className="text-sm text-slate-500">{lang.proficiency}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all hover:shadow-lg"
              >
                <TranslatedText>Download Resume</TranslatedText>
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="sticky top-24">
              <h3 className="text-2xl font-display font-bold mb-8 text-slate-900 dark:text-white opacity-0 animate-slide-up-delay-1">
                <TranslatedText>Technical Skills</TranslatedText>
              </h3>
              
              <div className="space-y-8 opacity-0 animate-slide-up-delay-2">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="card-hover">
                    <div className="flex items-center gap-2 mb-3">
                      <Code className="h-5 w-5 text-blue-500" />
                      <h4 className="text-lg font-medium text-slate-800 dark:text-slate-200">{skillGroup.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className={cn(
                            "px-3 py-1.5 rounded-full text-sm font-medium transition-all hover:bg-blue-100 dark:hover:bg-slate-700 hover:-translate-y-1 hover:shadow-md",
                            skillIndex % 2 === 0 
                              ? "bg-blue-50 text-blue-800 dark:bg-slate-800 dark:text-blue-300" 
                              : "bg-indigo-50 text-indigo-800 dark:bg-slate-800 dark:text-indigo-300"
                          )}
                        >
                          {skill}
                        </div>
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
