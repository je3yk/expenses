import { eq, InferInsertModel, InferSelectModel } from "drizzle-orm";

import db from "./db";
import { users } from "./schema";

type UserSelect = InferSelectModel<typeof users>;
type UserInsert = InferInsertModel<typeof users>;

export type UserInsertInput = Omit<
  UserInsert,
  "clerkId" | "createdAt" | "updatedAt" | "id"
>;

export const getUsers = async () => {
  return db.select().from(users);
};

export const getUser = async (
  clerkId: UserSelect["clerkId"],
): Promise<UserSelect | null> => {
  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.clerkId, clerkId))
    .limit(1);

  if (!user) {
    return null;
  }

  return user;
};

export const upsertUser = async (
  clerkId: UserSelect["clerkId"],
  input: UserInsertInput,
) => {
  return db
    .insert(users)
    .values({ ...input, clerkId })
    .onConflictDoUpdate({
      target: [users.clerkId],
      set: { ...input, updatedAt: new Date().toISOString() },
    });
};

export const deleteUser = async (clerkId: UserSelect["clerkId"]) => {
  return db.delete(users).where(eq(users.clerkId, clerkId));
};
