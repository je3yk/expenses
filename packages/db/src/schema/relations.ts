import { relations } from "drizzle-orm";

import { TransactionsTable } from "./transactions";
import { UsersTable } from "./users";

export const transactionsTable = relations(TransactionsTable, ({ one }) => ({
  userId: one(UsersTable, {
    fields: [TransactionsTable.userId],
    references: [UsersTable.id],
  }),
}));

export const usersRelations = relations(UsersTable, ({ many }) => ({
  expenses: many(TransactionsTable),
}));
