import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/logo.png";
import { ButtonMobile } from "../components/ButtonMobile";

export const MenuMobile = () => {
  return (
    <div className="lg:hidden flex justify-between items-center py-4 px-3 fixed top-0 left-0 right-0 bg-white">
      <div className="mt-3 lg:mt-0">
        <Link href="#hero">
          <Image src={Logo} alt="Logo" width={200} height={50} />
        </Link>
      </div>
      <div className="w-60 md:w-80">
        <ButtonMobile />
      </div>
    </div>
  );
};
