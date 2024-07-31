import React from "react";

import Image1 from "../assets/project-1.jpg";
import Image2 from "../assets/project-2.jpg";
import Image3 from "../assets/project-3.jpeg";
import Image4 from "../assets/project-4.jpg";
import Image5 from "../assets/project-5.jpeg";
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
        description="La Pokedex App es una aplicación móvil que permite a los usuarios explorar un listado completo de Pokémon con facilidad. Gracias a la funcionalidad de scroll infinito y opciones de filtrado, los usuarios pueden encontrar rápidamente su Pokémon favorito por nombre o ID. La aplicación ofrece una experiencia intuitiva y atractiva, aprovechando al máximo la API de Pokémon para brindar información detallada y accesible sobre cada criatura."
        urlDeploy="https://www.youtube.com/watch?v=UCJ6Z6uGsbg"
        urlGithub="https://github.com/facuguardia/PokedexNative"
        image={Image1}
      />

      {/* Project 2 */}

      <CardProject
        title="Movie App"
        description="La Movie App es una aplicación que ofrece una experiencia cinematográfica única. Con una interfaz atractiva y dinámica, el fondo cambia mientras se desliza entre las tarjetas de películas, creando una experiencia visual envolvente. Cada película incluye detalles completos, brindando a los usuarios una visión profunda de la información cinematográfica. Desarrollada para aprovechar al máximo la API de Themoviedb, la Movie App combina funcionalidad y diseño para los amantes del cine."
        urlDeploy="https://www.youtube.com/watch?v=HkO_-qnwKtM"
        urlGithub="https://github.com/facuguardia/CineApp"
        image={Image2}
      />

      {/* Project 3 */}
      <CardProject
        title="TareaNova"
        description="TareaNova es un proyecto integral que facilita la gestión de tareas de manera eficiente y organizada. He desarrollado tanto el frontend como el backend, asegurando una experiencia de usuario fluida y efectiva. La plataforma permite a los usuarios crear, leer, actualizar y eliminar tareas de forma sencilla, optimizando su productividad. Gracias a la integración de tecnologías modernas, TareaNova ofrece un entorno robusto y altamente funcional, diseñado para satisfacer las necesidades de quienes buscan una herramienta confiable para la gestión de tareas diarias."
        urlDeploy="https://task-app-crud-next.vercel.app/"
        urlGithub="https://github.com/facuguardia/task-app-crud"
        image={Image3}
      />

        {/* Project 4 */}
        <CardProject
        title="H2O Deportiva"
        description="Una empresa que busca expandir su presencia online mediante un enfoque escalonado. En la primera fase, he desarrollado una landing page destacando los productos más populares, facilitando la compra a través de un enlace a Mercado Pago. Además, se resalta la oferta mayorista para revendedores. La segunda etapa, actualmente en desarrollo, incluirá una página de compra con pasarela de pagos y carrito de compras, brindando una experiencia completa de comercio electrónico."
        urlDeploy="https://h2o-deportiva.netlify.app/"
        urlGithub="https://github.com/facuguardia/h2o-deportiva"
        image={Image4}
      />

      {/* Project 4 */}
      <CardProject
        title="Nails Queen"
        description="Un negocio dedicado al cuidado y embellecimiento de uñas, busca fortalecer su presencia digital y atraer nuevos clientes. En esta primera fase, he diseñado una moderna y atractiva landing page que destaca los servicios ofrecidos, incluyendo manicura, pedicura y tratamientos especializados. La página también muestra los valores de cada servicio de manera clara y accesible. Además, he implementado una funcionalidad que permite a los usuarios reservar citas en línea de manera rápida y sencilla, mejorando la experiencia del cliente y optimizando la gestión de reservas del negocio."
        urlDeploy="#"
        urlGithub="#"
        image={Image5}
      />
      </div>
    </div>
  );
}

export default Project;
