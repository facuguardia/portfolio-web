import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "../components/Navbar";
import { MenuMobile } from "../components/MenuMobile";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FacuTech",
  description:
    "Soy desarrollador web & mobile, te hago tu sitio web o app a medida, con diseño y experiencia de usuario incluida. Trabajo freelance y remoto, hablo español e inglés.",
  keywords:
    "desarrollador web, desarrollador mobile, freelance, remoto, diseño web, diseño mobile, experiencia de usuario, español, inglés, sitio web, app, a medida, diseño, desarrollo, web, mobile, freelance, remoto, español, inglés",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="{inter.className}, w-screen">
        <Navbar />
        <MenuMobile />
        {children}
        <Footer />
      </body>
    </html>
  );
}
