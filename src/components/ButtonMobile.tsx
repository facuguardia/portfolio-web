"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";

export const ButtonMobile = () => {
  const [menu, setMenu] = useState(false);
  const [activeItem, setActiveItem] = useState("/");

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menu]);

  const closeMenu = () => {
    setMenu(false);
  };

  const handleItemClick = (href: any) => {
    setActiveItem(href);
    closeMenu();
  };


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
        <div className="flex flex-col items-center justify-center w-screen h-screen">
          {/* item 1 */}
          <Link
            href="/"
            className={`w-[70%] h-auto flex justify-start boder-b-[2px] border-gray-300 px-4 py-3 ${
              activeItem === "/" ? "text-green-500" : "text-white"
            }`}
            onClick={() => handleItemClick("/")}
          >
            <span className="flex items-center gap-3 text-2xl font-medium">
              Inicio
            </span>
          </Link>
          {/* item 2 */}
          <Link
            href="#about"
            className={`w-[70%] h-auto flex justify-start boder-b-[2px] border-gray-300 px-4 py-3 ${
              activeItem === "#about" ? "text-green-500" : "text-white"
            }`}
            onClick={() => handleItemClick("#about")}
          >
            <span className="flex items-center gap-3 text-2xl font-medium">
              Acerca de
            </span>
          </Link>
          {/* item 3 */}
          <Link
            href="#projects"
            className={`w-[70%] h-auto flex justify-start boder-b-[2px] border-gray-300 px-4 py-3 ${
              activeItem === "#project" ? "text-green-500" : "text-white"
            }`}
            onClick={() => handleItemClick("#project")}
          >
            <span className="flex items-center gap-3 text-2xl font-medium">
              Proyectos
            </span>
          </Link>
          {/* item 5 */}
          <Link
            href="#pricing"
            className={`w-[70%] h-auto flex justify-start boder-b-[2px] border-gray-300 px-4 py-3 ${
              activeItem === "#pricing" ? "text-green-500" : "text-white"
            }`}
            onClick={() => handleItemClick("#pricing")}
          >
            <span className="flex items-center gap-3 text-2xl font-medium">
              Packs
            </span>
          </Link>
          {/* item 6 */}
          <Link
            href="#contact"
            className={`w-[70%] h-auto flex justify-start boder-b-[2px] border-gray-300 px-4 py-3 ${
              activeItem === "#contact" ? "text-green-500" : "text-white"
            }`}
            onClick={() => handleItemClick("#contact")}
          >
            <span className="flex items-center gap-3 text-2xl font-medium">
              Contacto
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
