import { env } from "@expenses/env";
import type { Config } from "drizzle-kit";

console.log("env.DATABASE_URL", env.DATABASE_URL);

export default {
  schema: "./src/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
} satisfies Config;
