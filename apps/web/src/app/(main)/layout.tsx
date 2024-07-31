import React from "react";
import { auth } from "@clerk/nextjs";

import Header from "./components/header";

export default function HomeLayout({
  landing,
  authenticated,
}: {
  landing: React.ReactNode;
  authenticated: React.ReactNode;
}) {
  const { userId } = auth();
  return (
    <div className="w-full">
      <Header />
      {userId ? authenticated : landing}
    </div>
  );
}
