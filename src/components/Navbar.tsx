
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
    if (path === '/') return location.pathname === '/' && !location.hash;
    if (path.startsWith('#') && location.pathname === '/') {
      return location.hash === path;
    }
    return location.pathname === path;
  };

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    if (!sectionId.startsWith('#')) return;
    
    const element = document.getElementById(sectionId.substring(1));
    if (element) {
      const navbarHeight = document.querySelector('nav')?.clientHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight - 20,
        behavior: 'smooth'
      });
      
      // Update URL without scroll
      window.history.pushState({}, '', sectionId);
      closeMobileMenu();
    }
  };
  
  const navLinks = [
    { href: "/", label: "Home", showOnHome: false, showAlways: true },
    { href: "#about", label: "About", showOnHome: true, showAlways: false },
    { href: "#projects", label: "Projects", showOnHome: true, showAlways: false },
    { href: "#experience", label: "Experience", showOnHome: true, showAlways: false },
    { href: "#contact", label: "Contact", showOnHome: true, showAlways: false },
    // { href: "/resume", label: "Resume", showOnHome: true, showAlways: true },
    // { href: "/admin", label: "Admin", showOnHome: true, showAlways: true }
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
            .filter(link => (isHomePage && link.showOnHome) || (!isHomePage && link.showAlways) || link.showAlways)
            .map((link, index) => (
              link.href.startsWith('#') ? (
                <a 
                  key={index}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.href) 
                      ? 'text-primary' 
                      : 'hover:text-primary'
                  }`}
                  onClick={(e) => handleScrollToSection(e, link.href)}
                >
                  <TranslatedText>{link.label}</TranslatedText>
                </a>
              ) : (
                <Link 
                  key={index}
                  to={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.href) 
                      ? 'text-primary' 
                      : 'hover:text-primary'
                  }`}
                  onClick={closeMobileMenu}
                >
                  <TranslatedText>{link.label}</TranslatedText>
                </Link>
              )
            ))}
            
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
            .filter(link => (isHomePage && link.showOnHome) || (!isHomePage && link.showAlways) || link.showAlways)
            .map((link, index) => (
              link.href.startsWith('#') ? (
                <a
                  key={index}
                  href={link.href}
                  className={`text-sm font-medium p-2 rounded-md transition-colors ${
                    isActive(link.href) 
                      ? 'bg-accent text-primary' 
                      : 'hover:bg-accent/50'
                  }`}
                  onClick={(e) => handleScrollToSection(e, link.href)}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <TranslatedText>{link.label}</TranslatedText>
                </a>
              ) : (
                <Link
                  key={index}
                  to={link.href}
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
              )
            ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
