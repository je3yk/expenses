import { env } from "@expenses/env";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectionString = env.DATABASE_URL;
const client = postgres(connectionString);
const db = drizzle(client);

export default db;
