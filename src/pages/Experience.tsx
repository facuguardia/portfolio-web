import React from "react";
import CardExperience from "../components/CardExperience";

import { FcGoogle } from "react-icons/fc";
import { FcAndroidOs } from "react-icons/fc";
import { FcCommandLine } from "react-icons/fc";

function Experience() {
  return (
    <div
      id="experience"
      className=" bg-black h-[100%] flex flex-col justify-center items-center pt-24 pb-24 px-3"
    >
      <div className="container mx-auto w-[95%] mt-10 md:flex md:justify-center">
        <CardExperience
          title="Soluciones Personalizadas de Aplicaciones Móviles"
          description="Comprendo la importancia de conectar con tus clientes en cualquier momento y lugar. Por eso, me especializo en el desarrollo de aplicaciones móviles que garantizan una experiencia de usuario fluida y accesible desde cualquier dispositivo."
          icon={FcAndroidOs}
          size={40}
        />
      </div>
      <div className="container mx-auto w-[95%] mt-10 md:flex md:justify-center">
        <CardExperience
          title="Desarrollo Integral para Tu Negocio Digital"
          description="Tu proyecto necesita una solución que combine un diseño atractivo con una funcionalidad sólida. Con mi experiencia en desarrollo, integro habilidades para crear desde interfaces de usuario intuitivas hasta sistemas complejos, utilizando tecnologías de última generación."
          icon={FcCommandLine}
          size={40}
        />
      </div>
      <div className="container mx-auto w-[95%] mt-10 md:flex md:justify-center ">
        <CardExperience
          title="Experiencias Web que Enganchan y Convierten"
          description="Cada punto de contacto con tu cliente es una oportunidad para impresionar y convertir. Como desarrollador, pongo especial atención en crear sitios web que no solo se vean bien, sino que sean intuitivos y fáciles de navegar. Desarrollo soluciones que capturan la esencia de tu marca y la comunican de manera efectiva, garantizando que cada usuario se sienta involucrado y listo para tomar acción."
          icon={FcGoogle}
          size={40}
        />
      </div>
    </div>
  );
}

export default Experience;
