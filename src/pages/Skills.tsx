import React from 'react'
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiChakraui,
  SiTailwindcss,
  SiGithub,
  SiFigma,
  SiTypescript,
  SiNodedotjs,
  SiFirebase,
  SiContentful,
  SiMysql,
  SiPostgresql,
  SiExpress,
} from "react-icons/si";

import CardSkills from '@/components/CardSkills'

function Skills() {
  return (
    <div id="skills" className='w-scrren flex flex-col justify-center items-center pt-24 pb-10'>
      <h1 className='text-2xl pb-10'>My<strong> Skills</strong></h1>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 px-5'>
        <CardSkills icon={SiJavascript} size={50} title='Javascript' />
        <CardSkills icon={SiTypescript} size={50} title='Typescript' />
        <CardSkills icon={SiReact} size={50} title='React' />
        <CardSkills icon={SiNextdotjs} size={50} title='Next.js' />
        <CardSkills icon={SiChakraui} size={50} title='Chakra UI' />
        <CardSkills icon={SiTailwindcss} size={50} title='Tailwind CSS' />
        <CardSkills icon={SiNodedotjs} size={50} title='Node.js' />
        <CardSkills icon={SiExpress} size={50} title='Express' />
        <CardSkills icon={SiPostgresql} size={50} title='PostgreSQL' />
        <CardSkills icon={SiMysql} size={50} title='MySQL' />
        <CardSkills icon={SiFirebase} size={50} title='Firebase' />
        <CardSkills icon={SiContentful} size={50} title='Contentful' />
        <CardSkills icon={SiGithub} size={50} title='Github' />
        <CardSkills icon={SiFigma} size={50} title='Figma' />
      </div>
    </div>
  )
}

export default Skills