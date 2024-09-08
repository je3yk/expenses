import { env } from "@expenses/env";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { ExpensesTable, UsersTable } from "./tables";

const connectionString = env.DATABASE_URL;
const client = postgres(connectionString);
const db = drizzle(client, { schema: { UsersTable, ExpensesTable } });

export default db;
