import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

import { UsersTable } from "../schema";

export const insertUserSchema = createInsertSchema(UsersTable);
export const selectUserSchema = createSelectSchema(UsersTable);

export const upsertUserSchema = insertUserSchema.omit({ clerkId: true });

export type InsertUser = z.infer<typeof insertUserSchema>;
export type UpsertUser = z.infer<typeof upsertUserSchema>;
export type User = z.infer<typeof selectUserSchema>;
