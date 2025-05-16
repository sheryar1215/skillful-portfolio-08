
import React from 'react';
import { TranslatedText } from '@/components/TranslatedText';
import SocialLinks from '@/components/SocialLinks';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary/5 py-16 mt-20 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-display font-bold mb-5 text-foreground">
              <TranslatedText>Sheryar Khan</TranslatedText>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              <TranslatedText>Computer Science Graduate & Full-Stack Developer specializing in creating exceptional digital experiences</TranslatedText>
            </p>
            <SocialLinks />
          </div>
          <div>
            <h3 className="text-xl font-display font-bold mb-5 text-foreground">
              <TranslatedText>Contact</TranslatedText>
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="leading-relaxed">
                  <TranslatedText>1215sheryarkhan@gmail.com</TranslatedText>
                </span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span className="leading-relaxed">
                  <TranslatedText>+923161290066</TranslatedText>
                </span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="leading-relaxed">
                  <TranslatedText>Peshawar, Pakistan</TranslatedText>
                </span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-display font-bold mb-5 text-foreground">
              <TranslatedText>Links</TranslatedText>
            </h3>
            <div className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-foreground transition-colors mb-1.5 hover:translate-x-1 transform transition-transform">
                <TranslatedText>About</TranslatedText>
              </a>
              <a href="#projects" className="block text-muted-foreground hover:text-foreground transition-colors mb-1.5 hover:translate-x-1 transform transition-transform">
                <TranslatedText>Projects</TranslatedText>
              </a>
              <a href="#experience" className="block text-muted-foreground hover:text-foreground transition-colors mb-1.5 hover:translate-x-1 transform transition-transform">
                <TranslatedText>Experience</TranslatedText>
              </a>
              <a href="#education" className="block text-muted-foreground hover:text-foreground transition-colors mb-1.5 hover:translate-x-1 transform transition-transform">
                <TranslatedText>Education</TranslatedText>
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-foreground transition-colors mb-1.5 hover:translate-x-1 transform transition-transform">
                <TranslatedText>Contact</TranslatedText>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border/50 mt-10 pt-6 text-center text-muted-foreground">
          <TranslatedText>{`© ${currentYear.toString()} Sheryar Khan. All rights reserved.`}</TranslatedText>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
