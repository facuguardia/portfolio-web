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
      className={`lg:hidden fixed bg-black bg-opacity-70  z-50 transition-all duration-500 ${
        menu ? "top-0" : "top-full"
      }`}
    >
      <nav className="h-screen w-screen flex flex-col justify-center items-center">
        {/* Items 1 */}
        <Link
          href="/"
          className="w-[70%] h-auto flex justify-start border-b-[1px] border-gray-300 px-4 py-3 text-white hover:text-gray-500"
          onClick={closeMenu}
        >
          <span className="text-2xl font-medium flex items-center gap-3">
            About Me
          </span>
        </Link>
        {/* Items 2 */}
        <Link
          href="/about"
          className="w-[70%] h-auto flex justify-start border-b-[1px] border-gray-300 px-4 py-3 text-white hover:text-gray-500"
          onClick={closeMenu}
        >
          <span className="text-2xl font-medium flex items-center gap-3">
            Skills
          </span>
        </Link>
        {/* Items 3 */}
        <Link
          href="/resume"
          className="w-[70%] h-auto flex justify-start border-b-[1px] border-gray-300 px-4 py-3 text-white hover:text-gray-500"
          onClick={closeMenu}
        >
          <span className="text-2xl font-medium flex items-center gap-3">
            Project
          </span>
        </Link>
        {/* Items 4 */}
        <Link
          href="/projects"
          className="w-[70%] h-auto flex justify-start border-b-[1px] border-gray-300 px-4 py-3 text-white hover:text-gray-500"
          onClick={closeMenu}
        >
          <span className="text-2xl font-medium flex items-center gap-3">
            Contact Me
          </span>
        </Link>
      </nav>
      {/* Button Mobile */}
      <button
        onClick={() => setMenu(!menu)}
        className="lg:hidden fixed right-4 top-4 text-xl p-2.5 rounded-full"
      >
        {menu ? <RiCloseFill size={30} /> : <RiMenuFill size={30} />}
      </button>
    </div>
  );
};
