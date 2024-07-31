import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "../components/Navbar";
import { MenuMobile } from "../components/MenuMobile";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "www.facutech.com",
  description:
    "Me especializo en el desarrollo de soluciones web personalizadas que impulsan el éxito de tu emprendimiento. Mi enfoque se centra en crear experiencias digitales únicas - desde tiendas online hasta aplicaciones móviles innovadoras. Descubre cómo puedo llevar tu visión digital a la vida con FacuTech.",
  keywords:
    "Soluciones web personalizadas, Desarrollo de tiendas online, Servicios de desarrollo web profesional, JavaScript, React, Node.js, Desarrollo de aplicaciones móviles, Proyectos de software a medida, Asesoramiento en tecnología digital, React Native, Innovación en aplicaciones web, Transformación digital para emprendimientos",
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
