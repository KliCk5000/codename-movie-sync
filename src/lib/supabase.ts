import { createClient } from '@supabase/supabase-js';

// Get the environmental variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Throw an error if either variable is missing
if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    'Missing Supabase environment variables. Check NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your environmental variables.',
  );
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
