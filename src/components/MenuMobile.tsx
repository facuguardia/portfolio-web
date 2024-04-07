import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ButtonMobile } from "../components/ButtonMobile";

export const MenuMobile = () => {
  return (
    <div className="content mx-auto fixed top-0 left-0 right-0 flex items-center justify-between px-3 py-4 bg-white lg:hidden">
      <div className="ml-3">
        <Link href="#hero">
        <span className="text-lg font-bold font-sans outline-double px-2">
            FACUTECH
          </span>
        </Link>
      </div>
      <div className="w-[250px] md:w-[350px]">
        <ButtonMobile />
      </div>
    </div>
  );
};
