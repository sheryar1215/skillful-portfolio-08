
import React from 'react';
import { GraduationCap, Award, Certificate, Book } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

const education = [
  {
    degree: "BS in Computer Science",
    institution: "University of Peshawar",
    duration: "2020 - 2025",
    description: "Graduated with honors, specializing in software engineering and web development. Completed coursework in algorithms, data structures, database systems, and web technologies.",
    achievements: [
      "Dean's List for Academic Excellence (2020-2022)",
      "Final Year Project: Developed an AI-powered task management system",
      "Teaching Assistant for Web Development course (2021)"
    ]
  },
  {
    degree: "FSc Pre-Engineering",
    institution: "Edwards College Peshawar",
    duration: "2017 - 2019",
    description: "Completed pre-engineering coursework with focus on mathematics, physics, and chemistry.",
    achievements: [
      "Participated in college science exhibitions",
      "Member of the college science society"
    ]
  },
  {
    degree: "SSC in Science",
    institution: "Peshawar Model School",
    duration: "2015 - 2016",
    description: "Completed secondary school certificate with science subjects.",
    achievements: [
      "Participated in regional science competitions",
      "Active member of school debate club"
    ]
  }
];

const certifications = [
  {
    title: "Certificate of Appreciation",
    issuer: "Edwards College Peshawar",
    date: "February 2024",
    description: "For taking part as a Cabinet Member in Pet Show 2024",
    image: "lovable-uploads/2495a233-a07e-4af1-bf22-01fd22e6c3cf.png"
  },
  {
    title: "Certificate of Appreciation",
    issuer: "Hamza Foundation",
    date: "2024",
    description: "Recognition as a blood donor who saved 3 lives in the blood camp held by Hamza Foundation Peshawar",
    image: "lovable-uploads/f4c8ddea-10f6-45d4-999d-61894634e16b.png"
  },
  {
    title: "Certificate of Acknowledgment",
    issuer: "UoP Close Blood Donor Society",
    date: "2024",
    description: "Awarded to acknowledge membership as Event Director of UoP Close Blood Donor Society",
    image: "lovable-uploads/7910a6ff-bb71-40af-a65d-a8bff4423aca.png"
  },
  {
    title: "Certificate of Appreciation",
    issuer: "Panel Discussion",
    date: "2024",
    description: "Recognition for outstanding contribution and dedication in organizing the panel discussion as Information Secretary",
    image: "lovable-uploads/e0fff270-36a4-4b8e-9749-3a910483feda.png"
  },
  {
    title: "Merit Certificate",
    issuer: "Edwards College Peshawar",
    date: "2024",
    description: "Awarded for Best Overall Performance",
    image: "lovable-uploads/22ab7faa-e0bc-4483-9e6e-5227152f2e29.png"
  },
  {
    title: "Merit Certificate",
    issuer: "Edwards College Peshawar",
    date: "2024",
    description: "Awarded for performance in Arts & Culture Event",
    image: "lovable-uploads/93d439d9-fe20-4655-9c27-7bbffc7e1b7c.png"
  },
  {
    title: "Merit Certificate",
    issuer: "Edwards College Peshawar",
    date: "2024",
    description: "Awarded for performance in Hadith Quizlet Exhibition",
    image: "lovable-uploads/161b6332-c5d8-4ffb-be66-97c1bd6669f0.png"
  },
  {
    title: "Proctorial Board Certificate",
    issuer: "Edwards College Peshawar",
    date: "2023/2024",
    description: "For serving as a Proctor during the session 2023/2024",
    image: "lovable-uploads/5018dbac-3201-4cb8-b816-beea47c29381.png"
  },
  {
    title: "Department of Computer Science Certificate",
    issuer: "Edwards College Peshawar",
    date: "2024",
    description: "For outstanding performance and lasting contributions to the organization at Farewell & Welcome Party 2024",
    image: "lovable-uploads/feea8dd3-d342-4d93-9a81-549f2171628c.png"
  },
  {
    title: "AWS Certified Developer Associate",
    issuer: "Amazon Web Services",
    date: "January 2024",
    credentialId: "AWS-456789012"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-gradient-to-br from-secondary/30 to-background">
      <div className="section-container">
        <h2 className="section-title">Education & Certifications</h2>
        <p className="section-subtitle">
          My academic background and professional development through specialized certifications.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <div className="opacity-0 animate-slide-up-delay-2">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-display font-bold">Education</h3>
            </div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="glass hover-scale hover-glow rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                >
                  <div className="mb-1">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      {edu.duration}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-display font-bold mt-3 flex items-center gap-2">
                    <Book className="h-4 w-4 text-primary" />
                    {edu.degree}
                  </h4>
                  <p className="text-lg text-primary/70 mb-4">{edu.institution}</p>
                  
                  <p className="text-foreground/80 mb-4">
                    {edu.description}
                  </p>
                  
                  <div className="space-y-2 mt-3 bg-secondary/50 p-3 rounded-lg">
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
              <Award className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-display font-bold">Certifications</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {certifications.map((cert, index) => (
                <Card 
                  key={index} 
                  className={cn(
                    "overflow-hidden transition-all hover:-translate-y-1 duration-300 hover:shadow-lg hover:shadow-primary/10",
                    index % 2 === 0 ? "bg-gradient-to-br from-card to-secondary/30 border-primary/10" : "bg-gradient-to-br from-background to-secondary/20 border-primary/5"
                  )}
                >
                  <div className="flex flex-col md:flex-row">
                    {cert.image && (
                      <div className="w-full md:w-1/3 h-48 overflow-hidden group relative">
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                        <img 
                          src={cert.image} 
                          alt={cert.title} 
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <CardContent className={cn(
                      "flex flex-col justify-between", 
                      cert.image ? "w-full md:w-2/3" : "w-full"
                    )}>
                      <div>
                        <div className="flex items-center gap-2">
                          <Certificate className="h-4 w-4 text-primary" />
                          <h4 className="font-display font-medium text-lg mt-2">{cert.title}</h4>
                        </div>
                        {cert.description && (
                          <p className="text-sm text-foreground/80 mt-1">{cert.description}</p>
                        )}
                      </div>
                      <div className="flex items-center justify-between mt-4 bg-secondary/30 px-3 py-2 rounded-md">
                        <p className="text-primary/80 font-medium">{cert.issuer}</p>
                        <p className="text-sm text-foreground/70 bg-primary/10 px-2 py-0.5 rounded-full">{cert.date}</p>
                      </div>
                      {cert.credentialId && (
                        <p className="text-xs text-muted-foreground/80 mt-2">
                          Credential ID: {cert.credentialId}
                        </p>
                      )}
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
