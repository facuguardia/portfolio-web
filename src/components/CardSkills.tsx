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
    <button className="hover:bg-black hover:text-white w-40 h-40 flex flex-col justify-evenly items-center border-2 border-black rounded-md">
      <Icon size={size} className='hover:text-white'/>
      <h3 className="text-lg font-semibold">{title}</h3>
    </button>
  );
}
