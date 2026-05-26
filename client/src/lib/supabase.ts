import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
);

export interface JournalEntry {
  id: string;
  entry_date: string;
  location: string;
  text: string;
  image_url: string | null;
  created_at: string;
}
