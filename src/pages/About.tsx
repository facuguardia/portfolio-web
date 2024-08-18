"use client";

import React from "react";
import Image from "next/image";
import AboutImg from "../assets/about.png";

import Link from "next/link";

function About() {
  return (
    <div
      id="about"
      className="container mx-auto h-full px-5 lg:px-20 pt-24 pb-24 lg:flex lg:justify-center"
    >
      <div className="flex flex-col lg:justify-center items-center lg:w-[50%]">
        <Image
          src={AboutImg}
          alt="Picture of the author"
          width={343}
          height={374}
          className="w-[60%] lg:w-[85%] "
        />
      </div>

      <div className="mt-10 lg:mt-0 items-start w-[100%] lg:w-[50%]">
        <h1 className="py-5 text-2xl">
          Acerca de <strong>mí</strong>
        </h1>
        <p className=" text-gray-600">
          Soy Facundo, tu socio en desarrollo web y móvil, especializado en
          transformar ideas emprendedoras en soluciones digitales que generan
          resultados. Mi objetivo es comprender tu visión y convertirla en
          aplicaciones y sitios web que no solo luzcan bien, sino que también
          impulsen tu negocio. Para mí, lo imposible es simplemente un reto más
          que superar.
          <br />
          <br />
          <strong>Filosofía de Trabajo</strong>
          <br />
          <br />
          Me comprometo totalmente con tu proyecto. Ofrezco asesoramiento
          personalizado, claridad en cada paso y una colaboración cercana para
          asegurar que tu inversión digital se traduzca en crecimiento real para
          tu emprendimiento.
          <div className="mt-10">
            <Link href="../curriculum">
              <button
                type="button"
                className="text-white bg-black hover:bg-green-500 hover:text-black border-2 border-black font-medium rounded-lg text-lg px-6 py-4 text-center shadow-xl transition-all duration-500 ease-in-out"
              >
                <div className="flex justify-center items-center gap-3 shadow-2xl font-bold">
                  Mi Currículum
                </div>
              </button>
            </Link>
          </div>
        </p>
      </div>
    </div>
  );
}

export default About;
