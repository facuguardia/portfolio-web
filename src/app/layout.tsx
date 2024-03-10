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
    "Soy un desarrollador web y móvil freelance. Puedo crear sitios web y aplicaciones a medida con un enfoque en diseño y experiencia de usuario.",
  keywords:
    "desarrollador web, desarrollador móvil, freelance, diseño web, diseño móvil, experiencia de usuario, español, inglés, sitio web, aplicación, a medida, diseño, desarrollo, web, móvil, freelance, español, inglés",
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
