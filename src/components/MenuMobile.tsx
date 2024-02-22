import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/logo.png";
import { ButtonMobile } from "../components/ButtonMobile";

export const MenuMobile = () => {
  return (
    <div className="content mx-auto fixed top-0 left-0 right-0 flex items-center justify-around px-3 py-4 bg-white lg:hidden">
      <div className="mt-3 lg:mt-0">
        <Link href="#hero">
          <Image src={Logo} alt="Logo" width={300} height={100} />
        </Link>
      </div>
      <div className="w-screen">
        <ButtonMobile />
      </div>
    </div>
  );
};
