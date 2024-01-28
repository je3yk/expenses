import { createCallerFactory } from "@trpc/server";
import { usersRouter } from "./routes/users";
import { router } from "./trpc";

export const appRouter = router({
  users: usersRouter,
});

export const createCaller = createCallerFactory();

export type AppRouter = typeof appRouter;
