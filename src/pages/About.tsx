import React from "react";
import Image from "next/image";
import AboutImg from "../assets/about.png";

function About() {
  return (
    <div id="about" className="container mx-auto px-5 lg:px-20 pt-24 pb-10 lg:flex lg:justify-center lg:items-center">
      <div className="flex flex-col lg:justify-center items-center lg:w-[40%]">
        <Image
          src={AboutImg}
          alt="Picture of the author"
          width={343}
          height={374}
          className="w-[60%] lg:w-[85%] "
        />
      </div>
      <div className="mt-10 lg:mt-0 items-start w-[100%] lg:w-[60%]">
        <h1 className="py-5 text-2xl">
          About <strong>Me</strong>
        </h1>
        <p className="mt-5 text-gray-600">
          ¡Hola! Soy Facundo, un apasionado desarrollador web y móvil con un
          enfoque único en convertir ideas en experiencias digitales
          cautivadoras. Mi destreza con tecnologías como React y React Native,
          respaldada por un profundo entendimiento de JavaScript, me permite
          crear soluciones que no solo cumplen con los requisitos técnicos, sino
          que también cuentan historias visuales y funcionales.
          <br />
          <br />
          <strong>Filosofía de Trabajo</strong>
          <br />
          <br />
          Creo en la transparencia y la colaboración. Cada proyecto es una
          asociación única, donde tus objetivos se convierten en los míos. Mi
          compromiso con la excelencia y la comunicación abierta garantiza
          resultados extraordinarios.
          <br />
          <br />
          <strong>Convertir Tu Visión en Realidad</strong>
          <br />
          <br />
          Si estás buscando un arquitecto digital apasionado, estoy aquí para
          llevar tu visión al siguiente nivel. Construyamos experiencias
          digitales que superen las expectativas con estilo. ¡Hablemos sobre tu
          proyecto y demos vida a tus ideas! Gracias por visitar; ¡espero con
          ansias trabajar contigo!
        </p>
      </div>
    </div>
  );
}

export default About;
