
import React from 'react';
import { TranslatedText } from '@/components/TranslatedText';
import SocialLinks from '@/components/SocialLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/50 py-10 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">
              <TranslatedText>Sheryar Khan</TranslatedText>
            </h3>
            <p className="text-foreground/80 mb-4">
              <TranslatedText>Computer Science Graduate & Full-Stack Developer</TranslatedText>
            </p>
            <SocialLinks />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">
              <TranslatedText>Contact</TranslatedText>
            </h3>
            <p className="text-foreground/80">
              <TranslatedText>Email: contact@sheryarkhan.com</TranslatedText>
            </p>
            <p className="text-foreground/80">
              <TranslatedText>Location: Toronto, Canada</TranslatedText>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">
              <TranslatedText>Links</TranslatedText>
            </h3>
            <a href="#about" className="block text-foreground/70 hover:text-foreground transition-colors mb-1">
              <TranslatedText>About</TranslatedText>
            </a>
            <a href="#projects" className="block text-foreground/70 hover:text-foreground transition-colors mb-1">
              <TranslatedText>Projects</TranslatedText>
            </a>
            <a href="#experience" className="block text-foreground/70 hover:text-foreground transition-colors mb-1">
              <TranslatedText>Experience</TranslatedText>
            </a>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 text-center text-foreground/80">
          <TranslatedText>
            © {currentYear.toString()} Sheryar Khan. All rights reserved.
          </TranslatedText>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
