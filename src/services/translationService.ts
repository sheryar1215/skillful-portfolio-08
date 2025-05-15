
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

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
