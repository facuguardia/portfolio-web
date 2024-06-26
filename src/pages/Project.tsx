import React from "react";

import Image1 from "../assets/project-1.jpg";
import Image2 from "../assets/project-2.jpg";
import Image3 from "../assets/project-3.jpeg";
import Image4 from "../assets/project-4.jpg";
import { CardProject } from "@/components/CardProject";

function Project() {
  return (
    <div
      id="projects"
      className="flex flex-col items-center w-screen pt-24 pb-10 bg-black"
    >
      <div className="container mx-auto">

      {/* Project 1 */}
      <CardProject
        title="Pokedex App"
        description="La Pokedex App es una aplicación móvil desarrollada con React Native CLI y StyleSheet. Utilizando la API de Pokémon, he creado una aplicación que muestra un listado de Pokémon con la funcionalidad de scroll infinito. Además, la app incluye opciones de filtrado para encontrar rápidamente tu Pokémon favorito por nombre o ID. La combinación de tecnologías garantiza una experiencia móvil intuitiva y atractiva."
        urlDeploy="https://www.youtube.com/watch?v=UCJ6Z6uGsbg"
        urlGithub="https://github.com/facuguardia/PokedexNative"
        image={Image1}
      />

      {/* Project 2 */}

      <CardProject
        title="Movie App"
        description="Desarrollada con React Native CLI y StyleSheet, la Movie App utiliza la API de Themoviedb para ofrecer una experiencia cinematográfica única. Destacando por su interfaz atractiva, el fondo de la misma cambia de manera dinámica mientras deslizamos entre las tarjetas del carousel. Cada película presenta un detalle completo, brindando a los usuarios una visión detallada y envolvente de la información cinematográfica."
        urlDeploy="https://www.youtube.com/watch?v=HkO_-qnwKtM"
        urlGithub="https://github.com/facuguardia/CineApp"
        image={Image2}
      />

      {/* Project 3 */}
      <CardProject
        title="TareaNova"
        description="TareaNova es un proyecto completo desarrollado con Next.js, Tailwind CSS y Prisma. Como un CRUD de tareas fullstack, he creado tanto el frontend como el backend, aprovechando al máximo las ventajas que ofrece Next.js. La integración de estas tecnologías permite una experiencia fluida y eficiente, proporcionando un entorno de desarrollo robusto y altamente funcional."
        urlDeploy="https://task-app-crud-next.vercel.app/"
        urlGithub="https://github.com/facuguardia/task-app-crud"
        image={Image3}
      />

        {/* Project 4 */}
        <CardProject
        title="Landing Page de H2O Deportiva"
        description="El proyecto para H2O Deportiva, una empresa que busca expandir su presencia online mediante un enfoque escalonado. En la primera fase, hemos desarrollado una atractiva landing page destacando los productos más populares, facilitando la compra a través de un enlace a Mercado Pago. Además, se resalta la oferta mayorista para revendedores. La segunda etapa, actualmente en desarrollo, incluirá una página de compra con pasarela de pagos y carrito de compras, brindando una experiencia completa de comercio electrónico."
        urlDeploy="https://h2o-deportiva.netlify.app/"
        urlGithub="https://github.com/facuguardia/h2o-deportiva"
        image={Image4}
      />
      </div>
    </div>
  );
}

export default Project;
