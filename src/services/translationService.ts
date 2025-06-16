import { createClient } from '@supabase/supabase-js';

// Use the direct URL and key from Supabase integration
const supabaseUrl = "https://gcsjfgggbjndnoitaovm.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdjc2pmZ2dnYmpuZG5vaXRhb3ZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxOTY0NTUsImV4cCI6MjA2Mjc3MjQ1NX0.o4PyV6ou7WddpPA-U37nBcyhQHPawj-dAz--Syn7YOM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Language = 'en' | 'fr' | 'de' | 'ps' | 'es';

export const languages = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'ps', name: 'Pashto' },
  { code: 'es', name: 'Spanish' },
];

// Import all translation files
import en from '@/locales/en.json';
import fr from '@/locales/fr.json';
import de from '@/locales/de.json';
import ps from '@/locales/ps.json';
import es from '@/locales/es.json';

// Translation dictionary
const translations = {
  en,
  fr,
  de,
  ps,
  es
} as const;

// Helper function to get nested translation by key path
function getNestedTranslation(obj: any, path: string): string {
  return path.split('.').reduce((current, key) => current?.[key], obj) || path;
}

export async function translateText(text: string, targetLanguage: Language): Promise<string> {
  try {
    // If target language is English, return the text as-is
    if (targetLanguage === 'en') {
      return text;
    }

    // Get the translation dictionary for the target language
    const targetTranslations = translations[targetLanguage];
    
    if (!targetTranslations) {
      console.warn(`No translations found for language: ${targetLanguage}`);
      return text;
    }

    // Try to find the translation using the text as a key path
    const translation = getNestedTranslation(targetTranslations, text);
    
    // If no direct translation found, try to find by searching through all translations
    if (translation === text) {
      // Search through English translations to find the key for this text
      const englishTranslations = translations.en;
      const findKey = (obj: any, searchText: string, currentPath = ''): string | null => {
        for (const [key, value] of Object.entries(obj)) {
          const newPath = currentPath ? `${currentPath}.${key}` : key;
          if (typeof value === 'string' && value.toLowerCase() === searchText.toLowerCase()) {
            return newPath;
          } else if (typeof value === 'object' && value !== null) {
            const result = findKey(value, searchText, newPath);
            if (result) return result;
          }
        }
        return null;
      };

      const translationKey = findKey(englishTranslations, text);
      if (translationKey) {
        const foundTranslation = getNestedTranslation(targetTranslations, translationKey);
        if (foundTranslation !== translationKey) {
          return foundTranslation;
        }
      }
    }

    return translation;
  } catch (error) {
    console.error('Translation error:', error);
    return text; // Fallback to original text if translation fails
  }
}
