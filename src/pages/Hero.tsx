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
            Impulsa tu <strong>Emprendimiento</strong> con Soluciones <br />
            <span className="px-2 text-white bg-black">Web a Medida</span>{" "}
            <br />
          </h1>
        </div>
        <div className="flex flex-col justify-center gap-8">
          <div>
            <p className="ml-5 text-xl text-left">
              Lleva tu negocio al mundo digital y multiplica tus oportunidades
              de venta. Descubrí cómo puedo{" "}
              <strong>transformar tu emprendimiento</strong>, sea para lanzar tu
              <strong> tienda online</strong> o destacar tu{" "}
              <strong>servicio profesional</strong>.
              <br />
            </p>
          </div>

          <div className="ml-5 text-xl">
            <ButtonCTA />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
