import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  RiFacebookCircleLine,
  RiInstagramFill,
  RiGithubFill,
  RiLinkedinFill,
} from "react-icons/ri";

import Boy from "../assets/hero.png";
import SocialButtons from "@/components/SocialButtons";

function Hero() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center pt-10">
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
          Soy un desarrollador Fullstack con sede en Argentina. Mi enfoque se
          centra en los efectos de interfaz de usuario, animaciones y la
          creación de experiencias de usuario intuitivas y dinámicas. Estoy
          listo para colaborar en algo especial.
        </p>
      </div>
      <div className="flex text-left gap-6 pl-5 pt-8">
        {/* faceboock */}
        <Link href="https://www.facebook.com/facu.guardia.86" target="_blank">
          <SocialButtons icon={RiFacebookCircleLine} size={25} />
        </Link>

        {/* instagram */}
        <SocialButtons icon={RiInstagramFill} size={25} />

        {/* github */}
        <SocialButtons icon={RiGithubFill} size={25} />

        {/* linkedin */}
        <SocialButtons icon={RiLinkedinFill} size={25} />
      </div>
    </div>
  );
}

export default Hero;
