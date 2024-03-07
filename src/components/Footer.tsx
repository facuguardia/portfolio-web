import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full mx-auto px-5 text-white bg-black">
      <div className="container px-5 py-8 mx-auto flex justify-center lg:justify-end items-center">
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
