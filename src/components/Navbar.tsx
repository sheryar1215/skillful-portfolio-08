
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, Moon, Sun } from 'lucide-react';
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
        scrolled ? "py-2 bg-background/90 backdrop-blur-md shadow-sm" : "py-3 bg-transparent"
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
        <div className="flex items-center space-x-2 mr-1 bg-secondary/60 p-1.5 rounded-lg backdrop-blur-sm">
          <Sun className="h-[14px] w-[14px] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[14px] w-[14px] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <Switch
            checked={theme === 'dark'}
            onCheckedChange={toggleTheme}
            className="data-[state=checked]:bg-primary"
          />
        </div>
        
        <button 
          onClick={toggleMenu}
          className="p-2 text-foreground bg-secondary/40 rounded-lg backdrop-blur-sm hover:bg-secondary/60 transition-all focus:outline-none"
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
      
      <div 
        className={cn(
          "fixed top-[60px] left-0 right-0 bg-background/95 backdrop-blur-md transition-transform duration-300 ease-in-out z-50 overflow-hidden border-b border-border max-h-[calc(100vh-60px)] overflow-y-auto",
          isOpen ? "translate-y-0 shadow-lg" : "translate-y-[-100%]"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 py-2">
          <nav className="grid grid-cols-2 gap-2 py-2">
            {['home', 'about', 'projects', 'experience', 'education', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={cn(
                  "py-3 px-4 rounded-lg transition-all hover:bg-secondary/80 animate-in flex items-center justify-center",
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
