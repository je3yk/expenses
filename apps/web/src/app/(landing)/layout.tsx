import React from "react";

import Header from "./_components/header";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <Header />
      <main className="h-full">{children}</main>
    </div>
  );
}
