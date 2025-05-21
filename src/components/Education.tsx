
import React, { useState } from 'react';
import { GraduationCap, Award, Badge, Book, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

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
    description: "Recognition as a blood donor who saved 300+ lives in the blood camp held by Hamza Foundation Peshawar",
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
    date: "2020 - 2024",
    description: "Awarded for Best Overall Performance In Bs Computer Science Department",
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
    description: "Awarded for performance Play a Role as a setan In King Mackbet Stage Drama ",
    image: "lovable-uploads/161b6332-c5d8-4ffb-be66-97c1bd6669f0.png"
  },
  {
    title: "Proctorial Board Certificate",
    issuer: "Edwards College Peshawar",
    date: "2023/2024",
    description: "For serving as a Proctor during the session 2023/2024 ",
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
  const [activeCertificate, setActiveCertificate] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  const toggleCertificate = (index: number) => {
    setActiveCertificate(activeCertificate === index ? null : index);
  };

  const filteredCertificates = filter === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.issuer.toLowerCase().includes(filter.toLowerCase()));

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/30" />
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-secondary/20 rounded-full blur-3xl" />
      </div>
      
      <div className="section-container">
        <h2 className="section-title">Education & Certifications</h2>
        <p className="section-subtitle">
          My academic background and professional development through specialized certifications.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <motion.div 
            className="opacity-0" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-display font-bold">Education</h3>
            </div>
            
            <motion.div 
              className="space-y-8"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {education.map((edu, index) => (
                <motion.div 
                  key={index} 
                  className="glass hover-scale hover-glow rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 border border-primary/10"
                  variants={item}
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                  }}
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
                  
                  <div className="space-y-2 mt-3 bg-secondary/50 p-3 rounded-lg backdrop-blur-sm">
                    <h5 className="text-sm font-medium text-foreground/90">Achievements:</h5>
                    <ul className="list-disc pl-5 space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="text-foreground/80 text-sm">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="opacity-0" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Award className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-display font-bold">Certifications</h3>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              <button 
                onClick={() => setFilter('all')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${filter === 'all' ? 'bg-primary text-primary-foreground' : 'bg-secondary/50 text-foreground/70 hover:bg-secondary'}`}
              >
                All
              </button>
              <button 
                onClick={() => setFilter('edwards')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${filter === 'edwards' ? 'bg-primary text-primary-foreground' : 'bg-secondary/50 text-foreground/70 hover:bg-secondary'}`}
              >
                Edwards College
              </button>
              <button 
                onClick={() => setFilter('uop')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${filter === 'uop' ? 'bg-primary text-primary-foreground' : 'bg-secondary/50 text-foreground/70 hover:bg-secondary'}`}
              >
                UoP
              </button>
              <button 
                onClick={() => setFilter('hamza')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${filter === 'hamza' ? 'bg-primary text-primary-foreground' : 'bg-secondary/50 text-foreground/70 hover:bg-secondary'}`}
              >
                Hamza Foundation
              </button>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 gap-6"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {filteredCertificates.map((cert, index) => (
                <motion.div key={index} variants={item}>
                  <Card 
                    className={cn(
                      "overflow-hidden transition-all hover:-translate-y-1 duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer",
                      index % 2 === 0 
                        ? "bg-gradient-to-br from-card to-secondary/30 border-primary/10" 
                        : "bg-gradient-to-br from-background to-secondary/20 border-primary/5"
                    )}
                    onClick={() => toggleCertificate(index)}
                  >
                    <div className="flex flex-col">
                      {cert.image && activeCertificate === index && (
                        <motion.div 
                          className="w-full h-64 overflow-hidden"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "16rem", opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="relative w-full h-full group">
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                            <img 
                              src={cert.image} 
                              alt={cert.title} 
                              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        </motion.div>
                      )}
                      <CardContent className="flex flex-col justify-between p-6">
                        <div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Badge className="h-4 w-4 text-primary" />
                              <h4 className="font-display font-medium text-lg">{cert.title}</h4>
                            </div>
                            <button className="text-primary/70 hover:text-primary transition-colors">
                              {activeCertificate === index ? (
                                <ChevronUp className="h-5 w-5" />
                              ) : (
                                <ChevronDown className="h-5 w-5" />
                              )}
                            </button>
                          </div>
                          {cert.description && (
                            <p className="text-sm text-foreground/80 mt-2">{cert.description}</p>
                          )}
                        </div>
                        <div className="flex items-center justify-between mt-4 bg-secondary/30 px-3 py-2 rounded-md backdrop-blur-sm">
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
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
