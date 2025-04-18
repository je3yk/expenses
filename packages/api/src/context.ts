import {
  getAuth,
  SignedInAuthObject,
  SignedOutAuthObject,
} from "@clerk/nextjs/server";
import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";

interface AuthContext {
  auth: SignedInAuthObject | SignedOutAuthObject;
}

export const createContextInner = async ({ auth }: AuthContext) => {
  return {
    auth,
  };
};

export const createContext = async (
  opts: trpcNext.CreateNextContextOptions,
) => {
  return createContextInner({ auth: getAuth(opts.req) });
};

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
