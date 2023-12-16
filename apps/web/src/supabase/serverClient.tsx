import { env } from "@expenses/env";
import { CookieMethods, createServerClient } from "@supabase/ssr";
import { cookies } from 'next/headers';

export default function serverClient(customCookies?: CookieMethods) {
    const cookieStore = cookies()

    return createServerClient(
        env.NEXT_PUBLIC_SUPABASE_URL,
        env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
            cookies: {
                get(name: string) {
                    return cookieStore.get(name)?.value
                },
                ...customCookies
            }
        }
    )
}