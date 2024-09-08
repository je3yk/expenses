import { relations } from "drizzle-orm";

import { ExpensesTable } from "./expenses";
import { UsersTable } from "./users";

export const expensesRelations = relations(ExpensesTable, ({ one }) => ({
  userId: one(UsersTable, {
    fields: [ExpensesTable.userId],
    references: [UsersTable.id],
  }),
}));

export const usersRelations = relations(UsersTable, ({ many }) => ({
  expenses: many(ExpensesTable),
}));
