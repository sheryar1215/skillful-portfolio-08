
import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

// Use consistent values with translationService
const supabaseUrl = "https://gcsjfgggbjndnoitaovm.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdjc2pmZ2dnYmpuZG5vaXRhb3ZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxOTY0NTUsImV4cCI6MjA2Mjc3MjQ1NX0.o4PyV6ou7WddpPA-U37nBcyhQHPawj-dAz--Syn7YOM";

// Create a Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
