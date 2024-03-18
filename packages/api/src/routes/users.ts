import { deleteUser, getUser, upsertUser } from "@expenses/db";
import { TRPCClientError } from "@trpc/client";
import { z } from "zod";

import { protectedProcedure, router } from "../trpc";

const upsertUserSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().email(),
  avatarUrl: z.string().url().optional(),
  username: z.string().optional(),
});

export const usersRouter = router({
  getMe: protectedProcedure.query(async ({ ctx }) => {
    const clerkId = ctx.auth.userId;
    return getUser(clerkId);
  }),

  updateUser: protectedProcedure
    .input(upsertUserSchema)
    .mutation(async ({ ctx, input, ...opts }) => {
      const clerkId = ctx.auth.userId;
      if (!input) {
        throw new TRPCClientError("NO_DATA");
      }
      return upsertUser(clerkId, input);
    }),

  deleteAccount: protectedProcedure.mutation(async ({ ctx }) => {
    const clerkId = ctx.auth.userId;
    return deleteUser(clerkId);
  }),
});
