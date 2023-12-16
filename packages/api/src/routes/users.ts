import { getUsers } from "@expenses/db";

import { publicProcdeure, router } from "../trpc";

export const usersRouter = router({
  getUsers: publicProcdeure.query(async () => {
    return getUsers();
  }),
});
