import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase env vars are missing. Check .env (REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_ANON_KEY).');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
