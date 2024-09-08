import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const UsersTable = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  clerkId: varchar("clerk_id", { length: 256 }).notNull().unique(),
  avatarUrl: text("avatar_url"),
  firstName: text("first_name"),
  lastName: text("last_name"),
  email: text("email").unique(),
  username: text("username"),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "date" })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", {
    withTimezone: true,
    mode: "date",
  }).defaultNow(),
});
