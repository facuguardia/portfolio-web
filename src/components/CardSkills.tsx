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
    <button className="flex flex-col items-center w-40 h-40 border-2 border-white text-white rounded-md justify-evenly shadow-xl">
      <Icon size={size} />
      <h3 className="text-lg font-semibold">{title}</h3>
    </button>
  );
}
