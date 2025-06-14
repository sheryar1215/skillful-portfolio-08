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
  "Coding",
  "Reading books",
  "Learn new things"
];

const languages = [
  { language: "English", proficiency: "Professional" },
  { language: "Urdu", proficiency: "Native" },
  { language: "Pashto", proficiency: "Native" }
];

const About = () => {
  return (
    <section
      id="about"
      className="py-24 relative bg-gradient-to-br from-white via-blue-50 to-blue-200 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 transition-colors"
    >
      {/* Backdrop SVG waves for extra visual layer */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.09)_0,rgba(59,130,246,0)_80%)] pointer-events-none"></div>
      <div
        className="absolute inset-x-0 top-0 h-24 bg-[url('data:image/svg+xml,%3Csvg width=\\'100%25\\' height=\\'50\\' viewBox=\\'0 0 1200 50\\'%3E%3Cpath d=\\'M0,0Q300,50,600,0T1200,0V50H0Z\\' fill=\\'%233B82F6\\' fill-opacity=\\'0.04\\'/%3E%3C/svg%3E')] pointer-events-none"
      />
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          {/* Left content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-slate-900 dark:text-white animate-fade-in">
              <TranslatedText>About Me</TranslatedText>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mb-6 animate-fade-in">
              <TranslatedText>
                A passionate computer science graduate with a strong foundation in both frontend and backend development.
              </TranslatedText>
            </p>
            <div className="space-y-6 animate-slide-up-delay-1">
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
              {/* Featured Portfolio Projects section */}
              <div className="mt-8">
                <h3 className="text-xl font-display font-bold mb-4 text-slate-900 dark:text-white flex items-center gap-2">
                  <Code className="h-5 w-5 text-blue-500" />
                  <TranslatedText>Featured Projects</TranslatedText>
                </h3>
                <div className="space-y-3">
                  <div className="rounded-lg border bg-white/80 dark:bg-slate-800/80 p-4 hover:shadow transition">
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Patient Management System</p>
                    <p className="text-sm text-muted-foreground">A full-featured patient management app for healthcare providers. Built with PHP & Bootstrap.</p>
                    <a href="https://github.com/sheryar1215/pms_project" target="_blank" rel="noopener noreferrer" className="block w-fit mt-1 text-blue-600 dark:text-blue-400 hover:underline text-sm">View on GitHub</a>
                  </div>
                  <div className="rounded-lg border bg-white/80 dark:bg-slate-800/80 p-4 hover:shadow transition">
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">E-Commerce Platform</p>
                    <p className="text-sm text-muted-foreground">A responsive e-commerce solution with shopping cart and payments. Built with React, Node.js, MongoDB.</p>
                    <a href="https://github.com/sheryar1215/e-commerce" target="_blank" rel="noopener noreferrer" className="block w-fit mt-1 text-blue-600 dark:text-blue-400 hover:underline text-sm">View on GitHub</a>
                  </div>
                </div>
              </div>
              {/* Strengths */}
              <div className="mt-8">
                <h3 className="text-xl font-display font-bold mb-4 text-slate-900 dark:text-white">
                  <TranslatedText>Professional Strengths</TranslatedText>
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {strengths.map((strength, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0 animate-bounce-slow" />
                      <span className="text-slate-700 dark:text-slate-300">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Accordions */}
              <Accordion type="single" collapsible className="w-full border rounded-lg px-4 bg-white/80 dark:bg-slate-900/80 shadow">
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
                      <p className="text-sm text-slate-500 mt-1">2020 - 2024</p>
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
              {/* Resume Button */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-fuchsia-600 hover:from-blue-700 hover:to-fuchsia-700 text-white font-medium transition-all shadow-lg hover:scale-105"
              >
                <TranslatedText>Download Resume</TranslatedText>
              </a>
            </div>
          </div>
          {/* Right content */}
          <div className="w-full md:w-1/2">
            <div className="sticky top-24">
              <h3 className="text-2xl font-display font-bold mb-8 text-slate-900 dark:text-white animate-slide-up-delay-1">
                <TranslatedText>Technical Skills</TranslatedText>
              </h3>
              <div className="space-y-8 animate-slide-up-delay-2">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="card-hover bg-white/80 dark:bg-slate-900/80 rounded-xl shadow-md hover:shadow-xl p-4 transition-colors duration-200">
                    <div className="flex items-center gap-2 mb-3">
                      <Code className="h-5 w-5 text-blue-500 animate-fade-in" />
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
