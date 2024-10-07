import { eq } from "drizzle-orm";

import db from "../db";
import { UsersTable } from "../schema";
import { UpsertUser, User } from "../types/users";

const getUsers = async () => {
  return db.select().from(UsersTable);
};

const getUser = async (clerkId: User["clerkId"]): Promise<User | null> => {
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

const upsertUser = async (clerkId: User["clerkId"], input: UpsertUser) => {
  return db
    .insert(UsersTable)
    .values({ ...input, clerkId })
    .onConflictDoUpdate({
      target: [UsersTable.clerkId],
      set: { ...input, updatedAt: new Date() },
    });
};

const deleteUser = async (clerkId: User["clerkId"]) => {
  return db.delete(UsersTable).where(eq(UsersTable.clerkId, clerkId));
};

export const users = {
  getUsers,
  getUser,
  upsertUser,
  deleteUser,
};
