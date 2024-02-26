import React from "react";
import { IconType } from "react-icons/lib";

interface CardSkillsProps {
  icon: IconType;
  size: number;
  title: string;
}

export default function CardSkills({
  icon: Icon,
  size,
  title,
}: CardSkillsProps) {
  return (
    <button className="flex flex-col items-center w-40 h-40 border-2 border-black rounded-md hover:bg-black hover:text-white transition-all duration-300 justify-evenly shadow-xl">
      <Icon size={size} className='hover:text-white'/>
      <h3 className="text-lg font-semibold">{title}</h3>
    </button>
  );
}
