"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "../assets/logo-facutech.png";

export const Navbar = () => {
  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b-2 border-black">
      <div className="max-w-screen-xl hidden lg:flex justify-between items-center mx-auto p-4">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image src={Logo} alt="logo facutech" height={150} width={150} />
          </Link>
        </div>

        {/* Navbar */}
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-gray-900 md:p-0 hover:underline transition-all duration-500 decoration-black decoration-2"
                aria-current="page"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="block py-2 px-3 text-gray-900 md:p-0 hover:underline transition-all duration-500 decoration-black decoration-2"
                aria-current="page"
              >
                Acerca de
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="block py-2 px-3 text-gray-900 md:p-0 hover:underline transition-all duration-500 decoration-black decoration-2"
              >
                Proyectos
              </Link>
            </li>
            <li>
              <Link
                href="#experience"
                className="block py-2 px-3 text-gray-900 md:p-0 hover:underline transition-all duration-500 decoration-black decoration-2"
              >
                Experiencia
              </Link>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <Link href="#contact">
            <span className="text-white bg-black hover:bg-green-500 hover:text-black border-2 border-black font-medium rounded-lg text-sm px-9 py-3 text-center shadow-xl transition-all duration-500 ease-in-out">
              Contacto
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
