"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  RiWhatsappFill,
  RiInstagramFill,
  RiGithubFill,
  RiLinkedinFill,
  RiSpotifyFill,
} from "react-icons/ri";

import Boy from "../assets/hero.png";
import SocialButtons from "@/components/SocialButtons";

function Hero() {
  const [isDesktop, setIsDesktop] = useState(false);

  React.useEffect(() => {
    if (window.innerWidth > 1024) {
      setIsDesktop(true);
    }
  }, []);

  return (
    <div
      id="hero"
      className="container mx-auto flex flex-col lg:px-20 lg:pt-16 lg:flex-row-reverse"
    >
      <div className="lg:w-[50%] flex justify-center items-center pt-24">
        {isDesktop ? (
          <Image src={Boy} alt="Hero" width={889} height={596} />
        ) : (
          <Image src={Boy} alt="Hero" width={343} height={350} />
        )}
      </div>
      <div className="lg:w-[60%] lg:flex lg:flex-col lg:justify-center lg:items-start">
        <div className="py-10 ml-5">
          <h1 className="text-4xl text-left leading-[140%]">
            Hola, soy <strong>Facundo. Frontend</strong> <br />
            <span className="px-2 text-white bg-black">Developer</span> <br />
          </h1>
        </div>
        <div>
          <p className="mx-5 text-xl text-left">
            Mi enfoque es convertir ideas en experiencias digitales
            cautivadoras, garantizando resultados extraordinarios. Si buscas un
            arquitecto digital apasionado, estoy aquí para llevar tu visión al
            siguiente nivel. Hablemos sobre tu proyecto y demos vida a tus
            ideas...
            <br />
            <br /> <strong>¡Convierte tu visión en realidad conmigo!</strong>
          </p>
        </div>
        <div className="flex gap-6 pt-8 pl-5 text-left">
          {/* github */}
          <Link href="https://github.com/facuguardia" target="_blank">
            <SocialButtons icon={RiGithubFill} size={25} />
          </Link>

          {/* linkedin */}
          <Link
            href="https://www.linkedin.com/in/facu-guardia/"
            target="_blank"
          >
            <SocialButtons icon={RiLinkedinFill} size={25} />
          </Link>

          {/* instagram */}
          <Link href="https://www.instagram.com/facu_guardia/" target="_blank">
            <SocialButtons icon={RiInstagramFill} size={25} />
          </Link>

          {/* whatsapp */}
          <Link href="https://bit.ly/wsp-dev" target="_blank">
            <SocialButtons icon={RiWhatsappFill} size={25} />
          </Link>

          {/* Spotify */}
          <Link href="https://open.spotify.com/user/121557496" target="_blank">
            <SocialButtons icon={RiSpotifyFill} size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
