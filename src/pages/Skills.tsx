import React from "react";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGithub,
  SiTypescript,
  SiNodedotjs,
  SiFirebase,
  SiPostgresql,
  SiExpress,
  SiWordpress,
  SiWoocommerce,
} from "react-icons/si";

import CardSkills from "@/components/CardSkills";

function Skills() {
  return (
    <div
      id="skills"
      className="container mx-auto flex flex-col items-center justify-between pt-24 pb-10"
    >
      <h1 className="pb-10 text-2xl">
        Mis<strong> Habilidades</strong>
      </h1>
      <div className="">
        <div className="grid grid-cols-2 gap-8 px-3 md:grid-cols-4 lg:grid-cols-5">
          <CardSkills icon={SiJavascript} size={50} title="Javascript" />
          <CardSkills icon={SiTypescript} size={50} title="Typescript" />
          <CardSkills icon={SiReact} size={50} title="React" />
          <CardSkills icon={SiNextdotjs} size={50} title="Next.js" />
          <CardSkills icon={SiTailwindcss} size={50} title="Tailwind CSS" />
          <CardSkills icon={SiNodedotjs} size={50} title="Node.js" />
          <CardSkills icon={SiExpress} size={50} title="Express" />
          <CardSkills icon={SiPostgresql} size={50} title="PostgreSQL" />
          <CardSkills icon={SiFirebase} size={50} title="Firebase" />
          <CardSkills icon={SiGithub} size={50} title="Github" />
          <CardSkills icon={SiWordpress} size={50} title="Wordpress" />
          <CardSkills icon={SiWoocommerce} size={50} title="Woocommerce" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
