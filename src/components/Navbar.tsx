// "use client";

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// import Logo from "../assets/logo-facutech.png";

// export const Navbar = () => {
//   const [shadow, setShadow] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setShadow(true);
//       } else {
//         setShadow(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   return (
//     <nav
//       className={`bg-white fixed w-full z-20 top-0 start-0 border-b-2 transition-shadow duration-300 ${
//         shadow ? "shadow-md" : ""
//       }`}
//     >
//       <div className="max-w-screen-xl hidden lg:flex justify-between items-center mx-auto p-4">
//         {/* Logo */}
//         <div>
//           <Link href="/">
//             <Image src={Logo} alt="logo facutech" height={150} width={150} />
//           </Link>
//         </div>

//         {/* Navbar */}
//         <div
//           className="items-center justify-between hidden w-full md:flex md:w-auto"
//           id="navbar-sticky"
//         >
//           <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
//             {/* item 1 */}
//             <li>
//               <Link
//                 href="/"
//                 className="block py-2 px-3 text-gray-900 md:p-0 hover:text-green-500 active:text-green-500 transition-all duration-500"
//               >
//                 Inicio
//               </Link>
//             </li>
//             {/* item 2 */}
//             <li>
//               <Link
//                 href="#about"
//                 className="block py-2 px-3 text-gray-900 md:p-0 hover:text-green-500 transition-all duration-500"
//               >
//                 Acerca de
//               </Link>
//             </li>
//             {/* item 3 */}
//             <li>
//               <Link
//                 href="#projects"
//                 className="block py-2 px-3 text-gray-900 md:p-0 hover:text-green-500 transition-all duration-500"
//               >
//                 Proyectos
//               </Link>
//             </li>
//             {/* item 4 */}
//             {/* <li>
//               <Link
//                 href="#experience"
//                 className="block py-2 px-3 text-gray-900 md:p-0 hover:text-green-500 transition-all duration-500"
//               >
//                 Experiencia
//               </Link>
//             </li> */}
//             {/* item 5 */}
//             <li>
//               <Link
//                 href="#pricing"
//                 className="block py-2 px-3 text-gray-900 md:p-0 hover:text-green-500 transition-all duration-500"
//               >
//                 Packs
//               </Link>
//             </li>
//             {/* item 6 */}
//             <li>
//               <Link
//                 href="#contact"
//                 className="block py-2 px-3 text-gray-900 md:p-0 hover:text-green-500 transition-all duration-500"
//               >
//                 Contacto
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* CTA */}
//         <div>
//           <Link href="https://bit.ly/wsp-emprendedor" target="_blank">
//             <button className="w-full items-center px-10 py-3.5 text-lg font-medium text-center text-white hover:text-black transition-all duration-500 ease-in-out border-2 border-black shadow-md rounded-xl bg-black hover:bg-green-500">
//               Empieza tu proyecto
//             </button>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "../assets/logo-facutech.png";

export const Navbar = () => {
  const [shadow, setShadow] = useState(false);
  const [activeItem, setActiveItem] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleItemClick = (href: any) => {
    setActiveItem(href);
  };

  return (
    <nav
      className={`bg-white fixed w-full z-20 top-0 start-0 border-b-2 transition-shadow duration-300 ${
        shadow ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-screen-xl hidden lg:flex justify-between items-center mx-auto p-4">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image src={Logo} alt="logo facutech" height={150} width={150} />
          </Link>
        </div>

        {/* Navbar */}
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            {/* item 1 */}
            <li>
              <Link
                href="/"
                className={`block py-2 px-3 ${
                  activeItem === "/" ? "text-green-500" : "text-gray-900"
                } md:p-0 hover:text-green-500 transition-all duration-500`}
                onClick={() => handleItemClick("/")}
              >
                Inicio
              </Link>
            </li>
            {/* item 2 */}
            <li>
              <Link
                href="#about"
                className={`block py-2 px-3 ${
                  activeItem === "#about" ? "text-green-500" : "text-gray-900"
                } md:p-0 hover:text-green-500 transition-all duration-500`}
                onClick={() => handleItemClick("#about")}
              >
                Acerca de
              </Link>
            </li>
            {/* item 3 */}
            <li>
              <Link
                href="#projects"
                className={`block py-2 px-3 ${
                  activeItem === "#projects"
                    ? "text-green-500"
                    : "text-gray-900"
                } md:p-0 hover:text-green-500 transition-all duration-500`}
                onClick={() => handleItemClick("#projects")}
              >
                Proyectos
              </Link>
            </li>
            {/* item 4 */}
            <li>
              <Link
                href="#pricing"
                className={`block py-2 px-3 ${
                  activeItem === "#pricing" ? "text-green-500" : "text-gray-900"
                } md:p-0 hover:text-green-500 transition-all duration-500`}
                onClick={() => handleItemClick("#pricing")}
              >
                Packs
              </Link>
            </li>
            {/* item 5 */}
            <li>
              <Link
                href="#contact"
                className={`block py-2 px-3 ${
                  activeItem === "#contact" ? "text-green-500" : "text-gray-900"
                } md:p-0 hover:text-green-500 transition-all duration-500`}
                onClick={() => handleItemClick("#contact")}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <Link href="https://bit.ly/wsp-emprendedor" target="_blank">
            <button className="w-full items-center px-10 py-3.5 text-lg font-medium text-center text-white hover:text-black transition-all duration-500 ease-in-out border-2 border-black shadow-md rounded-xl bg-black hover:bg-green-500">
              Empezá tu proyecto
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
