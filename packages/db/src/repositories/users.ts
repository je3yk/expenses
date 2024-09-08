import { eq, InferInsertModel, InferSelectModel } from "drizzle-orm";

import db from "../db";
import { UsersTable } from "../tables";

type UserSelect = InferSelectModel<typeof UsersTable>;
type UserInsert = InferInsertModel<typeof UsersTable>;

export type UserInsertInput = Omit<
  UserInsert,
  "clerkId" | "createdAt" | "updatedAt" | "id"
>;

export const getUsers = async () => {
  return db.select().from(UsersTable);
};

export const getUser = async (
  clerkId: UserSelect["clerkId"],
): Promise<UserSelect | null> => {
  const [user] = await db
    .select()
    .from(UsersTable)
    .where(eq(UsersTable.clerkId, clerkId))
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
    .insert(UsersTable)
    .values({ ...input, clerkId })
    .onConflictDoUpdate({
      target: [UsersTable.clerkId],
      set: { ...input, updatedAt: new Date().toISOString() },
    });
};

export const deleteUser = async (clerkId: UserSelect["clerkId"]) => {
  return db.delete(UsersTable).where(eq(UsersTable.clerkId, clerkId));
};
