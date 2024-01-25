import React from "react";
import Image from "next/image";
import Logo from "../assets/logo.png";
import { ButtonMobile } from "../components/ButtonMobile";

export const MenuMobile = () => {
  return (
    <div className="lg:hidden flex justify-between items-center py-4 px-3">
      <div className="mt-3 lg:mt-0">
        <Image src={Logo} alt="Logo" width={200} height={50} />
      </div>
      <div className="w-60 md:w-80">
        <ButtonMobile />
      </div>
    </div>
  );
};
