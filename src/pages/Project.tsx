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
      className="flex flex-col items-center w-screen pt-24 pb-24 bg-black"
    >
      <div className="container mx-auto">
        {/* Project 1 */}
        {/* <CardProject
          title="Poke App"
          description="La Poke App es una aplicación móvil que permite a los usuarios explorar fácilmente un listado completo de Pokémon. Con su funcionalidad de scroll infinito y opciones de filtrado, los usuarios pueden encontrar rápidamente su Pokémon favorito por nombre o ID. La aplicación ofrece una experiencia intuitiva y atractiva, aprovechando al máximo la API de Pokémon para proporcionar información detallada y accesible sobre cada criatura."
          urlDeploy="https://www.youtube.com/watch?v=UCJ6Z6uGsbg"
          urlGithub="https://github.com/facuguardia/PokedexNative"
          image={Image1}
        /> */}

        {/* Project 2 */}

        {/* <CardProject
          title="Movie App"
          description="La Movie App ofrece una experiencia cinematográfica única con una interfaz atractiva y dinámica. El fondo cambia al deslizarse entre las tarjetas de películas, creando una experiencia visual inmersiva. Cada película incluye detalles completos, proporcionando a los usuarios una visión detallada de la información cinematográfica. Desarrollada para aprovechar al máximo la API de Themoviedb, la Movie App combina funcionalidad y diseño para satisfacer a los amantes del cine."
          urlDeploy="https://www.youtube.com/watch?v=HkO_-qnwKtM"
          urlGithub="https://github.com/facuguardia/CineApp"
          image={Image2}
        /> */}

        {/* Project 3 */}
        <CardProject
          title="TareaNova"
          description="TareaNova es una solución integral que facilita la gestión de tareas de manera eficiente y organizada. He desarrollado tanto el frontend como el backend, garantizando una experiencia de usuario fluida y efectiva. La plataforma permite a los usuarios crear, leer, actualizar y eliminar tareas de forma sencilla, optimizando su productividad. Gracias a la integración de tecnologías modernas, TareaNova ofrece un entorno robusto y altamente funcional, diseñado para aquellos que buscan una herramienta confiable para gestionar sus tareas diarias."
          urlDeploy="https://task-app-crud-next.vercel.app/"
          urlGithub="https://github.com/facuguardia/task-app-crud"
          image={Image3}
        />

        {/* Project 4 */}
        <CardProject
          title="H2O Deportiva"
          description="Una empresa que busca ampliar su presencia online mediante un enfoque gradual. En la primera fase, hemos desarrollado una landing page que destaca los productos más populares y facilita la compra a través de un enlace a Mercado Pago. Además, se pone de relieve la oferta mayorista para revendedores. La segunda etapa, actualmente en desarrollo, incluirá una página de compra con pasarela de pagos y carrito de compras, ofreciendo una experiencia completa de comercio electrónico."
          urlDeploy="https://h2o-deportiva.netlify.app/"
          urlGithub="https://github.com/facuguardia/h2o-deportiva"
          image={Image4}
        />

        {/* Project 4 */}
        <CardProject
          title="Nails Queen"
          description="Un negocio especializado en el cuidado y embellecimiento de uñas busca fortalecer su presencia digital y atraer nuevos clientes. En esta primera fase, he diseñado una landing page moderna y atractiva que destaca los servicios ofrecidos, incluyendo manicura, pedicura y tratamientos especializados. La página muestra los precios de cada servicio de manera clara y accesible. Además, he implementado una funcionalidad que permite a los usuarios reservar citas en línea de forma rápida y sencilla, mejorando la experiencia del cliente y optimizando la gestión de reservas del negocio."
          urlDeploy="#"
          urlGithub="#"
          image={Image5}
        />
      </div>
    </div>
  );
}

export default Project;
