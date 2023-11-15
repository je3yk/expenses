import "~/styles/globals.css";

import type { Metadata } from "next";
import { GeistSans } from "geist/font";

import ThemeProvider from "~/providers/theme-provider";

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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
