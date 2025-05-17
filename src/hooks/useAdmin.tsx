
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useSupabaseSession } from './useSupabase';

export function useAdmin() {
  const { session, loading: sessionLoading } = useSupabaseSession();
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!session?.user) {
        setIsAdmin(false);
        setLoading(false);
        return;
      }

      try {
        // Check if the current user is in the admin_users table
        const { data, error } = await supabase
          .from('admin_users')
          .select('*')
          .eq('email', session.user.email)
          .single();

        if (error) {
          throw error;
        }

        setIsAdmin(!!data);
      } catch (err: any) {
        console.error('Error checking admin status:', err);
        setError(err.message);
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    };

    // Only check admin status when session is loaded
    if (!sessionLoading) {
      checkAdminStatus();
    }
  }, [session, sessionLoading]);

  return { isAdmin, loading: loading || sessionLoading, error };
}
