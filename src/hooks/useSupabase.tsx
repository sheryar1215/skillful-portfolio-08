
import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { supabase as supabaseClient } from '@/integrations/supabase/client';

// Use consistent values with translationService
const supabaseUrl = "https://gcsjfgggbjndnoitaovm.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdjc2pmZ2dnYmpuZG5vaXRhb3ZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxOTY0NTUsImV4cCI6MjA2Mjc3MjQ1NX0.o4PyV6ou7WddpPA-U37nBcyhQHPawj-dAz--Syn7YOM";

// Create a Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    storage: localStorage
  }
});

export const useSupabaseClient = () => {
  return supabaseClient;
};

export const useSupabaseSession = () => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up auth state change listener first
    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });
    
    // Then check for existing session
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  return { session, loading };
};
