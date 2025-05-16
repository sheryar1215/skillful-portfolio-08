
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TranslatedText } from './TranslatedText';

interface HeroProps {
  profileImage?: string;
}

const Hero: React.FC<HeroProps> = ({ profileImage }) => {
  return (
    <section id="home" className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
            <span className="bg-gradient-to-r from-primary to-purple-500 text-transparent bg-clip-text">
              Sheryar Khan
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
            <TranslatedText>Computer Science Graduate & Full-Stack Developer</TranslatedText>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
            <TranslatedText>
              I build exceptional digital experiences with modern technologies, focusing on creating responsive, 
              user-friendly web applications that deliver real value.
            </TranslatedText>
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a 
              href="#contact" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium transition-colors"
            >
              <TranslatedText>Get in Touch</TranslatedText>
            </a>
            <a 
              href="#projects" 
              className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-6 py-3 rounded-md font-medium transition-colors"
            >
              <TranslatedText>View Projects</TranslatedText>
            </a>
          </div>
        </div>
        
        <div className={cn(
          "w-full lg:w-1/2 flex justify-center lg:justify-end",
          "opacity-0 animate-slide-up-delay-1"
        )}>
          {profileImage ? (
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <img 
                src={profileImage}
                alt="Sheryar Khan" 
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          ) : (
            <div className="bg-muted w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-muted-foreground">SK</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <a href="#about" aria-label="Scroll to About section">
          <ArrowDown className="h-8 w-8 text-muted-foreground" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
