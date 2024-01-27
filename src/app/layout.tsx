import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "../components/Navbar";
import { MenuMobile } from "../components/MenuMobile";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fullstack Developer",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <MenuMobile />
        {children}
        <Footer />
      </body>
    </html>
  );
}
