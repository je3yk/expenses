"use client";

import { trpc } from "~/trpc/client";

export const Users = () => {
  const { data, isLoading } = trpc.users.getUsers.useQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>{JSON.stringify(data)}</ul>
    </div>
  );
};
