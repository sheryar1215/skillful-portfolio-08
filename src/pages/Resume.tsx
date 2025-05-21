import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Download, Briefcase, GraduationCap, Award, Star } from 'lucide-react';
import { TranslatedText } from '@/components/TranslatedText';
import { toast } from '@/hooks/use-toast';

const Resume = () => {
  // Function to handle PDF download
  const handleDownloadPDF = () => {
    // Show loading toast
    toast({
      title: "Download started",
      description: "Your resume is being downloaded...",
    });
    
    // Create resume content as text (would be PDF in a real implementation)
    const content = `
      Sheryar Khan - Resume
      
      Full Stack Developer
      
      Contact:
      Email: 1215sheryarkhan@gmail.com
      Phone: +92 316 1290066
      
      Education:
      Bachelor of Computer Science - University of Peshawar (2020-2024)
      
      Experience:
      - Full Stack Developer and Ai Automation Engineer Intern at 6PM Media (Dec 2024 - Mar 2025)
      - Freelance Web Developer (Jan 2023 - Nov 2024)
      
      Skills:
      JavaScript, PHP, React, Node.js, Express, MongoDB, HTML, CSS, Tailwind CSS , Laravel ,Figma ,Mysql
      ,N8N ,Lovable Ai ,Bootstrap , fullstack Devalopment
    `;
    
    // Create a Blob with the content
    const blob = new Blob([content], { type: 'text/plain' });
    
    // Create a download link
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = 'sheryar_khan_resume.txt'; // In a real app, this would be .pdf
    
    // Trigger the download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    
    // Show success toast after a short delay
    setTimeout(() => {
      toast({
        title: "Download complete",
        description: "Resume has been downloaded successfully.",
        variant: "success",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Sheryar Khan</h1>
            <p className="text-xl text-muted-foreground mb-4">Full Stack Developer</p>
            <p className="max-w-2xl text-muted-foreground">Computer Science graduate with expertise in web development, specializing in creating responsive and user-friendly applications using modern technologies.</p>
          </div>
          <Button 
            className="mt-6 md:mt-0 flex gap-2 items-center" 
            size="lg" 
            onClick={handleDownloadPDF}
          >
            <Download className="h-4 w-4" />
            <TranslatedText>Download PDF</TranslatedText>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2 space-y-10">
            {/* Experience Section */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <Briefcase className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-display font-bold text-foreground">
                  <TranslatedText>Work Experience</TranslatedText>
                </h2>
              </div>
              
              <div className="space-y-8">
                <div className="relative border-l-2 border-muted pl-6 pb-6">
                  <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                  <div className="flex flex-col md:flex-row md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground">Full Stack Developer Intern</h3>
                    <span className="text-muted-foreground">Dec 2024 - Mar 2025</span>
                  </div>
                  <p className="text-lg text-primary mb-2">6PM Media</p>
                  <p className="text-muted-foreground mb-4">Worked as a full-stack developer focusing on MERN stack technologies to build scalable and responsive web applications.</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li className="text-foreground">Built scalable and responsive web applications using the MERN stack</li>
                    <li className="text-foreground">Implemented SEO strategies for React applications, improving website rankings</li>
                    <li className="text-foreground">Gained experience with n8n for workflow automation and Lovable AI for AI-driven applications</li>
                    <li className="text-foreground">Worked with Supabase, APIs, and real-time features for enhanced application capabilities</li>
                  </ul>
                </div>
                
                  <div className="space-y-8">
                <div className="relative border-l-2 border-muted pl-6 pb-6">
                  <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                  <div className="flex flex-col md:flex-row md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground">Full Stack Developer Intern</h3>
                    <span className="text-muted-foreground">Dec 2024 - Mar 2025</span>
                  </div>
                  <p className="text-lg text-primary mb-2">6PM Media</p>
                  <p className="text-muted-foreground mb-4">Worked as a full-stack developer focusing on MERN stack technologies to build scalable and responsive web applications.</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li className="text-foreground">Built scalable and responsive web applications using the MERN stack</li>
                    <li className="text-foreground">Implemented SEO strategies for React applications, improving website rankings</li>
                    <li className="text-foreground">Gained experience with n8n for workflow automation and Lovable AI for AI-driven applications</li>
                    <li className="text-foreground">Worked with Supabase, APIs, and real-time features for enhanced application capabilities</li>
                  </ul>
                </div>
                
                <div className="relative border-l-2 border-muted pl-6 pb-6">
                  <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                  <div className="flex flex-col md:flex-row md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground">Freelance Web Developer</h3>
                    <span className="text-muted-foreground">Jan 2023 - Nov 2024</span>
                  </div>
                  <p className="text-lg text-primary mb-2">Self-employed</p>
                  <p className="text-muted-foreground mb-4">Developed custom websites and web applications for various clients across different industries.</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li className="text-foreground">Designed and developed over 10 custom websites for small businesses and individuals</li>
                    <li className="text-foreground">Specialized in e-commerce solutions using modern JavaScript frameworks</li>
                    <li className="text-foreground">Provided ongoing maintenance and support for client websites</li>
                    <li className="text-foreground">Implemented SEO best practices to improve client website visibility</li>
                  </ul>
                </div>
              </div>

  <div className="space-y-8">
                <div className="relative border-l-2 border-muted pl-6 pb-6">
                  <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                  <div className="flex flex-col md:flex-row md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground">Full Stack Developer Intern</h3>
                    <span className="text-muted-foreground">Dec 2024 - Mar 2025</span>
                  </div>
                  <p className="text-lg text-primary mb-2">6PM Media</p>
                  <p className="text-muted-foreground mb-4">Worked as a full-stack developer focusing on MERN stack technologies to build scalable and responsive web applications.</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li className="text-foreground">Built scalable and responsive web applications using the MERN stack</li>
                    <li className="text-foreground">Implemented SEO strategies for React applications, improving website rankings</li>
                    <li className="text-foreground">Gained experience with n8n for workflow automation and Lovable AI for AI-driven applications</li>
                    <li className="text-foreground">Worked with Supabase, APIs, and real-time features for enhanced application capabilities</li>
                  </ul>
                </div>
                
                <div className="relative border-l-2 border-muted pl-6 pb-6">
                  <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                  <div className="flex flex-col md:flex-row md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground">Tech Emulsion</h3>
                    <span className="text-muted-foreground">MAY 2025 </span>
                  </div>
                  <p className="text-lg text-primary mb-2">Self-employed</p>
                  <p className="text-muted-foreground mb-4">Developed custom websites and web applications for various clients across different industries.</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li className="text-foreground">Designed and developed over 10 custom websites for small businesses and individuals</li>
                    <li className="text-foreground">Specialized in e-commerce solutions using modern JavaScript frameworks</li>
                    <li className="text-foreground">Provided ongoing maintenance and support for client websites</li>
                    <li className="text-foreground">Implemented SEO best practices to improve client website visibility</li>
                  </ul>
                </div>
              </div>

              </div>


            </section>
            
            {/* Projects Section */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <Star className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-display font-bold text-foreground">
                  <TranslatedText>Key Projects</TranslatedText>
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="border rounded-lg p-6 hover:shadow-md transition-all">
                  <h3 className="text-xl font-bold text-foreground mb-2">Patient Management System</h3>
                  <p className="text-muted-foreground mb-3">A comprehensive patient management system for healthcare providers.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-muted text-xs rounded-full">PHP</span>
                    <span className="px-2 py-1 bg-muted text-xs rounded-full">MySQL</span>
                    <span className="px-2 py-1 bg-muted text-xs rounded-full">Bootstrap</span>
                  </div>
                  <a href="https://github.com/sheryar1215/pms_project" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    View Project
                  </a>
                </div>
                
                <div className="border rounded-lg p-6 hover:shadow-md transition-all">
                  <h3 className="text-xl font-bold text-foreground mb-2">E-Commerce Platform</h3>
                  <p className="text-muted-foreground mb-3">A full-featured e-commerce platform with product listings, shopping cart, and payment processing.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-muted text-xs rounded-full">React</span>
                    <span className="px-2 py-1 bg-muted text-xs rounded-full">Node.js</span>
                    <span className="px-2 py-1 bg-muted text-xs rounded-full">MongoDB</span>
                  </div>
                  <a href="https://github.com/sheryar1215/e-commerce" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    View Project
                  </a>
                </div>
              </div>
            </section>
          </div>
          
          <div className="space-y-8">
            {/* Contact Information */}
            <section className="border rounded-lg p-6">
              <h2 className="text-xl font-display font-bold text-foreground mb-4">
                <TranslatedText>Contact Information</TranslatedText>
              </h2>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="font-medium text-muted-foreground w-20">Email:</span>
                  <a href="mailto:1215sheryarkhan@gmail.com" className="text-primary hover:underline">1215sheryarkhan@gmail.com</a>
                </li>
                <li className="flex gap-3">
                  <span className="font-medium text-muted-foreground w-20">Phone:</span>
                  <a href="tel:+923161290066" className="text-foreground">+92 316 1290066</a>
                </li>
                <li className="flex gap-3">
                  <span className="font-medium text-muted-foreground w-20">LinkedIn:</span>
                  <a href="https://www.linkedin.com/in/sheryar-khan-2b34832ab" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">sheryar-khan</a>
                </li>
                <li className="flex gap-3">
                  <span className="font-medium text-muted-foreground w-20">GitHub:</span>
                  <a href="https://github.com/sheryar1215" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">sheryar1215</a>
                </li>
                <li className="flex gap-3">
                  <span className="font-medium text-muted-foreground w-20">Location:</span>
                  <span className="text-foreground">Peshawar, Pakistan</span>
                </li>
              </ul>
            </section>
            
            {/* Education Section */}
            <section className="border rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-display font-bold text-foreground">
                  <TranslatedText>Education</TranslatedText>
                </h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-foreground">Bachelor of Computer Science</h3>
                  <p className="text-primary">University of Peshawar</p>
                  <p className="text-sm text-muted-foreground mt-1">2017 - 2021</p>
                </div>
              </div>
            </section>
            
            {/* Skills Section */}
            <section className="border rounded-lg p-6">
              <h2 className="text-xl font-display font-bold text-foreground mb-4">
                <TranslatedText>Skills</TranslatedText>
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-foreground mb-2">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {["JavaScript", "PHP", "HTML", "CSS", "C++", "Java"].map((skill, i) => (
                      <span key={i} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Frameworks & Libraries</h3>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "Express", "Laravel", "Bootstrap", "Tailwind CSS"].map((skill, i) => (
                      <span key={i} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Tools & Platforms</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "GitHub", "VS Code", "Supabase", "Figma", "n8n"].map((skill, i) => (
                      <span key={i} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
            
            {/* Certifications Section */}
            <section className="border rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-display font-bold text-foreground">
                  <TranslatedText>Certifications</TranslatedText>
                </h2>
              </div>
              <ul className="space-y-3">
                <li>
                  <p className="font-medium text-foreground">Modern Web Development with React</p>
                  <p className="text-sm text-muted-foreground">Udemy, 2023</p>
                </li>
                <li>
                  <p className="font-medium text-foreground">Full Stack JavaScript Developer</p>
                  <p className="text-sm text-muted-foreground">FreeCodeCamp, 2022</p>
                </li>
                <li>
                  <p className="font-medium text-foreground">PHP & Laravel Framework</p>
                  <p className="text-sm text-muted-foreground">Coursera, 2021</p>
                </li>
              </ul>
            </section>
            
            {/* Languages Section */}
            <section className="border rounded-lg p-6">
              <h2 className="text-xl font-display font-bold text-foreground mb-4">
                <TranslatedText>Languages</TranslatedText>
              </h2>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-foreground">English</span>
                  <span className="text-sm text-muted-foreground">Professional</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-foreground">Urdu</span>
                  <span className="text-sm text-muted-foreground">Native</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-foreground">Pashto</span>
                  <span className="text-sm text-muted-foreground">Native</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resume;
