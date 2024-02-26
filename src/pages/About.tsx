import React from "react";
import Image from "next/image";
import AboutImg from "../assets/about.png";

function About() {
  return (
    <div
      id="about"
      className="container mx-auto px-5 lg:px-20 pt-24 pb-10 lg:flex lg:justify-center lg:items-center"
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
      <div className="mt-10 lg:mt-0 items-start w-[100%] lg:w-[60%]">
        <h1 className="py-5 text-2xl">
          Acerca <strong>de</strong>
        </h1>
        <p className="mt-5 text-gray-600">
          Soy un apasionado desarrollador web y móvil. Mi misión es dar vida a tus proyectos más ambiciosos y transformarlos en realidades digitales que brillen con luz propia. Mi conocimiento en desarrollo de software me permite crear aplicaciones con diseños atractivos y funcionales. La palabra "imposible" no existe en mi diccionario. Si tenés una idea, juntos la hacemos realidad.
          <br />
          <br />
          <strong>Filosofía de Trabajo</strong>
          <br />
          <br />
          De frente y sin vueltas. Te presto toda mi atención, te asesoro y guío en el proceso de desarrollo de tu proyecto. Siempre con la mejor onda y predisposición. Para que ambos ganemos en este proceso.
          <br />
          <br />
          <strong>Convertir Tu Visión en Realidad</strong>
          <br />
          <br />
          Si estás buscando convertir tu idea en un negocio digital rentable... deja de gastar tu dinero en los "vende humo" de siempre, yo llevo tu visión al siguiente nivel, construyendo experiencias digitales que superen tus expectativas. ¡Hablemos sobre tu proyecto y demos vida a tus ideas!
        </p>
      </div>
    </div>
  );
}

export default About;
