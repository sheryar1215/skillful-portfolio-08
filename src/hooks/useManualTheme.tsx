
import { useState, useEffect } from 'react';

export interface CustomColors {
  primary: string;
  secondary: string;
  accent: string;
}

const defaultColors: CustomColors = {
  primary: '#3b82f6',
  secondary: '#f1f5f9',
  accent: '#8b5cf6'
};

export const useManualTheme = () => {
  const [colors, setColors] = useState<CustomColors>(defaultColors);

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
  const applyColors = (customColors: CustomColors) => {
    const root = document.documentElement;
    
    root.style.setProperty('--primary', hexToHsl(customColors.primary));
    root.style.setProperty('--secondary', hexToHsl(customColors.secondary));
    root.style.setProperty('--accent', hexToHsl(customColors.accent));
    root.style.setProperty('--ring', hexToHsl(customColors.primary));
  };

  // Load colors from localStorage
  const loadColorsFromStorage = () => {
    try {
      const savedColors = localStorage.getItem('custom-theme-colors');
      if (savedColors) {
        const parsedColors = JSON.parse(savedColors);
        setColors(parsedColors);
        applyColors(parsedColors);
        return parsedColors;
      }
    } catch (error) {
      console.error('Error loading colors from localStorage:', error);
    }
    return defaultColors;
  };

  // Save colors to localStorage
  const saveColorsToStorage = (newColors: CustomColors) => {
    try {
      localStorage.setItem('custom-theme-colors', JSON.stringify(newColors));
      setColors(newColors);
      applyColors(newColors);
    } catch (error) {
      console.error('Error saving colors to localStorage:', error);
    }
  };

  // Update a specific color
  const updateColor = (colorType: keyof CustomColors, newColor: string) => {
    const updatedColors = { ...colors, [colorType]: newColor };
    saveColorsToStorage(updatedColors);
  };

  // Reset to default colors
  const resetColors = () => {
    saveColorsToStorage(defaultColors);
  };

  // Load colors on hook initialization
  useEffect(() => {
    loadColorsFromStorage();
  }, []);

  return {
    colors,
    updateColor,
    resetColors,
    applyColors,
    saveColorsToStorage
  };
};
