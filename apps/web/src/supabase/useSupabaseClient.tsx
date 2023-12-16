import { env } from "@expenses/env";
import { createBrowserClient } from "@supabase/ssr";

export const useSupabaseClient = () => {
    return createBrowserClient(
        env.NEXT_PUBLIC_SUPABASE_URL,
        env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )
}