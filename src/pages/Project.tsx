import React from "react";

import Image1 from "../assets/project-3.jpeg";
import Image2 from "../assets/project-4.jpg";
import Image3 from "../assets/project-5.jpeg";
import Image4 from "../assets/project-6.png";
import Image5 from "../assets/project-7.jpg";
import { CardProject } from "@/components/CardProject";

function Project() {
  return (
    <div
      id="projects"
      className="flex flex-col items-center w-screen pt-24 pb-24 bg-black"
    >
      <div className="container mx-auto">
        {/* Project 1 */}
        <CardProject
          title="TareaNova"
          description="TareaNova es una solución integral que facilita la gestión de tareas de manera eficiente y organizada. He desarrollado tanto el frontend como el backend, garantizando una experiencia de usuario fluida y efectiva. La plataforma permite a los usuarios crear, leer, actualizar y eliminar tareas de forma sencilla, optimizando su productividad. Gracias a la integración de tecnologías modernas, TareaNova ofrece un entorno robusto y altamente funcional, diseñado para aquellos que buscan una herramienta confiable para gestionar sus tareas diarias."
          urlDeploy="https://task-app-crud-next.vercel.app/"
          image={Image1}
        />

        {/* Project 2 */}
        <CardProject
          title="H2O Deportiva"
          description="Una empresa que busca ampliar su presencia online mediante un enfoque gradual. En la primera fase, hemos desarrollado una landing page que destaca los productos más populares y facilita la compra a través de un enlace a Mercado Pago. Además, se pone de relieve la oferta mayorista para revendedores. La segunda etapa, actualmente en desarrollo, incluirá una página de compra con pasarela de pagos y carrito de compras, ofreciendo una experiencia completa de comercio electrónico."
          urlDeploy="https://h2o-deportiva.netlify.app/"
          image={Image2}
        />

        {/* Project 3 */}
        <CardProject
          title="Nails Queen"
          description="Un negocio especializado en el cuidado y embellecimiento de uñas busca fortalecer su presencia digital y atraer nuevos clientes. En esta primera fase, he diseñado una landing page moderna y atractiva que destaca los servicios ofrecidos, incluyendo manicura, pedicura y tratamientos especializados. La página muestra los precios de cada servicio de manera clara y accesible. Además, he implementado una funcionalidad que permite a los usuarios reservar citas en línea de forma rápida y sencilla, mejorando la experiencia del cliente y optimizando la gestión de reservas del negocio."
          urlDeploy="#"
          image={Image3}
        />

        {/* Project 4 */}
        <CardProject
          title="Company Manager Panel - SaaS"
          description="Nuestro sistema SaaS simplifica la gestión empresarial y el análisis de interacciones digitales. Desde un único panel, puedes monitorear la tasa de rebote en redes sociales y sitios web, administrar la información de cada empresa, y agendar tareas o eventos asignados a ellas. Además, el panel de Analíticas ofrece un gráfico claro de eventos por empresa, facilitando un seguimiento eficaz y una toma de decisiones basada en datos. Todo está diseñado para optimizar la organización y crecimiento de tu negocio."
          urlDeploy="https://admin-companies.netlify.app"
          image={Image4}
        />

        {/* Project 5 */}
        <CardProject
          title="Patito Media - Agencia Digital en Motril, España"
          description="Creé el sitio web para Patito Media, una agencia digital especializada en marketing, diseño web, y producción audiovisual. El diseño está pensado para reflejar su carácter creativo y profesional, integrando una paleta moderna y una estructura interactiva. El hero, con un mensaje dinámico, captura la esencia multifacética de la agencia, mientras que secciones específicas destacan sus valores clave de confianza, eficiencia y creatividad. Además, implementé modos de visualización claro y oscuro, y añadí componentes personalizados, como un carrusel de clientes y una presentación del equipo, para mejorar la experiencia de usuario y accesibilidad."
          urlDeploy="https://website-patitomedia.vercel.app/"
          image={Image5}
        />
      </div>
    </div>
  );
}

export default Project;
