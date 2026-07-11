import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

/**
 * True only when both Supabase env vars are configured. Journal features that
 * hit the database should degrade gracefully (empty/disabled) when this is false.
 */
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

if (!isSupabaseConfigured) {
  console.warn(
    "[supabase] VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY not set — journal features disabled until configured.",
  );
}

// Fall back to a valid placeholder so createClient never throws at module load
// (an unset URL would throw "supabaseUrl is required" and blank the whole app).
export const supabase = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseAnonKey || "placeholder-key",
);

export interface JournalEntry {
  id: string;
  entry_date: string;
  location: string;
  text: string;
  image_url: string | null;
  created_at: string;
}
