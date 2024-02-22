import React from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "../assets/logo.png";

export const Footer = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-around h-20 py-5 lg:py-0 gap-2">
      <div>
        <Link href="#hero">
          <Image src={Logo} alt="logo" width={180} height={100} />
        </Link>
      </div>
      <div className="text-right lg:w-[60%] ">
        <h3 className="text-sm font-light">
          &copy; 2024, All rights reserved.
        </h3>
      </div>
    </div>
  );
};
