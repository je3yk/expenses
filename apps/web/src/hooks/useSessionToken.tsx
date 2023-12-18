"use client"

import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { useSupabaseClient } from "~/supabase/useSupabaseClient";

type UseSessionToken = {
    session?: Session | null;
    hasSession: boolean;
    fetchingSession: boolean;
}

export default function useSessionToken(): UseSessionToken {
    const supabase = useSupabaseClient();
    const [session, setSession] = useState<Session | null | undefined>(undefined);

    useEffect(() => {
        async function fetchSession() {
            const {data} = await supabase.auth.getSession();

            if (data.session) {
                setSession(data.session)
            } else {
                setSession(null)
            }

        }

        void fetchSession()
    }, [])

    return {
        session,
        hasSession: !!session,
        fetchingSession: session === undefined,
    }

}