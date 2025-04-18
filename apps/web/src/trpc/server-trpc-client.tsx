import { auth } from "@clerk/nextjs";
import { appRouter, createCaller } from "@packages/api";

// todo add fetching auth from supabase-auth

export const serverTrpc = () => {
  const authSession = auth();

  return createCaller(appRouter)({
    auth: authSession,
  });
};
