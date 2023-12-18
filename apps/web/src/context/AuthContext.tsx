"use client"

import { Provider, UserMetadata } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useState } from "react";
import useSessionToken from "~/hooks/useSessionToken";
import { useSupabaseClient } from "~/supabase/useSupabaseClient";


type AuthContextValues = {
    user?: UserMetadata;
    hasSession?: boolean;
    signIn: (provider?: Provider) => Promise<void>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValues | null>(null);


export function AuthProvider({ children }: { children: React.ReactNode }) {
    const supabase = useSupabaseClient();
    const [user, setUser] = useState<UserMetadata | undefined>();
    const {session, hasSession, fetchingSession} = useSessionToken();

    useEffect(() => {
        const fetchUser = async () => {
            console.log('fetching user');
            const {data: userData} = await supabase.auth.getUser();
            setUser(userData.user?.user_metadata);
        }

        if (hasSession) {
            void fetchUser();
        }
    }, [session, hasSession]);

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
    }

    async function signOut() {
        const {error} = await supabase.auth.signOut();

        if (error) {
            throw new Error('Error signing out')
        }
    }

    if (!!fetchingSession) {
        return null
    }

    return (
        <AuthContext.Provider value={{hasSession, user, signIn, signOut}}>
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