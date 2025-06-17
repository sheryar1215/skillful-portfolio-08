
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, RefreshCw } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { TranslatedText } from '@/components/TranslatedText';

const ManualThemeCustomizer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [primaryColor, setPrimaryColor] = useState('#3b82f6'); // Default blue
  const [secondaryColor, setSecondaryColor] = useState('#f1f5f9');
  const [accentColor, setAccentColor] = useState('#8b5cf6');
  const { theme } = useTheme();

  // Load saved colors from localStorage on component mount
  useEffect(() => {
    const savedColors = localStorage.getItem('custom-theme-colors');
    if (savedColors) {
      const colors = JSON.parse(savedColors);
      setPrimaryColor(colors.primary || '#3b82f6');
      setSecondaryColor(colors.secondary || '#f1f5f9');
      setAccentColor(colors.accent || '#8b5cf6');
      applyColorsToCSS(colors.primary, colors.secondary, colors.accent);
    }
  }, []);

  // Convert hex to HSL for CSS custom properties
  const hexToHsl = (hex: string): string => {
    let r = parseInt(hex.slice(1, 3), 16) / 255;
    let g = parseInt(hex.slice(3, 5), 16) / 255;
    let b = parseInt(hex.slice(5, 7), 16) / 255;
    
    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    
    if (max === min) {
      h = s = 0;
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

  // Apply colors to CSS custom properties
  const applyColorsToCSS = (primary: string, secondary: string, accent: string) => {
    const root = document.documentElement;
    
    // Apply primary color and its variations
    root.style.setProperty('--primary', hexToHsl(primary));
    root.style.setProperty('--primary-foreground', '210 40% 98%');
    
    // Apply secondary color
    root.style.setProperty('--secondary', hexToHsl(secondary));
    root.style.setProperty('--secondary-foreground', '222 47% 11%');
    
    // Apply accent color
    root.style.setProperty('--accent', hexToHsl(accent));
    root.style.setProperty('--accent-foreground', '210 40% 98%');
    
    // Update other related colors based on primary
    root.style.setProperty('--ring', hexToHsl(primary));
    
    // For dark mode compatibility
    if (theme === 'dark') {
      root.style.setProperty('--primary-foreground', '222 47% 11%');
      root.style.setProperty('--secondary-foreground', '210 40% 98%');
    }
  };

  // Handle color change and persist to localStorage
  const handleColorChange = (colorType: 'primary' | 'secondary' | 'accent', newColor: string) => {
    let updatedColors = { primary: primaryColor, secondary: secondaryColor, accent: accentColor };
    
    switch (colorType) {
      case 'primary':
        setPrimaryColor(newColor);
        updatedColors.primary = newColor;
        break;
      case 'secondary':
        setSecondaryColor(newColor);
        updatedColors.secondary = newColor;
        break;
      case 'accent':
        setAccentColor(newColor);
        updatedColors.accent = newColor;
        break;
    }
    
    // Apply colors immediately
    applyColorsToCSS(updatedColors.primary, updatedColors.secondary, updatedColors.accent);
    
    // Save to localStorage
    localStorage.setItem('custom-theme-colors', JSON.stringify(updatedColors));
  };

  // Reset to default colors
  const resetToDefault = () => {
    const defaultColors = {
      primary: '#3b82f6',
      secondary: '#f1f5f9',
      accent: '#8b5cf6'
    };
    
    setPrimaryColor(defaultColors.primary);
    setSecondaryColor(defaultColors.secondary);
    setAccentColor(defaultColors.accent);
    
    applyColorsToCSS(defaultColors.primary, defaultColors.secondary, defaultColors.accent);
    
    // Save to localStorage
    localStorage.setItem('custom-theme-colors', JSON.stringify(defaultColors));
  };

  const toggleCustomizer = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Toggle Button */}
      <Button 
        className="fixed bottom-4 right-4 shadow-lg z-40 rounded-full p-3 h-12 w-12"
        onClick={toggleCustomizer}
        variant="default"
        size="icon"
      >
        <Palette className="h-5 w-5" />
      </Button>

      {/* Theme Customizer Card */}
      <Card 
        className={`w-full max-w-md fixed bottom-20 right-4 shadow-lg z-50 transition-all ease-in-out duration-300 transform ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <CardHeader className="space-y-1">
          <CardTitle>
            <TranslatedText>Theme Customizer</TranslatedText>
          </CardTitle>
          <CardDescription>
            <TranslatedText>Customize your website colors</TranslatedText>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Primary Color Picker */}
          <div className="space-y-2">
            <label className="text-sm font-medium">
              <TranslatedText>Primary Color</TranslatedText>
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={primaryColor}
                onChange={(e) => handleColorChange('primary', e.target.value)}
                className="w-12 h-8 rounded border cursor-pointer"
              />
              <span className="text-sm text-muted-foreground">{primaryColor}</span>
            </div>
          </div>

          {/* Secondary Color Picker */}
          <div className="space-y-2">
            <label className="text-sm font-medium">
              <TranslatedText>Secondary Color</TranslatedText>
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={secondaryColor}
                onChange={(e) => handleColorChange('secondary', e.target.value)}
                className="w-12 h-8 rounded border cursor-pointer"
              />
              <span className="text-sm text-muted-foreground">{secondaryColor}</span>
            </div>
          </div>

          {/* Accent Color Picker */}
          <div className="space-y-2">
            <label className="text-sm font-medium">
              <TranslatedText>Accent Color</TranslatedText>
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={accentColor}
                onChange={(e) => handleColorChange('accent', e.target.value)}
                className="w-12 h-8 rounded border cursor-pointer"
              />
              <span className="text-sm text-muted-foreground">{accentColor}</span>
            </div>
          </div>

          {/* Color Preview */}
          <div className="grid grid-cols-3 gap-2 mt-4">
            <div 
              className="h-8 rounded-md border"
              style={{ backgroundColor: primaryColor }}
              title="Primary"
            />
            <div 
              className="h-8 rounded-md border"
              style={{ backgroundColor: secondaryColor }}
              title="Secondary"
            />
            <div 
              className="h-8 rounded-md border"
              style={{ backgroundColor: accentColor }}
              title="Accent"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={resetToDefault}
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            <TranslatedText>Reset</TranslatedText>
          </Button>
          <Button 
            onClick={toggleCustomizer}
            size="sm"
            variant="secondary"
          >
            <TranslatedText>Close</TranslatedText>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default ManualThemeCustomizer;
