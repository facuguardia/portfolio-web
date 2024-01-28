import React from "react";
import Link from "next/link";
import Image from "next/image";

import { BiLinkExternal } from "react-icons/bi";

import Image1 from "../assets/project-1.jpg";
import Image2 from "../assets/project-4.jpg";
import Image3 from "../assets/project-2.jpeg";

function Project() {
  return (
    <div
      id="projects"
      className="bg-black w-screen flex flex-col items-center pt-24 pb-10"
    >
      <h1 className="text-2xl text-white">
        My <strong>Projects</strong>
      </h1>
      {/* Project 1 */}
      <div className="flex flex-col items-center">
        <div className="w-[90%] mt-10 rounded-xl border border-white">
          <Image
            src={Image1}
            alt="image project"
            width={390}
            height={398}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col items-start gap-5 py-5 px-5">
          <div className="">
            <h2 className="text-white text-xl font-semibold">01</h2>
          </div>
          <div>
            <h1 className="text-white text-xl font-semibold">Pokedex App</h1>
          </div>
          <div>
            <p className="text-gray-500">
              La Pokedex App es una aplicación móvil desarrollada con React
              Native CLI y StyleSheet. Utilizando la API de Pokémon, he creado
              una aplicación que muestra un listado de Pokémon con la
              funcionalidad de scroll infinito. Además, la app incluye opciones
              de filtrado para encontrar rápidamente tu Pokémon favorito por
              nombre o ID. La combinación de tecnologías garantiza una
              experiencia móvil intuitiva y atractiva.
            </p>
          </div>
          <div>
            <Link
              href="https://github.com/facuguardia/PokedexNative"
              target="_blank"
              className="hover:text-blue-500"
            >
              <BiLinkExternal size={20} className="text-white" />
            </Link>
          </div>
        </div>
      </div>
      {/* Project 2 */}
      <div className="flex flex-col items-center">
        <div className="mt-10 rounded-xl border border-white">
          <Image
            src={Image2}
            alt="image project"
            width={400}
            height={398}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col items-start gap-5 py-5 px-5">
          <div className="">
            <h2 className="text-white text-xl font-semibold">02</h2>
          </div>
          <div>
            <h1 className="text-white text-xl font-semibold">Movie App</h1>
          </div>
          <div>
            <p className="text-gray-500">
              Desarrollada con React Native CLI y StyleSheet, la Movie App
              utiliza la API de Themoviedb para ofrecer una experiencia
              cinematográfica única. Destacando por su interfaz atractiva, el
              fondo de la misma cambia de manera dinámica mientras deslizamos
              entre las tarjetas del carousel. Cada película presenta un detalle
              completo, brindando a los usuarios una visión detallada y
              envolvente de la información cinematográfica.
            </p>
          </div>
          <div>
            <Link
              href="https://github.com/facuguardia/CineApp"
              target="_blank"
              className="hover:text-blue-500"
            >
              <BiLinkExternal size={20} className="text-white" />
            </Link>
          </div>
        </div>
      </div>
      {/* Project 3 */}
      <div className="flex flex-col items-center">
        <div className="mt-10 rounded-xl border border-white">
          <Image
            src={Image3}
            alt="image project"
            width={400}
            height={398}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col items-start gap-5 py-5 px-5">
          <div className="">
            <h2 className="text-white text-xl font-semibold">03</h2>
          </div>
          <div>
            <h1 className="text-white text-xl font-semibold">TareaNova</h1>
          </div>
          <div>
            <p className="text-gray-500">
              TareaNova es un proyecto completo desarrollado con Next.js,
              Tailwind CSS y Prisma. Como un CRUD de tareas fullstack, he creado
              tanto el frontend como el backend, aprovechando al máximo las
              ventajas que ofrece Next.js. La integración de estas tecnologías
              permite una experiencia fluida y eficiente, proporcionando un
              entorno de desarrollo robusto y altamente funcional.
            </p>
          </div>
          <div>
            <Link
              href="https://github.com/facuguardia/task-app-crud"
              target="_blank"
              className="hover:text-blue-500"
            >
              <BiLinkExternal size={20} className="text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
