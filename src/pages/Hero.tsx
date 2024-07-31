"use client";

import React, { useState } from "react";
import Image from "next/image";

import Boy from "../assets/hero.png";
import { ButtonCTA } from "@/components/ButtonCTA";

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
      className="container mx-auto flex flex-col lg:px-20 lg:pt-32 lg:flex-row-reverse items-center"
    >
      <div className="lg:w-[40%] lg:h-[300px] pt-24 lg:pt-0 flex justify-center">
        {isDesktop ? (
          <Image src={Boy} alt="Hero" />
        ) : (
          <Image src={Boy} alt="Hero" />
        )}
      </div>

      <div className="lg:w-[60%] lg:flex lg:flex-col lg:justify-center mx-5">
        <div className="py-10">
          <h1 className="text-4xl lg:text-6xl xl:text-6xl text-left leading-[140%]">
            <strong className="leading-[140%]">Sitios Web</strong> que Impulsan{" "}
            <strong>Tu Negocio</strong> <br />
            Hacia el{" "}
            <span className="text-black font-bold leading-[140%]">
              Exito Digital
            </span>{" "}
            <br />
          </h1>
        </div>
        <div className="flex flex-col justify-center gap-8">
          {/* <div>
            <p className="text-lg lg:text-2xl text-left">
              Entrar al mundo digital puede ser un gran desafío, especialmente
              si tu pasión es tu emprendimiento y no la tecnología. Por eso, en
              FacuTech, diseñé el Pack Emprendedor pensando en ti.
            </p>
          </div> */}

          <div className="text-xl">
            <ButtonCTA />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
