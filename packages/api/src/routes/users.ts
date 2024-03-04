import { getUser, upsertUser } from "@expenses/db";
import { TRPCClientError } from "@trpc/client";
import { z } from "zod";

import { protectedProcedure, router } from "../trpc";

export const usersRouter = router({
  getUser: protectedProcedure.query(async ({ ctx }) => {
    const clerkId = ctx.auth.userId;
    return getUser(clerkId);
  }),

  updateUser: protectedProcedure
    .input(
      z
        .object({
          firstName: z.string().optional(),
          lastName: z.string().optional(),
          email: z.string().email(),
          avatarUrl: z.string().url().optional(),
          username: z.string().optional(),
        })
        .optional(),
    )
    .mutation(async ({ ctx, input, ...opts }) => {
      const clerkId = ctx.auth.userId;
      if (!input) {
        console.log("Update failed: no-input", input);
        throw new TRPCClientError("INVALID_INPUT");
      }
      return upsertUser(clerkId, input);
    }),
});
