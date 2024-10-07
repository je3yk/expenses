import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

import { TransactionsTable } from "../schema/transactions";

export const insertTransactionSchema = createInsertSchema(TransactionsTable);
export const selectTransactionSchema = createSelectSchema(TransactionsTable);

export type InsertTransaction = z.infer<typeof insertTransactionSchema>;
export type Transaction = z.infer<typeof selectTransactionSchema>;
