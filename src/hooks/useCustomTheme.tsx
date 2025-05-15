
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/services/translationService';
import { toast } from '@/hooks/use-toast';

export interface ThemeSettings {
  colors: {
    primary: string;
    background: string;
    foreground: string;
    secondary: string;
    muted: string;
    accent: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  buttonStyle: 'rounded' | 'pill' | 'square';
  borderRadius: 'sm' | 'md' | 'lg' | 'xl';
  description: string;
}

interface CustomThemeContextType {
  themeSettings: ThemeSettings | null;
  isLoading: boolean;
  interpretMood: (mood: string) => Promise<void>;
  resetTheme: () => void;
}

const initialTheme: ThemeSettings = {
  colors: {
    primary: '#000000',
    background: '#f8f8f8',
    foreground: '#0a0a0a',
    secondary: '#f0f0f0',
    muted: '#7a7a7a',
    accent: '#e0e0e0'
  },
  fonts: {
    heading: 'Inter',
    body: 'Inter'
  },
  buttonStyle: 'rounded',
  borderRadius: 'md',
  description: 'Default theme'
};

const CustomThemeContext = createContext<CustomThemeContextType>({
  themeSettings: initialTheme,
  isLoading: false,
  interpretMood: async () => {},
  resetTheme: () => {}
});

export const useCustomTheme = () => useContext(CustomThemeContext);

export const CustomThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [themeSettings, setThemeSettings] = useState<ThemeSettings | null>(initialTheme);
  const [isLoading, setIsLoading] = useState(false);
  const [loadedFonts, setLoadedFonts] = useState<Set<string>>(new Set(['Inter']));

  const loadFont = (fontName: string) => {
    if (loadedFonts.has(fontName)) return;
    
    const formattedName = fontName.replace(/ /g, '+');
    const link = document.createElement('link');
    link.href = `https://fonts.googleapis.com/css2?family=${formattedName}:wght@300;400;500;600;700&display=swap`;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    setLoadedFonts(prev => new Set([...prev, fontName]));
  };

  const applyTheme = (theme: ThemeSettings) => {
    const root = document.documentElement;
    
    // Apply colors as CSS variables
    root.style.setProperty('--primary', hexToHsl(theme.colors.primary));
    root.style.setProperty('--background', hexToHsl(theme.colors.background));
    root.style.setProperty('--foreground', hexToHsl(theme.colors.foreground));
    root.style.setProperty('--secondary', hexToHsl(theme.colors.secondary));
    root.style.setProperty('--muted', hexToHsl(theme.colors.muted));
    root.style.setProperty('--accent', hexToHsl(theme.colors.accent));
    
    // Load fonts if needed
    loadFont(theme.fonts.heading);
    loadFont(theme.fonts.body);
    
    // Apply fonts
    root.style.setProperty('--font-heading', `'${theme.fonts.heading}', sans-serif`);
    root.style.setProperty('--font-body', `'${theme.fonts.body}', sans-serif`);
    
    // Apply border radius
    const radiusMap = { sm: '0.25rem', md: '0.5rem', lg: '0.75rem', xl: '1rem' };
    root.style.setProperty('--radius', radiusMap[theme.borderRadius]);
    
    // Apply button styles through a class on the body
    document.body.classList.remove('button-rounded', 'button-pill', 'button-square');
    document.body.classList.add(`button-${theme.buttonStyle}`);
  };

  const hexToHsl = (hex: string): string => {
    // Convert hex to RGB
    let r = parseInt(hex.slice(1, 3), 16) / 255;
    let g = parseInt(hex.slice(3, 5), 16) / 255;
    let b = parseInt(hex.slice(5, 7), 16) / 255;
    
    // Find max and min values to calculate lightness
    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    
    if (max === min) {
      h = s = 0; // achromatic
    } else {
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
        default: h = 0;
      }
      h /= 6;
    }
    
    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);
    
    return `${h} ${s}% ${l}%`;
  };

  const interpretMood = async (mood: string) => {
    try {
      setIsLoading(true);
      
      const { data, error } = await supabase.functions.invoke('interpret-mood', {
        body: { mood },
      });
      
      if (error) throw new Error(error.message);
      
      if (data) {
        setThemeSettings(data);
        applyTheme(data);
        toast({
          title: "Theme updated",
          description: data.description,
          duration: 3000,
        });
      }
    } catch (err: any) {
      console.error('Error interpreting mood:', err);
      toast({
        title: "Error updating theme",
        description: err.message || "Something went wrong",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetTheme = () => {
    setThemeSettings(initialTheme);
    applyTheme(initialTheme);
    toast({
      title: "Theme reset",
      description: "Returned to default theme",
      duration: 3000,
    });
  };

  useEffect(() => {
    // Apply initial theme
    if (themeSettings) {
      applyTheme(themeSettings);
    }
  }, []);

  return (
    <CustomThemeContext.Provider 
      value={{ 
        themeSettings, 
        isLoading, 
        interpretMood, 
        resetTheme 
      }}
    >
      {children}
    </CustomThemeContext.Provider>
  );
};
