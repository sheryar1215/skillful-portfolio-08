
/// <reference types="vite/client" />

// Add these declarations to support environment variables
// even though we're using hardcoded values now
interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
