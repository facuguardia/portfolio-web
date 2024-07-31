import React from "react";
import Image from "next/image";
import AboutImg from "../assets/about.png";

function About() {
  return (
    <div
      id="about"
      className="container mx-auto h-full px-5 lg:px-20 pt-24 pb-10 lg:flex lg:justify-center"
    >
      <div className="flex flex-col lg:justify-center items-center lg:w-[40%]">
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
          Acerca <strong>de</strong>
        </h1>
        <p className=" text-gray-600">
          Soy Facundo, tu aliado en el desarrollo web y móvil, especializado en
          convertir ideas emprendedoras en soluciones digitales que venden. Mi
          pasión es entender tu visión y materializarla en aplicaciones y sitios
          web que no solo se vean bien, sino que también cumplan tus objetivos
          de negocio. Conmigo, lo imposible es solo un reto más
          por superar.
          <br />
          <br />
          <strong>Filosofía de Trabajo</strong>
          <br />
          <br />
          Compromiso total con tu proyecto. Te ofrezco asesoramiento
          personalizado, claridad en cada paso y una colaboración cercana para
          garantizar que tu inversión digital se traduzca en crecimiento real
          para tu emprendimiento.
          <br />
          <br />
          {/* <strong>Convertir Tu Visión en Realidad</strong>
          <br />
          <br />
          No más pérdidas de tiempo y dinero con soluciones genéricas. Estoy
          aquí para elevar tu idea a su máximo potencial digital, creando
          experiencias online que no solo cumplen, sino exceden tus
          expectativas. Conversemos sobre cómo puedo llevar tu emprendimiento al
          siguiente nivel. */}
        </p>
      </div>
    </div>
  );
}

export default About;
