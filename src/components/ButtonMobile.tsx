"use client";

import React, { useState } from "react";
import Link from "next/link";

import { RiMenuFill, RiCloseFill } from "react-icons/ri";

export const ButtonMobile = () => {
  const [menu, setMenu] = useState(false);

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div
      className={`lg:hidden fixed bg-black bg-opacity-90 z-50 transition-all duration-500 ${
        menu ? "top-0" : "top-full"
      }`}
    >
      <nav className="flex flex-col items-center justify-center w-screen h-screen">
        {/* Items 1 */}
        <Link
          href="#about"
          className="w-[70%] h-auto flex justify-start border-b-[1px] border-gray-300 px-4 py-3 text-white hover:text-gray-500"
          onClick={closeMenu}
        >
          <span className="flex items-center gap-3 text-2xl font-medium">
            About Me
          </span>
        </Link>
        {/* Items 2 */}
        <Link
          href="#skills"
          className="w-[70%] h-auto flex justify-start border-b-[1px] border-gray-300 px-4 py-3 text-white hover:text-gray-500"
          onClick={closeMenu}
        >
          <span className="flex items-center gap-3 text-2xl font-medium">
            Skills
          </span>
        </Link>
        {/* Items 3 */}
        <Link
          href="#projects"
          className="w-[70%] h-auto flex justify-start border-b-[1px] border-gray-300 px-4 py-3 text-white hover:text-gray-500"
          onClick={closeMenu}
        >
          <span className="flex items-center gap-3 text-2xl font-medium">
            Projects
          </span>
        </Link>
        {/* Items 4 */}
        <Link
          href="#experience"
          className="w-[70%] h-auto flex justify-start border-b-[1px] border-gray-300 px-4 py-3 text-white hover:text-gray-500"
          onClick={closeMenu}
        >
          <span className="flex items-center gap-3 text-2xl font-medium">
            Experience
          </span>
        </Link>
      </nav>
      {/* Button Mobile */}
      <button
        onClick={() => setMenu(!menu)}
        className="lg:hidden fixed right-3 top-1 text-xl p-3 rounded-full"
      >
        {menu ? <RiCloseFill size={30} className="text-white" /> : <RiMenuFill size={30} />}
      </button>
    </div>
  );
};
