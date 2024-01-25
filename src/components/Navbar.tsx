import React from "react";
import Image from "next/image";
import Logo from "../assets/logo.png";
import {Buttons} from "../components/Buttons";


export const Navbar = () => {
  return (
    <div className="hidden lg:flex justify-evenly items-center py-4">
      <div>
        <Image src={Logo} alt="Logo" width={200} height={50} />
      </div>
      <div>
        <ul className="flex justify-center items-center gap-5 font-medium">
          <li>About Me</li>
          <li>Skills</li>
          <li>Project</li>
          <li>Contact Me</li>
        </ul>
      </div>
      <div className="bg-black text-white font-medium py-2 px-3 rounded-sm">
        <Buttons title={'Resumen'} styles={"flex items-center gap-2"} />
      </div>
    </div>
  );
};
