import { upsertUserSchema, users } from "@expenses/db";
import { TRPCClientError } from "@trpc/client";

import { protectedProcedure, router } from "../trpc";

export const usersRouter = router({
  getMe: protectedProcedure.query(async ({ ctx }) => {
    const clerkId = ctx.auth.userId;
    return users.getUser(clerkId);
  }),

  updateUser: protectedProcedure
    .input(upsertUserSchema)
    .mutation(async ({ ctx, input, ...opts }) => {
      const clerkId = ctx.auth.userId;
      if (!input) {
        throw new TRPCClientError("NO_DATA");
      }
      return users.upsertUser(clerkId, input);
    }),

  deleteAccount: protectedProcedure.mutation(async ({ ctx }) => {
    const clerkId = ctx.auth.userId;
    return users.deleteUser(clerkId);
  }),
});
