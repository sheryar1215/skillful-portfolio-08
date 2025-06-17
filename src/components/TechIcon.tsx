
import React from 'react';
import { Code, Database, Globe, Palette, Smartphone, Server, Settings, Zap } from 'lucide-react';

interface TechIconProps {
  tech: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ tech, className = "w-4 h-4" }) => {
  const getTechIcon = (technology: string) => {
    const lowerTech = technology.toLowerCase();
    
    // Web Technologies
    if (lowerTech.includes('html')) return <Code className={className} />;
    if (lowerTech.includes('css')) return <Palette className={className} />;
    if (lowerTech.includes('javascript') || lowerTech.includes('js')) return <Zap className={className} />;
    if (lowerTech.includes('php')) return <Server className={className} />;
    if (lowerTech.includes('wordpress')) return <Globe className={className} />;
    
    // Frameworks & Libraries
    if (lowerTech.includes('react')) return <Code className={className} />;
    if (lowerTech.includes('node')) return <Server className={className} />;
    if (lowerTech.includes('express')) return <Server className={className} />;
    if (lowerTech.includes('laravel')) return <Server className={className} />;
    if (lowerTech.includes('bootstrap')) return <Palette className={className} />;
    if (lowerTech.includes('tailwind')) return <Palette className={className} />;
    
    // Databases
    if (lowerTech.includes('mysql') || lowerTech.includes('mongodb') || lowerTech.includes('database')) return <Database className={className} />;
    if (lowerTech.includes('supabase')) return <Database className={className} />;
    
    // Tools & Others
    if (lowerTech.includes('api') || lowerTech.includes('rest')) return <Settings className={className} />;
    if (lowerTech.includes('mobile') || lowerTech.includes('responsive')) return <Smartphone className={className} />;
    if (lowerTech.includes('webhook') || lowerTech.includes('n8n')) return <Zap className={className} />;
    
    // Default icon
    return <Code className={className} />;
  };

  return getTechIcon(tech);
};
