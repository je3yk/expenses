import db from "./db";
import { users } from "./schema";

export const getUsers = async () => {
  return db.select().from(users);
};
