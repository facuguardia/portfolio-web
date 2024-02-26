import React from "react";
import CardExperience from "../components/CardExperience";

import { FcGoogle } from "react-icons/fc";
import { FcAndroidOs } from "react-icons/fc";
import { FcCommandLine } from "react-icons/fc";

function Experience() {
  return (
    // TODO: Completar información
    <div
      id="experience"
      className=" bg-black h-[100%] flex flex-col justify-center items-center pt-24 pb-10 px-3"
    >
      <h1 className="text-2xl text-white">
        Mí<strong> Experiencia</strong>
      </h1>
      <div className="container mx-auto w-[95%] mt-10 md:flex md:justify-center">
        <CardExperience
          title="Mobile Developer"
          description="Me especializo en el desarrollo de aplicaciones móviles utilizando React Native. Diseño e implemento de manera eficiente características claves, asegurando compatibilidad multiplataforma y entregando productos de alta calidad."
          icon={FcAndroidOs}
          size={40}
        />
      </div>
      <div className="container mx-auto w-[95%] mt-10 md:flex md:justify-center">
        <CardExperience
          title="Fullstack Developer"
          description="Como fullstack developer, integro mi experiencia tanto en el frontend como en el backend para proporcionar soluciones completas. Utilizando tecnologías de JavaScript, desarrollo interfaces de usuario atractivas y contribuyo al diseño general de la aplicación."
          icon={FcCommandLine}
          size={40}
        />
      </div>
      <div className="container mx-auto w-[95%] mt-10 md:flex md:justify-center ">
        <CardExperience
          title="Frontend Web Developer"
          description="Como dev frontend, he estado dándole vida a interfaces de usuario con ese toque dinámico y atractivo gracias a React. Trabajo codo a codo con los clientes para armar soluciones a medida, mejorando la experiencia del usuario y asegurándome de que los objetivos del proyecto se cumplan a la perfección"
          icon={FcGoogle}
          size={40}
        />
      </div>
    </div>
  );
}

export default Experience;
