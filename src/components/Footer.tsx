import React from "react";
import Link from "next/link";

import SocialButtons from "./SocialButtons";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";

export const Footer = () => {
  return (
    <footer className="w-full px-5 text-white bg-black">
      <div className="container mx-auto px-5 py-8 flex flex-col lg:flex-row justify-center items-center gap-5 lg:justify-between">
        <div>
          <Link href="/">
            <span className="text-lg lg:text-2xl font-bold font-sans outline-double px-2">
              FACUTECH
            </span>
          </Link>
        </div>

        <div className="font-medium flex flex-col lg:flex-row justify-center items-center gap-5 ">
          <div className="text-xs lg:text-lg text-center lg:text-right items-center">
            <p className="text-sm text-center text-gray-600 md:text-left">
              © Copyright 2024. Todos los derechos reservados.
            </p>
          </div>

          <div className="flex justify-center items-center gap-3">
            <Link
              href="https://www.linkedin.com/in/facu-guardia/"
              target="_blank"
            >
              <SocialButtons icon={BiLogoLinkedin} size={20} />
            </Link>
            <Link href="https://github.com/facuguardia" target="_blank">
              <SocialButtons icon={BiLogoGithub} size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
