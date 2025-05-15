
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  name?: string;  // Make name prop optional
}

const Navbar: React.FC<NavbarProps> = ({ name = "Sheryar Khan" }) => {  // Add default value
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/70 border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold">
          {name}
        </a>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </a>
          <a href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
            Experience
          </a>
          <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </a>
          <a href="/admin" className="text-sm font-medium hover:text-primary transition-colors">
            Admin
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md hover:bg-accent" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden container mx-auto px-4 py-2 pb-4 flex flex-col space-y-3 border-t border-border">
          <a href="#home" className="text-sm font-medium hover:text-primary transition-colors" onClick={closeMobileMenu}>
            Home
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors" onClick={closeMobileMenu}>
            About
          </a>
          <a href="#experience" className="text-sm font-medium hover:text-primary transition-colors" onClick={closeMobileMenu}>
            Experience
          </a>
          <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors" onClick={closeMobileMenu}>
            Projects
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors" onClick={closeMobileMenu}>
            Contact
          </a>
          <a href="/admin" className="text-sm font-medium hover:text-primary transition-colors" onClick={closeMobileMenu}>
            Admin
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
