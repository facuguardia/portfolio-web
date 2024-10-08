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
      className="container mx-auto flex flex-col lg:px-5 lg:pt-36 pb-24 lg:flex-row-reverse items-center border-b-2"
    >
      <div className="lg:w-[50%] lg:h-[350px] pt-24 lg:pt-0 flex justify-center">
        {isDesktop ? (
          <Image src={Boy} alt="Hero" />
        ) : (
          <Image src={Boy} alt="Hero" />
        )}
      </div>

      <div className="lg:w-[50%] lg:flex lg:flex-col lg:justify-center mx-5">
        <div className="py-10">
          <h1 className="text-5xl xl:text-6xl text-left font-thin leading-[140%] uppercase">
            Convierte
            <strong className="text-black font-bold leading-[140%]">
              {" "}
              tu idea
            </strong>{" "}
            en una presencia online{" "}
            <span className="text-black font-bold leading-[140%]">
              impactante
            </span>
            <br />
          </h1>
        </div>
        <div className="flex flex-col justify-center gap-8">
          <div className="text-xl">
            <ButtonCTA />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
