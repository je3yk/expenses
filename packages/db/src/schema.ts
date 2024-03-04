import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  clerkId: varchar("clerk_id", { length: 256 }).notNull().unique(),
  avatarUrl: text("avatar_url"),
  firstName: text("first_name"),
  lastName: text("last_name"),
  email: text("email").unique(),
  username: text("username"),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at").defaultNow(),
});
