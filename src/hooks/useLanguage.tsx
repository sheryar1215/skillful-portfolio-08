import React, { createContext, useState, useContext, useEffect, ReactNode, useCallback } from 'react';
import { Language, languages, translateText } from '@/services/translationService';

// Import all translation files for direct access
import en from '@/locales/en.json';
import fr from '@/locales/fr.json';
import de from '@/locales/de.json';
import ps from '@/locales/ps.json';
import es from '@/locales/es.json';

const translations = { en, fr, de, ps, es } as const;

interface LanguageContextType {
  currentLanguage: Language;
  changeLanguage: (lang: Language) => void;
  translate: (text: string) => Promise<string>;
  t: (key: string, fallback?: string) => string;
  isTranslating: boolean;
  translateElement: (text: string) => React.ReactNode;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

// Helper function to get nested translation by key path
function getNestedTranslation(obj: any, path: string): string {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [isTranslating, setIsTranslating] = useState(false);
  const [translationCache, setTranslationCache] = useState<Record<string, Record<string, string>>>({});

  // Direct translation function using key paths (recommended)
  const t = useCallback((key: string, fallback?: string): string => {
    const currentTranslations = translations[currentLanguage];
    const translation = getNestedTranslation(currentTranslations, key);
    
    if (translation && typeof translation === 'string') {
      return translation;
    }
    
    // Fallback to English if translation not found
    if (currentLanguage !== 'en') {
      const englishTranslation = getNestedTranslation(translations.en, key);
      if (englishTranslation && typeof englishTranslation === 'string') {
        return englishTranslation;
      }
    }
    
    return fallback || key;
  }, [currentLanguage]);

  // Legacy translate function for backward compatibility
  const translate = async (text: string): Promise<string> => {
    if (currentLanguage === 'en') return text;
    
    // Check cache first
    if (translationCache[text]?.[currentLanguage]) {
      return translationCache[text][currentLanguage];
    }
    
    setIsTranslating(true);
    try {
      const translatedText = await translateText(text, currentLanguage);
      
      // Cache the translation
      setTranslationCache(prev => ({
        ...prev,
        [text]: {
          ...(prev[text] || {}),
          [currentLanguage]: translatedText
        }
      }));
      
      return translatedText;
    } catch (error) {
      console.error('Translation error:', error);
      return text;
    } finally {
      setIsTranslating(false);
    }
  };

  const translateElement = (text: string): React.ReactNode => {
    const [translated, setTranslated] = useState<string>(text);
    
    useEffect(() => {
      let isMounted = true;
      
      if (currentLanguage === 'en') {
        setTranslated(text);
        return;
      }
      
      // Check cache first
      if (translationCache[text]?.[currentLanguage]) {
        setTranslated(translationCache[text][currentLanguage]);
        return;
      }
      
      // Otherwise, fetch the translation
      translate(text).then((result) => {
        if (isMounted) {
          setTranslated(result);
        }
      });
      
      return () => { isMounted = false; };
    }, [text, currentLanguage]);
    
    return translated;
  };

  const changeLanguage = (lang: Language) => {
    console.log("Changing language to:", lang);
    setCurrentLanguage(lang);
    document.documentElement.lang = lang;
    localStorage.setItem('preferredLanguage', lang);
  };

  // Initialize with the user's preferred language or browser language
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage') as Language | null;
    if (savedLanguage && languages.some(lang => lang.code === savedLanguage)) {
      setCurrentLanguage(savedLanguage);
      document.documentElement.lang = savedLanguage;
    } else {
      const browserLang = navigator.language.split('-')[0] as Language;
      if (languages.some(lang => lang.code === browserLang)) {
        setCurrentLanguage(browserLang);
        document.documentElement.lang = browserLang;
      }
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ 
      currentLanguage, 
      changeLanguage, 
      translate,
      t,
      isTranslating,
      translateElement
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
