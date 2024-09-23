import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import "./globals.css";
import { store } from "@/store";
import ApplicationProvider from "@/provider/Application";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BD SEND",
  description: "DB Send - Online money transaction platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true} className={inter.className}>
        <ApplicationProvider>{children}</ApplicationProvider>
      </body>
    </html>
  );
}
