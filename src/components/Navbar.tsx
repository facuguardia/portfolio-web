import React from "react";
import Image from "next/image";
import Logo from "../assets/logo.png";
import { RiDownload2Line } from "react-icons/ri";

export const Navbar = () => {
  return (
    <div className="flex justify-evenly items-center py-4">
      <div>
        <Image src={Logo} alt="Logo" width={200} height={50} />
      </div>
      <div>
        <ul className="flex justify-center items-center gap-5 font-medium">
          <li>About me</li>
          <li>Skills</li>
          <li>Project</li>
          <li>Contact Me</li>
        </ul>
      </div>
      <div className="bg-black text-white font-medium py-2 px-3 rounded-sm">
        <button className="flex items-center gap-2">Resumen<RiDownload2Line /></button>
      </div>
    </div>
  );
};
