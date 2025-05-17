
import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: "6PM Media",
    position: "Full Stack Developer Intern",
    duration: "December 2024 - March 2025",
    description: "Worked as a full-stack developer focusing on MERN stack technologies to build scalable and responsive web applications. Implemented SEO strategies for React applications and learned workflow automation with n8n and AI integration with Lovable AI.",
    achievements: [
      "Built scalable and responsive web applications using the MERN stack",
      "Implemented SEO strategies for React applications, improving website rankings",
      "Gained experience with n8n for workflow automation and Lovable AI for AI-driven applications",
      "Worked with Supabase, APIs, and real-time features for enhanced application capabilities"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--tw-gradient-stops))] from-transparent via-transparent to-blue-50/20 dark:to-blue-900/5" />
      </div>
      
      <div className="section-container">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-slate-900 dark:text-white opacity-0 animate-slide-up">Experience</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12 opacity-0 animate-slide-up-delay-1">
          My professional journey and key contributions in the field of web development.
        </p>
        
        <div className="max-w-3xl mx-auto mt-16 opacity-0 animate-slide-up-delay-2">
          {experiences.map((experience, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot bg-blue-600">
                <Briefcase className="h-4 w-4 text-white absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              
              <div className="mb-1">
                <span className="bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                  {experience.duration}
                </span>
              </div>
              
              <h3 className="text-xl font-display font-bold mt-3 text-slate-900 dark:text-white">{experience.position}</h3>
              <p className="text-lg text-blue-700 dark:text-blue-300 mb-3">{experience.company}</p>
              
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                {experience.description}
              </p>
              
              <div className="space-y-2 mt-3">
                <h4 className="text-sm font-medium text-slate-900 dark:text-white">Key Achievements:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  {experience.achievements.map((achievement, i) => (
                    <li key={i} className="text-slate-700 dark:text-slate-300 text-sm">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
