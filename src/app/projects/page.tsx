"use client";

import { useState, useEffect } from "react";
import CardPageProject from "@/components/CardPageProject";

function Projects() {
  const [data, setData] = useState([]);

  const urlApi = process.env.API_URL || '';

  useEffect(() => {
    fetch(urlApi)
      .then((response) => response.json())
      .then((data) => {
        const projects = data.items || [];
        const images = data.includes.Asset || [];
        const projectsWithImages = projects.map((project: any) => {
          const imageId = project.fields.image.sys.id;
          const image = images.find((img: any) => img.sys.id === imageId);

          return {
            ...project,
            imageUrl: image?.fields?.file?.url || null,
          };
        });
        setData(projectsWithImages);
      });
  }, [urlApi]);

  return (
    <div className="w-auto h-screen p-4">
      <section>
        <div>
          <CardPageProject data={data} />
        </div>
      </section>
    </div>
  );
}

export default Projects;