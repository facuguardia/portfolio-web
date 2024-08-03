'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "../assets/logo-facutech.png";
import { ButtonMobile } from "../components/ButtonMobile";

export const MenuMobile = () => {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`content mx-auto fixed top-0 left-0 right-0 flex justify-between px-3 py-4 bg-white lg:hidden border-b-2 z-10 transition-shadow duration-300 ${shadow ? 'shadow-md' : ''}`}>
      <div className="ml-3">
        <Link href="#hero">
          <Image src={Logo} alt="logo facutech" height={100} width={100} />
        </Link>
      </div>
      <div className="w-[250px] md:w-[350px]">
        <ButtonMobile />
      </div>
    </div>
  );
};
