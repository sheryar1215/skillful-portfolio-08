
import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: "Tech Innovations Inc.",
    position: "Full Stack Developer",
    duration: "Jan 2023 - Present",
    description: "Lead developer for multiple client projects, implementing responsive front-end interfaces with React and building scalable APIs using Node.js and Express. Collaborate with UX designers to create intuitive user experiences and mentor junior developers.",
    achievements: [
      "Reduced page load time by 40% through code optimization and implementing lazy loading",
      "Developed a reusable component library that decreased development time by 30%",
      "Implemented CI/CD pipelines that improved deployment efficiency by 50%"
    ]
  },
  {
    company: "Digital Solutions LLC",
    position: "Frontend Developer Intern",
    duration: "May 2022 - Dec 2022",
    description: "Worked on developing and maintaining the company's flagship web application using React and TypeScript. Collaborated with the design team to implement UI components and ensure responsive design across devices.",
    achievements: [
      "Developed interactive data visualization dashboards using Chart.js",
      "Optimized application performance by implementing state management with Redux",
      "Created automated test suites achieving 80% code coverage"
    ]
  },
  {
    company: "Freelance Developer",
    position: "Web Developer",
    duration: "2020 - 2022",
    description: "Designed and developed custom websites and web applications for small businesses and startups. Managed entire project lifecycle from requirements gathering to deployment and maintenance.",
    achievements: [
      "Successfully delivered over 15 projects for clients across various industries",
      "Implemented SEO best practices resulting in average 35% increase in organic traffic",
      "Designed and developed e-commerce solutions with payment gateway integration"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--tw-gradient-stops))] from-background via-background to-secondary/20" />
      </div>
      
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          My professional journey and key contributions in the field of web development.
        </p>
        
        <div className="max-w-3xl mx-auto mt-16 opacity-0 animate-slide-up-delay-2">
          {experiences.map((experience, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot">
                <Briefcase className="h-4 w-4 text-primary-foreground absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              
              <div className="mb-1">
                <span className="bg-secondary px-3 py-1 rounded-full text-xs font-medium">
                  {experience.duration}
                </span>
              </div>
              
              <h3 className="text-xl font-display font-bold mt-3">{experience.position}</h3>
              <p className="text-lg text-muted-foreground mb-3">{experience.company}</p>
              
              <p className="text-foreground/80 mb-4">
                {experience.description}
              </p>
              
              <div className="space-y-2 mt-3">
                <h4 className="text-sm font-medium text-foreground/90">Key Achievements:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {experience.achievements.map((achievement, i) => (
                    <li key={i} className="text-foreground/80 text-sm">
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
