import { CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import serverClient from "~/supabase/serverClient";

export async function GET(request: Request) {
    const {searchParams, origin} = new URL(request.url);
    const code = searchParams.get('code');
    
    const next = searchParams.get('next') ?? '/';

    if (code) {
        const cookieStore = cookies();

        const supabase = serverClient({
            set(name: string, value: string, options: CookieOptions) {
               cookieStore.set(name, value, options); 
            },
            remove(name: string, options: CookieOptions) {
                cookieStore.delete({name, ...options});
            }
        })

        const { error } = await supabase.auth.exchangeCodeForSession(code)
        if (!error) {
            return NextResponse.redirect(`${origin}${next}`)
        }
    }

    return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}