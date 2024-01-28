import "~/styles/globals.css";

import { GeistSans } from "geist/font";
import type { Metadata } from "next";

import { ClerkProvider } from "@clerk/nextjs";
import ThemeProvider from "~/providers/theme-provider";
import TrpcProvider from "~/providers/trpc-provider";

export const metadata: Metadata = {
  title: "Expenses",
  description: "Control your monthly expenses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <ClerkProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TrpcProvider>{children}</TrpcProvider>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
