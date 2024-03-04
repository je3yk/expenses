import { env } from "@expenses/env";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { users } from "./schema";

const connectionString = env.DATABASE_URL;
const client = postgres(connectionString);
const db = drizzle(client, {schema: { users}});

export default db;