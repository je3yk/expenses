import "~/styles/globals.css";

import { GeistSans } from "geist/font";
import type { Metadata } from "next";

import { AuthProvider } from "~/context/AuthContext";
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <TrpcProvider>{children}</TrpcProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
