import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";

import { AppRouter } from "./src/root";

export { appRouter, createCaller, type AppRouter } from "./src/root";

export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;
