
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { TranslatedText } from './TranslatedText';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';

interface NavbarProps {
  name?: string;
}

const Navbar: React.FC<NavbarProps> = ({ name = "Sheryar Khan" }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const isActive = (path: string) => {
    if (path.startsWith('#') && location.pathname === '/') {
      return location.hash === path;
    }
    return location.pathname === path;
  };
  
  const navLinks = [
    { href: "#home", label: "Home", showOnHome: true },
    { href: "#about", label: "About", showOnHome: true },
    { href: "#experience", label: "Experience", showOnHome: true },
    { href: "#projects", label: "Projects", showOnHome: true },
    { href: "#contact", label: "Contact", showOnHome: true },
    { href: "/resume", label: "Resume", showOnHome: false },
    { href: "/admin", label: "Admin", showOnHome: false }
  ];
  
  const isHomePage = location.pathname === '/';
  
  return (
    <nav className={`sticky top-0 z-50 w-full backdrop-blur-lg border-b transition-all duration-300 ${
      scrolled ? 'bg-background/80 shadow-sm' : 'bg-background/50'
    }`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold hover:text-primary transition-colors">
          {name}
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          {navLinks
            .filter(link => !link.href.startsWith('#') || isHomePage || !link.showOnHome)
            .map((link, index) => {
              // If it's a hash link on a non-home page, link to homepage + hash
              const href = link.href.startsWith('#') && !isHomePage 
                ? `/${link.href}` 
                : link.href;
                
              return (
                <Link 
                  key={index}
                  to={href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.href) 
                      ? 'text-primary' 
                      : 'hover:text-primary'
                  }`}
                >
                  <TranslatedText>{link.label}</TranslatedText>
                </Link>
              );
            })}
            
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
            className="p-2 rounded-full hover:bg-accent transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <LanguageSelector />
        </div>
        
        {/* Mobile menu button */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
            className="p-2 rounded-full hover:bg-accent transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <LanguageSelector />
          
          <button 
            className="p-2 rounded-md hover:bg-accent transition-colors" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden container mx-auto px-4 py-2 pb-4 flex flex-col space-y-3 border-t animate-fade-in">
          {navLinks
            .filter(link => !link.href.startsWith('#') || isHomePage || !link.showOnHome)
            .map((link, index) => {
              const href = link.href.startsWith('#') && !isHomePage 
                ? `/${link.href}` 
                : link.href;
                
              return (
                <Link
                  key={index}
                  to={href}
                  className={`text-sm font-medium p-2 rounded-md transition-colors ${
                    isActive(link.href) 
                      ? 'bg-accent text-primary' 
                      : 'hover:bg-accent/50'
                  }`}
                  onClick={closeMobileMenu}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <TranslatedText>{link.label}</TranslatedText>
                </Link>
              );
            })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
