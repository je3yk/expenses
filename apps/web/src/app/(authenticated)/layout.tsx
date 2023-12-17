"use client";

import React from "react";

import Header from "../_components/header";

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // TODO: Add isLoading state in AuthContext
  // const { user } = useAuth();

  // if (!user) {
  //   return redirect("/");
  // }

  return (
    <div className="h-full">
      <Header />
      <main className="h-full pt-[100px] px-4">{children}</main>
    </div>
  );
}
