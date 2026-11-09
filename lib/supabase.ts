import { createClient, SupabaseClient } from "@supabase/supabase-js";

let clientInstance: SupabaseClient | null = null;
let serviceClientInstance: SupabaseClient | null = null;

/**
 * Returns the Supabase client safely with lazy initialization.
 * Avoids crashing Next.js static builds if environment variables are not yet populated.
 */
export function getSupabase(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) return null;

  if (!clientInstance) {
    clientInstance = createClient(url, key);
  }
  return clientInstance;
}

/**
 * Server-side service client for inserting inquiries securely
 */
export function getServiceSupabase(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) return null;

  if (!serviceClientInstance) {
    serviceClientInstance = createClient(url, key);
  }
  return serviceClientInstance;
}
