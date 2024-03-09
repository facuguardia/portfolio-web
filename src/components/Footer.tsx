import React from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "../assets/logo.png";

export const Footer = () => {
  return (
    <footer className="w-full mx-auto px-5 text-white bg-black">
      <div className="container px-5 py-8 mx-auto flex justify-center gap-2 lg:justify-end items-center">
        <Image src={Logo} alt="Logo" width={50} height={50} />
        <div className="font-medium">
          <Link href="/">
            <div className="text-xs lg:text-lg text-center lg:text-right">
              © 2024 FacuTech.com{" "}
              <p className="text-xs text-gray-600">
                Todo los derechos reservados
              </p>{" "}
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};
