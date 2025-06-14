
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TranslatedText } from './TranslatedText';

interface HeroProps {
  profileImage?: string;
}

const Hero: React.FC<HeroProps> = ({ profileImage }) => {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden
        bg-gradient-to-br from-blue-700 via-indigo-800 to-fuchsia-900
        dark:from-slate-900 dark:via-slate-900 dark:to-blue-950"
    >
      {/* Stylish SVG pattern overlay */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none z-0 animate-fade-in"
        style={{
          background: `url("data:image/svg+xml,%3Csvg width='70' height='70' viewBox='0 0 70 70' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='35' cy='35' r='33' stroke='%233B82F6' stroke-opacity='0.08' stroke-width='4'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat"
        }}
      ></div>

      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left animate-slide-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-white bg-gradient-to-r from-blue-400 via-blue-200 to-violet-400 bg-clip-text text-transparent">
            Sheryar Khan
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-white/80 animate-fade-in">
            <TranslatedText>Computer Science Graduate & Full-Stack Developer</TranslatedText>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto lg:mx-0 animate-fade-in">
            <TranslatedText>
              I build exceptional digital experiences with modern technologies, focusing on creating responsive, 
              user-friendly web applications that deliver real value.
            </TranslatedText>
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in">
            <a 
              href="#contact" 
              className="bg-fuchsia-700 hover:bg-fuchsia-800 text-white px-6 py-3 rounded-full font-medium transition-all duration-150 shadow-lg hover:scale-105"
            >
              <TranslatedText>Get in Touch</TranslatedText>
            </a>
            <a 
              href="#projects" 
              className="bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-600 text-blue-800 dark:text-white border border-blue-100 dark:border-slate-600 px-6 py-3 rounded-full font-medium transition-all duration-150 shadow hover:scale-105"
            >
              <TranslatedText>View Projects</TranslatedText>
            </a>
          </div>
        </div>
        <div
          className={cn(
            "w-full lg:w-1/2 flex justify-center lg:justify-end",
            "animate-slide-up-delay-1 z-20"
          )}
        >
          {profileImage ? (
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/50 dark:border-slate-700 shadow-xl bg-gradient-to-tr from-blue-500/10 to-fuchsia-500/10 backdrop-blur-md">
              <img
                src={profileImage}
                alt="Sheryar Khan"
                className="w-full h-full object-cover"
                loading="eager"
              />
              {/* Simple animated ring effect */}
              <span className="absolute inset-0 rounded-full shadow-[0_0_40px_8px_rgba(139,92,246,0.15)] pointer-events-none"></span>
            </div>
          ) : (
            <div className="bg-white dark:bg-slate-700 w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-4xl font-bold text-fuchsia-600 dark:text-fuchsia-400">SK</span>
            </div>
          )}
        </div>
      </div>
      {/* Down arrow cta */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="text-white/60 hover:text-fuchsia-400 transition-colors"
        >
          <ArrowDown className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
};
export default Hero;
