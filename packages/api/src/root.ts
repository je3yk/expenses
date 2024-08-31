import { createCallerFactory } from "@trpc/server";

import { expensesRouter } from "./routes/expenses";
import { usersRouter } from "./routes/users";
import { router } from "./trpc";

export const appRouter = router({
  users: usersRouter,
  expenses: expensesRouter,
});

export const createCaller = createCallerFactory();

export type AppRouter = typeof appRouter;
