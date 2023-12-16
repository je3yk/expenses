"use client"

import { Provider, Session, UserMetadata } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useState } from "react";
import { useSupabaseClient } from "~/supabase/useSupabaseClient";


type AuthContextValues = {
    session?: Session;
    user?: UserMetadata;
    signIn: (provider?: Provider) => Promise<void>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValues | null>(null);


export function AuthProvider({ children }: { children: React.ReactNode }) {
    const supabase = useSupabaseClient();
    const [session, setSession] = useState<Session | undefined>();
    const [user, setUser] = useState<UserMetadata | undefined>();

    useEffect(() => {
        const fetchSession = async () => {
            const {data: userSession} = await supabase.auth.getSession()

            if (userSession.session) {
                setSession(userSession.session)
            }
        }

        void fetchSession()
    })

    useEffect(() => {
        const fetchUser = async () => {
            if (session) {
                const {data: userData} = await supabase.auth.getUser()
                setUser(userData.user?.user_metadata)
            }
        }

        void fetchUser()
    }, [session])

    async function signIn(provider: Provider = "github") {
        const {data, error} = await supabase.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo: 'http://localhost:3000/auth/callback'
            }
        });

        if (error) {
            throw new Error('Error signing in')
        }

        const {data: userSession, error: sessionError} = await supabase.auth.getSession()

        if (userSession.session) {
            setSession(userSession.session)
        }
    }

    async function signOut() {
        const {error} = await supabase.auth.signOut();

        if (error) {
            throw new Error('Error signing out')
        }
    }

    return (
        <AuthContext.Provider value={{session, user, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context;
}