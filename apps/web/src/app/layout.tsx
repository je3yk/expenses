import "~/styles/globals.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { SpeedInsights } from "@vercel/speed-insights/next";

import ThemeProvider from "~/providers/theme-provider";
import TrpcProvider from "~/providers/trpc-provider";

const roboto = Roboto({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Expenses",
  description: "Your accountancy assistant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={roboto.className}>
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
        <SpeedInsights />
      </body>
    </html>
  );
}
