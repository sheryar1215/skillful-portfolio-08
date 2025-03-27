
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 via-background to-background" />
      </div>
      
      <div className="section-container flex flex-col justify-center">
        <div className="max-w-4xl">
          <div className="mb-4 opacity-0 animate-slide-up">
            <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
              Computer Science Graduate & Full-Stack Developer
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight opacity-0 animate-slide-up">
            Sheryar <br className="hidden sm:block" />
            <span className="text-primary relative">
              Khan
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30"></span>
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl opacity-0 animate-slide-up-delay-1">
            Full-Stack Developer from Peshawar, Pakistan specializing in PHP ,LARAVEL and MERN stack development with expertise in SEO optimization.
          </p>
          
          <div className="flex flex-wrap gap-4 opacity-0 animate-slide-up-delay-2">
            <a 
              href="#projects" 
              className="button-primary"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="button-secondary"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 opacity-0 animate-slide-up-delay-3">
        <button 
          onClick={scrollToAbout} 
          className="p-2 rounded-full bg-secondary/80 hover:bg-secondary transition-colors animate-float"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-6 w-6 text-secondary-foreground" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
