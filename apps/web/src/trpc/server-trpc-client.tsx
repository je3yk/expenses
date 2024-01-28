import { appRouter, createCaller } from "@expenses/api";

// todo add fetching auth from supabase-auth

export const serverTrpc = () => {
  return createCaller(appRouter)({});
};
