import React from "react";
import CardExperience from "../components/CardExperience";

import { FcGoogle } from "react-icons/fc";
import { FcAndroidOs } from "react-icons/fc";
import { FcCommandLine } from "react-icons/fc";

function Experience() {
  return (
    <div
      id="experience"
      className=" bg-black h-[100%] flex flex-col justify-center items-center pt-24 pb-10 px-3"
    >
      <h1 className="text-2xl text-white">
        Mí<strong> Experiencia</strong>
      </h1>
      <div className="container mx-auto w-[95%] mt-10 md:flex md:justify-center">
        <CardExperience
          title="Soluciones de Aplicaciones Móviles Personalizadas"
          description="Entiendo la importancia de conectar con tu cliente en cualquier momento y lugar. Por eso, me especializo en el desarrollo de aplicaciones móviles, asegurando una experiencia de usuario fluida y accesible desde cualquier dispositivo. Mi enfoque en React Native permite crear aplicaciones multiplataforma que impulsan tu negocio y facilitan una interacción constante de tus usuarios."
          icon={FcAndroidOs}
          size={40}
        />
      </div>
      <div className="container mx-auto w-[95%] mt-10 md:flex md:justify-center">
        <CardExperience
          title="Desarrollo Integral para Tu Negocio Digital"
          description="Tu proyecto requiere una solución que abarque tanto el atractivo visual como la funcionalidad robusta. Con mi experiencia en desarrollo fullstack, fusiono habilidades de frontend y backend para construir desde interfaces de usuario hasta sistemas complejos por detrás de escena, utilizando tecnologías de vanguardia. Esta combinación asegura que tu plataforma digital sea tan eficiente como atractiva, ofreciendo a tus clientes una experiencia completa y cohesiva."
          icon={FcCommandLine}
          size={40}
        />
      </div>
      <div className="container mx-auto w-[95%] mt-10 md:flex md:justify-center ">
        <CardExperience
          title="Experiencias Web que Enganchan y Convierten"
          description="Cada punto de contacto con tu cliente es una oportunidad para impresionar y convertir. Como desarrollador frontend, pongo especial atención en crear sitios web que no solo se vean bien, sino que sean intuitivos y fáciles de navegar. Utilizando React, desarrollo soluciones que capturan la esencia de tu marca y la comunican de manera efectiva, garantizando que cada usuario se sienta involucrado y listo para tomar acción. Mi objetivo es ayudarte a superar las barreras digitales, transformando tus ideas en experiencias web que generen resultados."
          icon={FcGoogle}
          size={40}
        />
      </div>
    </div>
  );
}

export default Experience;
