import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "../components/Navbar";
import { MenuMobile } from "../components/MenuMobile";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Developer",
  description: "Soy un desarrollador frontend con base en Argentina. Tengo una pasión seria por los efectos de UI, las animaciones y la creación de experiencias de usuario intuitivas y dinámicas. Hagamos algo especial juntos.",
  keywords: "frontend, developer, javascript, typescript, react, nextjs, css, html, ux, ui, design, web, mobile, app, website, portfolio, freelance, remote, argentina, spanish, english",
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
