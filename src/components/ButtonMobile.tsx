"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";

export const ButtonMobile = () => {
  const [menu, setMenu] = useState(false);

  const closeMenu = () => {
    setMenu(false);
  };

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menu]);

  return (
    <div>
      {/* Button Mobile */}
      <button
        onClick={() => setMenu(!menu)}
        className="lg:hidden fixed right-3 top-3 text-xl p-3 rounded-full z-50"
      >
        {menu ? (
          <RiCloseFill size={30} className="text-white" />
        ) : (
          <RiMenuFill size={30} />
        )}
      </button>

      <div
        className={`lg:hidden fixed bg-black bg-opacity-90 z-40 transition-all duration-500 ${
          menu ? "top-0" : "top-full"
        }`}
      >
        {/* Menu Mobile */}
        <nav className="flex flex-col items-center justify-center w-screen h-screen">
          {/* item 1 */}
          <Link
            href="/"
            className="w-[70%] h-auto flex justify-start border-b-[1px] border-gray-300 px-4 py-3 text-white hover:text-gray-500"
            onClick={closeMenu}
          >
            <span className="flex items-center gap-3 text-2xl font-medium">
              Inicio
            </span>
          </Link>
          {/* item 2 */}
          <Link
            href="#about"
            className="w-[70%] h-auto flex justify-start border-b-[1px] border-gray-300 px-4 py-3 text-white hover:text-gray-500"
            onClick={closeMenu}
          >
            <span className="flex items-center gap-3 text-2xl font-medium">
              Acerca de
            </span>
          </Link>
          {/* item 3 */}
          <Link
            href="#projects"
            className="w-[70%] h-auto flex justify-start border-b-[1px] border-gray-300 px-4 py-3 text-white hover:text-gray-500"
            onClick={closeMenu}
          >
            <span className="flex items-center gap-3 text-2xl font-medium">
              Proyectos
            </span>
          </Link>
          {/* item 4 */}
          <Link
            href="#experience"
            className="w-[70%] h-auto flex justify-start border-b-[1px] border-gray-300 px-4 py-3 text-white hover:text-gray-500"
            onClick={closeMenu}
          >
            <span className="flex items-center gap-3 text-2xl font-medium">
              Experiencia
            </span>
          </Link>
          {/* item 5 */}
          <Link
            href="#pricing"
            className="w-[70%] h-auto flex justify-start border-b-[1px] border-gray-300 px-4 py-3 text-white hover:text-gray-500"
            onClick={closeMenu}
          >
            <span className="flex items-center gap-3 text-2xl font-medium">
              Packs
            </span>
          </Link>
          {/* item 6 */}
          <Link
            href="#contact"
            className="w-[70%] h-auto flex justify-start  px-4 py-3 text-white hover:text-gray-500"
            onClick={closeMenu}
          >
            <span className="flex items-center gap-3 text-2xl font-medium">
              Contacto
            </span>
          </Link>
        </nav>
      </div>
    </div>
  );
};
