
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <div className="text-2xl font-display font-bold mb-2">
              <span className="sr-only">Portfolio</span>
              <span className="bg-foreground text-background px-2 py-1 rounded mr-1">PS</span>
            </div>
            
            <p className="text-muted-foreground text-sm mt-2">
              &copy; {currentYear} Portfolio. All rights reserved.
            </p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-background hover:bg-background/80 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/50">
          <p className="text-center text-sm text-muted-foreground">
            Designed and built with care by a passionate developer.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
