
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { Switch } from '@/components/ui/switch';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionId = section.getAttribute('id') || '';
        // Type cast section to HTMLElement to access offsetTop and offsetHeight
        const htmlSection = section as HTMLElement;
        const sectionTop = htmlSection.offsetTop;
        const sectionHeight = htmlSection.offsetHeight;

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
        top: (element as HTMLElement).offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-4 bg-background/80 backdrop-blur-md shadow-sm" : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" className="text-xl font-display font-bold group">
          <span className="sr-only">Portfolio</span>
          <span className="bg-foreground text-background px-2 py-1 rounded mr-1 group-hover:scale-105 transition-transform">SK</span>
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
          
          <div className="ml-4 flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <Sun className="h-[14px] w-[14px] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[14px] w-[14px] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </div>
            <Switch
              checked={theme === 'dark'}
              onCheckedChange={toggleTheme}
              className="data-[state=checked]:bg-primary"
            />
          </div>
        </nav>
        
        <div className="md:hidden flex items-center">
          <MobileMenu 
            activeSection={activeSection} 
            scrollToSection={scrollToSection} 
            theme={theme}
            toggleTheme={toggleTheme}
          />
        </div>
      </div>
    </header>
  );
};

const MobileMenu = ({ 
  activeSection, 
  scrollToSection,
  theme,
  toggleTheme
}: { 
  activeSection: string; 
  scrollToSection: (id: string) => void;
  theme: string;
  toggleTheme: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const handleNavClick = (section: string) => {
    scrollToSection(section);
    setIsOpen(false);
  };

  return (
    <div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <Sun className="h-[14px] w-[14px] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[14px] w-[14px] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </div>
          <Switch
            checked={theme === 'dark'}
            onCheckedChange={toggleTheme}
            className="data-[state=checked]:bg-primary"
          />
        </div>
        
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
      </div>
      
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
                  "py-3 px-4 rounded-lg transition-all hover:scale-105 hover:-translate-y-1 hover:bg-secondary/80 animate-in",
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
