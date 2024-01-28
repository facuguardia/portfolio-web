import React from "react";
import CardExperience from "../components/CardExperience";

import { FcGoogle } from "react-icons/fc";
import { FcAndroidOs } from "react-icons/fc";
import { FcCommandLine } from "react-icons/fc";

function Experience() {
  return (
    // TODO: Completar información
    <div id="experience"  className="bg-black h-[100%] flex flex-col justify-center items-center pt-24 pb-10">
      <h1 className="text-2xl text-white">
        My<strong> Experience</strong>
      </h1>
      <div className="w-[90%] mt-10 md:flex md:justify-center">
        <CardExperience
          title="Mobile Developer - React Native"
          data="Nov 2023 - Presente"
          description="Me especializo en el desarrollo de aplicaciones móviles utilizando React Native. Diseñé e implementé de manera independiente características claves, asegurando compatibilidad multiplataforma y entregando productos de alta calidad."
          icon={FcAndroidOs}
          size={40}
        />
      </div>
      <div className="w-[90%] mt-10 md:flex md:justify-center">
        <CardExperience
          title="Frontend Web Developer - React.Js"
          data="Dic 2022 - Nov 2023"
          description="Como desarrollador frontend, he creado interfaces de usuario dinámicas y atractivas utilizando React. Colaboro estrechamente con los clientes para ofrecer soluciones personalizadas, mejorando la experiencia del usuario y garantizando el logro de los objetivos del proyecto."
          icon={FcGoogle}
          size={30}
        />
      </div>
      <div className="w-[90%] mt-10 md:flex md:justify-center ">
        <CardExperience
          title="Fullstack Developer - React.Js & Node.Js"
          data="Sep 2022 - Dic 2022"
          description="Como desarrollador Fullstack, integro experiencia tanto en frontend como en backend para ofrecer soluciones integrales. Utilizando tecnologías de JavaScript, creo interfaces de usuario atractivas y contribuyo a la arquitectura general de la aplicación. Mi compromiso con la satisfacción del cliente y la adaptabilidad garantizan resultados exitosos en los proyectos."
          icon={FcCommandLine}
          size={40}
        />
      </div>
    </div>
  );
};

export default Experience;