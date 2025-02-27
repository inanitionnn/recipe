import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import QueryProvider from "../wrappers/query-provider";
import { ToastWrapper } from "../wrappers";
import { Suspense } from "react";
import LoadingPage from "./loading";

export const metadata: Metadata = {
  title: "Recipe Book",
  description: "A simple recipe book",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="bg-zinc-300">
        <QueryProvider>
          <ToastWrapper>
            <Suspense fallback={<LoadingPage />}>{children}</Suspense>
          </ToastWrapper>
        </QueryProvider>
      </body>
    </html>
  );
}
