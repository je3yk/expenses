import { getUsers } from "@expenses/db";

import { protectedProcedure, publicProcdeure, router } from "../trpc";

export const usersRouter = router({
  getUser: protectedProcedure.query(({ ctx }) => {
    return {
      user: {
        userId: ctx.auth.userId,
        id: "test",
      },
    };
  }),
});
