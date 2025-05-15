
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

export async function translateText(text: string, targetLanguage: Language): Promise<string> {
  try {
    const { data, error } = await supabase.functions.invoke('translate', {
      body: { text, targetLanguage },
    });

    if (error) throw new Error(error.message);
    return data.translatedText;
  } catch (error) {
    console.error('Translation error:', error);
    return text; // Fallback to original text if translation fails
  }
}
