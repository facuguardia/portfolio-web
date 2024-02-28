import React from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "../assets/logo.png";
import SocialButtons from "./SocialButtons";
import { RiGithubFill, RiLinkedinFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <footer className="text-gray-400 bg-white body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <div className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <Link href="#hero" className="flex items-center justify-center">
            <Image src={Logo} alt="Logo" width={25} height={25} />
          </Link>
        </div>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          © 2024 Facu Guardia
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-2">
          <Link
            href="https://www.linkedin.com/in/facu-guardia/"
            target="_blank"
            className="text-black hover:text-gray-500 transition-all duration-300 ease-in-out"
          >
            <SocialButtons icon={RiLinkedinFill} size={30} />
          </Link>
          <Link
            href="https://github.com/facuguardia"
            target="_blank"
            className="text-black hover:text-gray-500 transition-all duration-300 ease-in-out"
          >
            <SocialButtons icon={RiGithubFill} size={30} />
          </Link>
        </span>
      </div>
    </footer>
  );
};
