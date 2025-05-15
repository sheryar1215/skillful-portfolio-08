
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
            <h3 className="text-lg font-bold mb-4">
              <TranslatedText>Sheryar Khan</TranslatedText>
            </h3>
            <p className="text-muted-foreground mb-4">
              <TranslatedText>Computer Science Graduate & Full-Stack Developer</TranslatedText>
            </p>
            <SocialLinks />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">
              <TranslatedText>Contact</TranslatedText>
            </h3>
            <p className="text-muted-foreground">
              <TranslatedText>Email: contact@sheryarkhan.com</TranslatedText>
            </p>
            <p className="text-muted-foreground">
              <TranslatedText>Location: Toronto, Canada</TranslatedText>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">
              <TranslatedText>Links</TranslatedText>
            </h3>
            <a href="#about" className="block text-muted-foreground hover:text-foreground transition-colors mb-1">
              <TranslatedText>About</TranslatedText>
            </a>
            <a href="#projects" className="block text-muted-foreground hover:text-foreground transition-colors mb-1">
              <TranslatedText>Projects</TranslatedText>
            </a>
            <a href="#experience" className="block text-muted-foreground hover:text-foreground transition-colors mb-1">
              <TranslatedText>Experience</TranslatedText>
            </a>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 text-center text-muted-foreground">
          <TranslatedText>
            © {currentYear} Sheryar Khan. All rights reserved.
          </TranslatedText>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
