import {
  date,
  numeric,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const TransactionsTable = pgTable("transactions", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  userId: uuid("user_id").notNull(),
  amount: numeric("amount", { precision: 10, scale: 4 }).notNull(),
  currency: text("currency").notNull(),
  description: text("description").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "date" })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "date" })
    .defaultNow()
    .notNull(),
  type: text("type", { enum: ["income", "outcome", "saving"] }).notNull(),
  paidAt: date("paid_at", { mode: "date" }),
});
