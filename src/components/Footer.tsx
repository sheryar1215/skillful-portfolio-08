
import React from 'react';
import { TranslatedText } from './TranslatedText';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear(); // This returns a number
  
  return (
    <footer className="py-10 mt-20 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-sm text-muted-foreground">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <a href="#home" className="hover:text-primary transition-colors">
              <TranslatedText>Home</TranslatedText>
            </a>
            <a href="#about" className="hover:text-primary transition-colors">
              <TranslatedText>About</TranslatedText>
            </a>
            <a href="#experience" className="hover:text-primary transition-colors">
              <TranslatedText>Experience</TranslatedText>
            </a>
            <a href="#projects" className="hover:text-primary transition-colors">
              <TranslatedText>Projects</TranslatedText>
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              <TranslatedText>Contact</TranslatedText>
            </a>
          </div>
          <p>
            {/* Fix: Convert array to string by concatenating the parts */}
            <TranslatedText>
              © {currentYear.toString()} Sheryar Khan. All rights reserved.
            </TranslatedText>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
