
import React, { useState } from 'react';
import { Menu, X, LogIn, LogOut } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { TranslatedText } from './TranslatedText';
import { useSupabaseSession } from '@/hooks/useSupabase';
import { useAdmin } from '@/hooks/useAdmin';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

interface NavbarProps {
  name?: string;  // Make name prop optional
}

const Navbar: React.FC<NavbarProps> = ({ name = "Sheryar Khan" }) => {  // Add default value
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { session } = useSupabaseSession();
  const { isAdmin } = useAdmin();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  
  const handleLogin = () => {
    navigate('/auth');
    closeMobileMenu();
  };
  
  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast.success('Logged out successfully');
      navigate('/');
      closeMobileMenu();
    } catch (error) {
      console.error('Error signing out:', error);
      toast.error('Failed to log out');
    }
  };
  
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/70 border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold">
          {name}
        </a>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">
            <TranslatedText>Home</TranslatedText>
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            <TranslatedText>About</TranslatedText>
          </a>
          <a href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
            <TranslatedText>Experience</TranslatedText>
          </a>
          <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
            <TranslatedText>Projects</TranslatedText>
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            <TranslatedText>Contact</TranslatedText>
          </a>
          {isAdmin && (
            <a href="/admin" className="text-sm font-medium hover:text-primary transition-colors">
              <TranslatedText>Admin</TranslatedText>
            </a>
          )}
          {session ? (
            <button 
              onClick={handleLogout}
              className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
            >
              <LogOut className="h-4 w-4" />
              <TranslatedText>Logout</TranslatedText>
            </button>
          ) : (
            <button 
              onClick={handleLogin}
              className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
            >
              <LogIn className="h-4 w-4" />
              <TranslatedText>Login</TranslatedText>
            </button>
          )}
          <LanguageSelector />
        </div>
        
        {/* Mobile menu button */}
        <div className="flex items-center gap-4 md:hidden">
          <LanguageSelector />
          <button 
            className="p-2 rounded-md hover:bg-accent" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden container mx-auto px-4 py-2 pb-4 flex flex-col space-y-3 border-t border-border">
          <a href="#home" className="text-sm font-medium hover:text-primary transition-colors" onClick={closeMobileMenu}>
            <TranslatedText>Home</TranslatedText>
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors" onClick={closeMobileMenu}>
            <TranslatedText>About</TranslatedText>
          </a>
          <a href="#experience" className="text-sm font-medium hover:text-primary transition-colors" onClick={closeMobileMenu}>
            <TranslatedText>Experience</TranslatedText>
          </a>
          <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors" onClick={closeMobileMenu}>
            <TranslatedText>Projects</TranslatedText>
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors" onClick={closeMobileMenu}>
            <TranslatedText>Contact</TranslatedText>
          </a>
          {isAdmin && (
            <a href="/admin" className="text-sm font-medium hover:text-primary transition-colors" onClick={closeMobileMenu}>
              <TranslatedText>Admin</TranslatedText>
            </a>
          )}
          {session ? (
            <button 
              onClick={handleLogout}
              className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
            >
              <LogOut className="h-4 w-4" />
              <TranslatedText>Logout</TranslatedText>
            </button>
          ) : (
            <button 
              onClick={handleLogin}
              className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
            >
              <LogIn className="h-4 w-4" />
              <TranslatedText>Login</TranslatedText>
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
