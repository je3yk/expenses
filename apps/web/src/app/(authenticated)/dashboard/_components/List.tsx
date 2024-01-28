"use client";

import { trpc } from "~/trpc/client";

const UsersList = () => {
  const getUsers = trpc.users.getUsers.useQuery();
  return <>{JSON.stringify(getUsers.data)}</>;
};

export default UsersList;
