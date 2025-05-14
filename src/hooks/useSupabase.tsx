
import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

// Check if environment variables are available and provide a fallback for development
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a Supabase client with proper error handling
const createSupabaseClient = () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Supabase credentials are missing. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables.');
    // Return a mock client during development to prevent the app from crashing
    return {
      auth: {
        getSession: () => Promise.resolve({ data: { session: null } }),
        onAuthStateChange: () => ({ 
          data: { subscription: { unsubscribe: () => {} } }
        })
      },
      from: () => ({
        insert: () => ({ error: new Error('Supabase is not configured') }),
        select: () => ({ 
          order: () => Promise.resolve({ data: [], error: new Error('Supabase is not configured') })
        })
      })
    };
  }
  
  return createClient(supabaseUrl, supabaseAnonKey);
};

const supabase = createSupabaseClient();

export const useSupabaseClient = () => {
  return supabase;
};

export const useSupabaseSession = () => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for an active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  return { session, loading };
};

