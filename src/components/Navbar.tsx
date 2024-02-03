import React from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "../assets/logo.png";
import { Buttons } from "../components/Buttons";

export const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-white">
      <div className="items-center hidden py-4 lg:flex justify-evenly">
        <div>
          <Link href="#hero">
            <Image src={Logo} alt="Logo" width={200} height={50} />
          </Link>
        </div>
        <nav>
          <ul className="flex items-center justify-center gap-5 font-medium">
            <Link href="#about">
              <li className="hover:underline decoration-black decoration-2">
                About Me
              </li>
            </Link>
            <Link href="#skills">
              <li className="hover:underline decoration-black decoration-2">Skills</li>
            </Link>
            <Link href="#projects">
              <li className="hover:underline decoration-black decoration-2">Projects</li>
            </Link>
            <Link href="#experience">
              <li className="hover:underline decoration-black decoration-2">Experience</li>
            </Link>
          </ul>
        </nav>
        <div className="px-3 py-2 font-medium text-white bg-black rounded-sm">
          <Link
            href="https://1drv.ms/b/s!Aqsi3vU5uRP4nIR--g6j2vOvQBAH_Q?e=E29Wiz"
            target="_blank"
          >
            <Buttons title={"Resumen"} styles={"flex items-center gap-2"} />
          </Link>
        </div>
      </div>
    </div>
  );
};
