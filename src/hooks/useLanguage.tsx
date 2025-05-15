import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { Language, languages, translateText } from '@/services/translationService';

interface LanguageContextType {
  currentLanguage: Language;
  changeLanguage: (lang: Language) => void;
  translate: (text: string) => Promise<string>;
  isTranslating: boolean;
  translateElement: (text: string) => React.ReactNode;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [isTranslating, setIsTranslating] = useState(false);
  const [translations, setTranslations] = useState<Record<string, Record<Language, string>>>({});

  const translate = async (text: string): Promise<string> => {
    if (currentLanguage === 'en') return text;
    
    // Check if we already have this translation
    if (translations[text]?.[currentLanguage]) {
      return translations[text][currentLanguage];
    }
    
    setIsTranslating(true);
    try {
      const translatedText = await translateText(text, currentLanguage);
      
      // Save the translation for future use
      setTranslations(prev => ({
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
      
      // Check if we already have this translation
      if (translations[text]?.[currentLanguage]) {
        setTranslated(translations[text][currentLanguage]);
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
