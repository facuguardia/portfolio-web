'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "../assets/logo.png";
import { RiDownload2Line } from "react-icons/ri";

export const Navbar = () => {

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 ">
      <div className="max-w-screen-xl hidden lg:flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image src={Logo} alt="Logo" width={30} height={30} />
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link
            href="https://1drv.ms/b/s!Aqsi3vU5uRP4nIR--g6j2vOvQBAH_Q?e=E29Wiz"
            target="_blank"
          >
            <button
              type="button"
              className="text-black bg-white hover:bg-black hover:text-white border-2 border-black font-medium rounded-lg text-sm px-4 py-2 text-center shadow-2xl transition-all duration-300 ease-in-out"
            >
              <span className="flex justify-center items-center gap-3 shadow-2xl">
                Curriculum Vitae <RiDownload2Line />
              </span>
            </button>
          </Link>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
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
                href="#skills"
                className="block py-2 px-3 text-gray-900 md:p-0 hover:underline transition-all duration-500 decoration-black decoration-2"
              >
                Habilidades
              </Link>
            </li>
            <li >
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
      </div>
    </nav>
  );
};
