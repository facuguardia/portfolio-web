"use client";

import Image from "next/image";
import Link from "next/link";

import ProfilePic from "@/assets/profile.png";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiChakraui,
  SiBootstrap,
  SiTailwindcss,
  SiFramer,
  SiGithub,
  SiExpo,
  SiFigma,
  SiTrello,
  SiNotion,
  SiWoocommerce,
  SiWordpress,
  SiWindowsterminal,
  SiTypescript,
  SiNodedotjs,
  SiContentful,
  SiFirebase,
  SiLinkedin,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import {
  MdOutlineEmail,
  MdOutlinePhoneIphone,
  MdOutlineLocationOn,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import React from "react";

const Curriculum = () => {
  return (
    <div className="min-h-screen container mx-auto grid grid-cols-1 md:grid-cols-12 bg-background-secondary mt-10 lg:mt-24 mb-8">
      {/* barra lateral */}
      <section className="col-span-3 md:col-span-4 xl:col-span-4 px-0 lg:px-6 py-8">
        {/* imagen */}
        <div className="flex justify-center py-8">
          <div className="relative w-40 h-40">
            <Image
              alt="Image profile"
              src={ProfilePic}
              fill
              className="object-cover object-top ring-4 ring-black rounded-full"
            />
          </div>
        </div>

        <div className="pl-8 border-l border-border">
          {/* nombre y puesto */}
          <div className="mb-8">
            <div>
              <h1 className="text-4xl uppercase tracking-[2px]">Facundo</h1>
              <h1 className="text-4xl uppercase font-bold tracking-[2px]">
                Guardia
              </h1>
              <p className="text-muted-foreground">
                Desarrollador Web & Mobile
              </p>
            </div>
          </div>
          {/* datos contacto */}
          <div>
            <h5 className="relative uppercase font-extrabold before:w-3 before:h-3 before:absolute before:bg-border before:border-2 before:border-background-secondary before:rounded-full before:-left-[38.5px] before:top-[50%] before:-translate-y-[50%] my-4">
              Contactame
            </h5>
            <ul className="flex flex-col">
              <li className="inline-flex items-center gap-2 mb-4 text-sm">
                <div>
                  {" "}
                  <MdOutlinePhoneIphone />{" "}
                </div>
                <Link href="https://bit.ly/wsp-emprendedor" target="_blank">
                <span className="text-muted-foreground">
                  +54 261 6 99 77 00
                </span>
                </Link>
              </li>
              <li className="inline-flex items-center gap-2 mb-4 text-sm">
                <div>
                  {" "}
                  <MdOutlineEmail />
                </div>
                <span className="text-muted-foreground">
                  facundo.guardia@facutech.com
                </span>
              </li>
              <li className="inline-flex items-center gap-2 mb-4 text-sm">
                <div>
                  <MdOutlineLocationOn />
                </div>
                <span className="text-muted-foreground">
                  Mendoza, Argentina
                </span>
              </li>
            </ul>
          </div>
          {/* referencias */}
          <div>
            <h5 className="relative uppercase font-extrabold before:w-3 before:h-3 before:absolute before:bg-border before:border-2 before:border-background-secondary before:rounded-full before:-left-[38.5px] before:top-[50%] before:-translate-y-[50%] my-4">
              Referencias
            </h5>
            <ul>
              <li className="mb-2">
                <h4 className="text-gray-900 font-bold text-sm">
                  Pablo Araujo
                </h4>
                <p className="text-muted-foreground text-xs text-justify">
                  Cheapter Lead /{" "}
                  <span className="italic font-semibold">
                    +54 11 6 26 02 33 2
                  </span>
                </p>
              </li>
              <li className="mb-2">
                <h4 className="text-gray-900  font-bold text-sm">
                  Esteban Gallar
                </h4>
                <p className="text-muted-foreground text-xs text-justify">
                  Backend Developer /{" "}
                  <span className="italic font-semibold">
                    +54 261 2 41 35 87
                  </span>
                </p>
              </li>
            </ul>
          </div>

          {/* idiomas */}
          <div>
            <h5 className="relative uppercase font-extrabold before:w-3 before:h-3 before:absolute before:bg-border before:border-2 before:border-background-secondary before:rounded-full before:-left-[38.5px] before:top-[50%] before:-translate-y-[50%] my-4">
              Idiomas
            </h5>
            <ul className="flex gap-5">
              <li className="text-sm">
                <span>Español</span>
              </li>
              <li className="text-sm">
                <span>Ingles</span>
              </li>
            </ul>
          </div>

          {/* skills */}
          <div>
            <h5 className="relative uppercase font-extrabold before:w-3 before:h-3 before:absolute before:bg-border before:border-2 before:border-background-secondary before:rounded-full before:-left-[38.5px] before:top-[50%] before:-translate-y-[50%] my-4">
              Habilidades
            </h5>
            <div className="grid grid-cols-2 md:grid-cols-2 text-lg">
              <span className="flex items-center gap-2 pb-2">
                <SiHtml5 />
                HTML
              </span>
              <span className="flex items-center gap-2 pb-2">
                <SiCss3 />
                CSS
              </span>
              <span className="flex items-center gap-2 pb-2">
                <SiTailwindcss />
                Tailwind CSS
              </span>
              <span className="flex items-center gap-2 pb-2">
                <SiFramer />
                Framer Motion
              </span>
              <span className="flex items-center gap-2 pb-2">
                <SiChakraui />
                Chakra UI
              </span>
              <span className="flex items-center gap-2 pb-2">
                <SiBootstrap />
                Bootstrap
              </span>
              <span className="flex items-center gap-2 pb-2">
                <SiJavascript />
                JavaScript
              </span>
              <span className="flex items-center gap-2 pb-2">
                <SiTypescript />
                TypeScript
              </span>
              <span className="flex items-center gap-2 pb-2">
                <SiReact />
                ReactJS
              </span>
              <span className="flex items-center gap-2 pb-2">
                <SiNextdotjs />
                NextJS
              </span>
              <span className="flex items-center gap-2 pb-2">
                <SiNodedotjs />
                NodeJS
              </span>
              <span className="flex items-center gap-2 pb-2">
                <TbBrandReactNative />
                React Native
              </span>
              <span className="flex items-center gap-2 pb-2">
                <SiExpo />
                Expo
              </span>
              <span className="flex items-center gap-2 pb-2">
                <SiContentful />
                Contentful
              </span>
              <span className="flex items-center gap-2 pb-2">
                <SiFirebase />
                Firebase
              </span>
              <span className="flex items-center gap-2 pb-2">
                <SiWordpress />
                WordPress
              </span>
              <span className="flex items-center gap-2 pb-2">
                <SiWoocommerce />
                WooCommerce
              </span>
              <span className="flex items-center gap-2 pb-2">
                <SiFigma />
                Figma
              </span>
              <span className="flex items-center gap-2 pb-2">
                <SiWindowsterminal />
                Terminal
              </span>
              <span className="flex items-center gap-2 pb-2">
                <SiGithub />
                GitHub
              </span>
              <span className="flex items-center gap-2 pb-2">
                <SiNotion />
                Notion
              </span>
              <span className="flex items-center gap-2 pb-2">
                <SiTrello />
                Trello
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* cuerpo principal */}
      <section className="col-span-9 md:col-span-8 xl:col-span-8 px-8 py-4 border-l border-border">
        {/* about */}
        <div>
          <h5 className="relative uppercase font-extrabold before:w-3 before:h-3 before:absolute before:bg-border before:border-2 before:border-background-secondary before:rounded-full before:-left-[38.5px] before:top-[50%] before:-translate-y-[50%] my-4">
            Sobre mi
          </h5>
          <p className="text-muted-foreground text-sm text-justify">
            Como desarrollador, poseo habilidades y experiencia en la creación
            de apps web y móviles. Mi enfoque se centra en lo técnico y en la
            constante mejora. Tengo la capacidad de diseñar y desarrollar
            aplicaciones eficientes, intuitivas y visualmente atractivas. Mi
            pasión por la industria me impulsa a mantenerme al tanto de las
            últimas tendencias y avances en el campo del desarrollo. Siempre
            estoy en busca de oportunidades para explorar nuevas tecnologías y
            aplicarlas en mis proyectos. Considero que tengo la capacidad de
            resolver problemas, enfrentar desafíos y entregar resultados de
            calidad. Además, disfruto colaborar con equipos de diferentes áreas
            y aprender de ellos, lo que me permite seguir creciendo como
            profesional.
          </p>
        </div>

        {/* educacion */}
        <div>
          <h5 className="relative uppercase font-extrabold before:w-3 before:h-3 before:absolute before:bg-border before:border-2 before:border-background-secondary before:rounded-full before:-left-[38.5px] before:top-[50%] before:-translate-y-[50%] my-4">
            Educación
          </h5>
          <ul>
            {/* educacion 1 */}
            <li className="mb-8">
              <h4 className="text-sm font-bold uppercase mb-4">
                Frontend Developer con React Js
              </h4>
              <div className="flex items-center gap-4 mb-4 text-xs">
                <span className="font-extrabold">Platzi</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-muted-foreground">
                  El curso de Front-end Developer de Platzi es un programa
                  completo que enseña los conceptos y herramientas necesarias
                  para desarrollar aplicaciones web modernas y atractivas. Los
                  temas incluidos en este curso son HTML, CSS, JavaScript,
                  React, entre otros. Validé habilidades para crear páginas web
                  interactivas, animaciones, y aplicaciones dinámicas con una
                  experiencia de usuario atractiva. Además, profundicé en temas
                  avanzados como el manejo de datos y la optimización de
                  aplicaciones web para diferentes dispositivos.
                </span>
              </div>
            </li>

            {/* educacion 2 */}
            <li className="mb-8">
              <h4 className="text-sm font-bold uppercase mb-4">
                Curso practico de Next Js
              </h4>
              <div className="flex items-center gap-4 mb-4 text-xs">
                <span className="font-extrabold">Platzi</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-muted-foreground">
                  Configuré su entorno de desarrollo. Aprendí a cómo migrar
                  proyectos de React.js y Webpack a Next.js. También a integrar
                  Google Analytics, convertir una app en PWA, mejora el SEO y
                  hacer el deploy en Vercel. Comprendí las ventajas y
                  características de Next.js, como si SSR, optimización de
                  imágenes, etc.
                </span>
              </div>
            </li>

            {/* educacion 3 */}
            <li className="mb-8">
              <h4 className="text-sm font-bold uppercase mb-4">
                Desarrollador FullStack
              </h4>
              <div className="flex items-center gap-4 mb-4 text-xs">
                <span className="font-extrabold">APX School</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-muted-foreground">
                  En APX School, estoy aprendiendo una amplia gama de
                  habilidades y conocimientos en el campo de la tecnología.
                  Desde desarrollo de software hasta diseño de interfaces, bases
                  de datos, frontend, backend y metodologías ágiles; me proveerá
                  de las herramientas necesarias para tener éxito en el mercado
                  laboral de la tecnología.
                </span>
              </div>
            </li>
          </ul>
        </div>

        {/* experiencia */}
        <div>
          <h5 className="relative uppercase font-extrabold before:w-3 before:h-3 before:absolute before:bg-border before:border-2 before:border-background-secondary before:rounded-full before:-left-[38.5px] before:top-[50%] before:-translate-y-[50%] my-4">
            Experiencia
          </h5>
          <ul>
            {/* experiencia 1 */}
            <li className="mb-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold uppercase">
                  Desarrollador Frontend Mobile - Freelance
                </span>
                <span className="text-xs font-bold">Junio 2024 - Presente</span>
              </div>
              <p className="text-muted-foreground text-sm text-justify">
                Desarrollo y mantenimiento de una aplicación móvil para el
                control y cuidado de adultos mayores utilizando React Native.
                Implementación de nuevas funcionalidades y optimización de la
                aplicación para mejorar la experiencia del usuario. Integración
                de APIs RESTful para la comunicación con el backend.
                Colaboración con el equipo de diseño para la implementación de
                interfaces de usuario intuitivas y accesibles utilizando
                Gluestack UI. Uso de Typescript para asegurar la tipificación
                estricta y reducir errores en el código.
              </p>
            </li>

            {/* experiencia 2 */}
            <li className="mb-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold uppercase">
                  Desarrollador Frontend - Freelance
                </span>
                <span className="text-xs font-bold">
                  Febrero 2023 - Presente
                </span>
              </div>
              <p className="text-muted-foreground text-sm text-justify">
                Desarrollo de aplicaciones web dinámicas y responsivas
                utilizando React y Next.js. Implementación de estilos y diseño
                de interfaces con Tailwind CSS, garantizando una experiencia de
                usuario consistente en diferentes dispositivos. Colaboración con
                desarrolladores backend para integrar servicios y mejorar el
                rendimiento de las aplicaciones. Creación de componentes
                reutilizables y modulares para optimizar el desarrollo y
                facilitar el mantenimiento del código. Participación en
                revisiones de código y adopción de mejores prácticas para
                asegurar la calidad del código.
              </p>
            </li>

            {/* experiencia 3 */}
            <li className="mb-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold uppercase">
                  Developer Web - Myfuture-AI
                </span>
                <span className="text-xs font-bold">
                  Marzo 2022 - Mayo 2023
                </span>
              </div>
              <p className="text-muted-foreground text-sm text-justify">
                Uso de frameworks de CSS para estilizar y mejorar la usabilidad
                de las aplicaciones web. Colaboración con equipos de desarrollo
                para integrar modelos de IA en las interfaces de usuario.
                Pruebas de usabilidad y recopilación de feedback para mejorar
                continuamente las interfaces de usuario.
              </p>
            </li>
          </ul>
          <div className="flex justify-end mt-12 text-xl font-semibold text-blue-500/70 hover:text-blue-300">
            <Link href="/">
              <div className="flex justify-center items-center gap-1">
                <MdOutlineArrowBackIos className="text-md self-center" />

                <h3>Volver</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Curriculum;
