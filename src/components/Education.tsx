
import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

const education = [
  {
    degree: "BSc in Computer Science",
    institution: "University of Technology",
    duration: "2018 - 2022",
    description: "Graduated with honors, specializing in software engineering and web development. Completed coursework in algorithms, data structures, database systems, and web technologies.",
    achievements: [
      "Dean's List for Academic Excellence (2020-2022)",
      "Final Year Project: Developed an AI-powered task management system",
      "Teaching Assistant for Web Development course (2021)"
    ]
  }
];

const certifications = [
  {
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: "December 2022",
    credentialId: "UC-1234567890"
  },
  {
    title: "React - The Complete Guide",
    issuer: "Coursera",
    date: "August 2022",
    credentialId: "CERT-987654321"
  },
  {
    title: "Advanced JavaScript Concepts",
    issuer: "Frontend Masters",
    date: "May 2022",
    credentialId: "FM-567890123"
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "February 2022",
    credentialId: "FCC-321098765"
  },
  {
    title: "AWS Certified Developer Associate",
    issuer: "Amazon Web Services",
    date: "January 2023",
    credentialId: "AWS-456789012"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">Education & Certifications</h2>
        <p className="section-subtitle">
          My academic background and professional development through specialized certifications.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <div className="opacity-0 animate-slide-up-delay-2">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="h-6 w-6 text-foreground" />
              <h3 className="text-2xl font-display font-bold">Education</h3>
            </div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="glass p-6 rounded-xl">
                  <div className="mb-1">
                    <span className="bg-secondary px-3 py-1 rounded-full text-xs font-medium">
                      {edu.duration}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-display font-bold mt-3">{edu.degree}</h4>
                  <p className="text-lg text-muted-foreground mb-4">{edu.institution}</p>
                  
                  <p className="text-foreground/80 mb-4">
                    {edu.description}
                  </p>
                  
                  <div className="space-y-2 mt-3">
                    <h5 className="text-sm font-medium text-foreground/90">Achievements:</h5>
                    <ul className="list-disc pl-5 space-y-1">
                      {edu.achievements.map((achievement, i) => (
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
          
          <div className="opacity-0 animate-slide-up-delay-3">
            <div className="flex items-center gap-3 mb-8">
              <Award className="h-6 w-6 text-foreground" />
              <h3 className="text-2xl font-display font-bold">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "p-5 rounded-lg border transition-all hover:shadow-md",
                    index % 2 === 0 ? "bg-background border-border" : "bg-background/50 border-border/50"
                  )}
                >
                  <h4 className="font-display font-medium text-lg">{cert.title}</h4>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-muted-foreground">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground">{cert.date}</p>
                  </div>
                  <p className="text-xs text-muted-foreground/80 mt-2">
                    Credential ID: {cert.credentialId}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
