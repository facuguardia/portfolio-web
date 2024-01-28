import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  RiWhatsappFill,
  RiInstagramFill,
  RiGithubFill,
  RiLinkedinFill,
} from "react-icons/ri";

import Boy from "../assets/hero.png";
import SocialButtons from "@/components/SocialButtons";

function Hero() {
  return (
    <div id="hero" className="flex flex-col">
      <div className="flex justify-center items-center pt-24">
        <Image src={Boy} alt="Hero" width={343} height={350} />
      </div>
      <div className="py-10 ml-5">
        <h1 className="text-4xl text-left">
          Hola, soy <strong>Facundo. Fullstack</strong>{" "}
          <span className="text-white bg-black px-2">Developer</span> <br />
        </h1>
      </div>
      <div>
        <p className="text-left text-xl mx-5">
          Soy un Desarrollador Fullstack con sede en Argentina, especializado en
          la creación integral de aplicaciones. Mi experiencia abarca tanto el
          diseño del frontend como el desarrollo del backend, incluyendo la
          conexión con servicios de bases de datos, y todo ello utilizando
          JavaScript como mi lenguaje principal. Mi enfoque se centra en la
          mejora de la interfaz de usuario, la implementación de animaciones y
          la creación de experiencias dinámicas e intuitivas.
        </p>
      </div>
      <div className="flex text-left gap-6 pl-5 pt-8">
        {/* instagram */}
        <Link href="https://www.instagram.com/facu_guardia/" target="_blank">
          <SocialButtons icon={RiInstagramFill} size={25} />
        </Link>

        {/* github */}
        <Link href="https://github.com/facuguardia" target="_blank">
          <SocialButtons icon={RiGithubFill} size={25} />
        </Link>

        {/* linkedin */}
        <Link href="https://www.linkedin.com/in/facu-guardia/" target="_blank">
          <SocialButtons icon={RiLinkedinFill} size={25} />
        </Link>

        {/* whatsapp */}
        <Link href="https://bit.ly/wsp-dev" target="_blank">
          <SocialButtons icon={RiWhatsappFill} size={25} />
        </Link>
      </div>
    </div>
  );
}

export default Hero;
