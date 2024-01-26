import React from 'react'
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiChakraui,
  SiTailwindcss,
  SiFramer,
  SiGithub,
  SiFigma,
  SiTypescript,
  SiNodedotjs,
  SiFirebase
} from "react-icons/si";

import CardSkills from '@/components/CardSkills'

export const Skills = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-16 mb-10'>
      <h1 className='text-2xl pb-10'>My<strong> Skills</strong></h1>
      <div className='grid grid-cols-2 gap-8 '>
        <CardSkills icon={SiJavascript} size={50} title='Javascript' />
        <CardSkills icon={SiTypescript} size={50} title='Typescript' />
        <CardSkills icon={SiReact} size={50} title='React' />
        <CardSkills icon={SiNextdotjs} size={50} title='Next.js' />
        <CardSkills icon={SiNodedotjs} size={50} title='Node.js' />
        <CardSkills icon={SiChakraui} size={50} title='Chakra UI' />
        <CardSkills icon={SiTailwindcss} size={50} title='Tailwind CSS' />
        <CardSkills icon={SiFramer} size={50} title='Framer Motion' />
        <CardSkills icon={SiGithub} size={50} title='Github' />
        <CardSkills icon={SiFigma} size={50} title='Figma' />
      </div>
    </div>
  )
}
