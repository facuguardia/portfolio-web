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

// <footer className="text-gray-400 bg-gray-900 body-font">
// <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
//   <HashLink to="#header" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
//     <img
//       src="/images/logo.png"
//       className="w-12 h-12"
//       alt=""
//     />
//     <span className="ml-3 text-xl">H2O Deportiva</span>
//   </HashLink>
//   <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
//     © 2023 Facu Guardia -
//     <Link
//       to="https://facu-dev.vercel.app/"
//       className="text-gray-500 hover:text-gray-400 transition-all ml-1"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       www.facu-dev.vercel.app
//     </Link>
//   </p>
//   <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
//     <Link to="https://www.instagram.com/h2o.deportiva/" target="_blank" className="text-gray-400 hover:text-gray-300 transition-all">
//       {/* instagram */}
//       <SiInstagram />
//     </Link>
//     <Link to="" target="_blank" className="ml-3 text-gray-400 hover:text-gray-300 transition-all">
//       {/* facebook */}
//       <SiFacebook />
//     </Link>
//   </span>
// </div>
// </footer>
  );
};
