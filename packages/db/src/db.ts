import { env } from "@tools/env";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { TransactionsTable, UsersTable } from "./schema";

const connectionString = env.DATABASE_URL;
const client = postgres(connectionString);
const db = drizzle(client, { schema: { UsersTable, TransactionsTable } });

export default db;
