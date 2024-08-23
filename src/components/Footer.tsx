import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/logo-facutech.png";

import SocialButtons from "./SocialButtons";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";

export const Footer = () => {
  return (
    <footer className="w-full px-5 text-black bg-slate-200 border border-t-2 ">
      <div className="container mx-auto px-5 py-8 flex flex-col lg:flex-row justify-center items-center gap-5 lg:justify-between">
        <div>
          <Link href="/">
            <Image src={Logo} alt="logo facutech" height={100} width={100} />
          </Link>
        </div>

        <div className="font-medium flex flex-col lg:flex-row justify-center items-center gap-2 ">
          <div className="text-xs lg:text-lg text-center lg:text-right items-center">
            <p className="text-sm text-center text-gray-400 md:text-left">
              © FacuTech 2023. Todos los derechos reservados.
            </p>
          </div>

          <div className="flex md:flex-col items-center ml-5 gap-2">
            <Link
              href="https://www.linkedin.com/in/facu-guardia/"
              target="_blank"
            >
              <SocialButtons icon={BiLogoLinkedin} size={30} />
            </Link>
            <Link href="https://github.com/facuguardia" target="_blank">
              <SocialButtons icon={BiLogoGithub} size={30} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
