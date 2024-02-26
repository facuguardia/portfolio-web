import React from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "../assets/logo.png";
import SocialButtons from "./SocialButtons";
import { RiGithubFill, RiLinkedinFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <footer className="bg-white w-full items-center">
      <div className="max-w-screen-xl lg:flex flex-wrap items-center justify-between mx-auto px-2 py-2 lg:py-5">
        <Link href="#hero" className="flex items-center justify-center">
          <Image src={Logo} alt="Logo" width={25} height={25} />
        </Link>

        <div>
          <ul className="flex justify-center items-center gap-2 mt-2 lg:mt-0">
            <li>
              <Link
                href="https://www.linkedin.com/in/facu-guardia/"
                target="_blank"
              >
                <SocialButtons icon={RiLinkedinFill} size={20} />
              </Link>
            </li>

            <li>
              <Link href="https://github.com/facuguardia" target="_blank">
                <SocialButtons icon={RiGithubFill} size={20} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
