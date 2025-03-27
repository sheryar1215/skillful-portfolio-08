
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionId = section.getAttribute('id') || '';
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });

      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-4 bg-background/80 backdrop-blur-md shadow-sm" : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" className="text-xl font-display font-bold">
          <span className="sr-only">Portfolio</span>
          <span className="bg-foreground text-background px-2 py-1 rounded mr-1">PS</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-2">
          {['home', 'about', 'projects', 'experience', 'education', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={cn(
                "nav-link",
                activeSection === section ? "active" : ""
              )}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>
        
        <div className="md:hidden">
          <MobileMenu activeSection={activeSection} scrollToSection={scrollToSection} />
        </div>
      </div>
    </header>
  );
};

const MobileMenu = ({ 
  activeSection, 
  scrollToSection 
}: { 
  activeSection: string; 
  scrollToSection: (id: string) => void 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const handleNavClick = (section: string) => {
    scrollToSection(section);
    setIsOpen(false);
  };

  return (
    <div>
      <button 
        onClick={toggleMenu}
        className="p-2 text-foreground focus:outline-none"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span 
            className={cn(
              "w-full h-0.5 bg-current transition-transform duration-300",
              isOpen && "translate-y-[8px] rotate-45"
            )}
          />
          <span 
            className={cn(
              "w-full h-0.5 bg-current transition-opacity duration-300",
              isOpen && "opacity-0"
            )}
          />
          <span 
            className={cn(
              "w-full h-0.5 bg-current transition-transform duration-300",
              isOpen && "translate-y-[-8px] -rotate-45"
            )}
          />
        </div>
      </button>
      
      <div 
        className={cn(
          "fixed top-[56px] left-0 right-0 bg-background/95 backdrop-blur-md transition-transform duration-300 ease-in-out z-50 overflow-hidden border-b border-border",
          isOpen ? "translate-y-0" : "translate-y-[-100%]"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-2">
            {['home', 'about', 'projects', 'experience', 'education', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={cn(
                  "py-3 px-4 rounded-lg transition-colors",
                  activeSection === section 
                    ? "bg-primary/10 text-foreground font-medium" 
                    : "text-foreground/80 hover:bg-secondary"
                )}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
