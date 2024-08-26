import React from "react";
import { IconType } from "react-icons/lib";

interface CardExperienceProps {
  icon: IconType;
  title: string;
  size: number;
}

export default function CardExperience({
  icon: Icon,
  size,
  title,
}: CardExperienceProps) {
  return (
    <div className="border-2 border-slate-100 rounded-xl py-8 px-4 w-[300px] h-[250px]">
      <div className="flex flex-col justify-center items-center">
        <Icon size={size} />
        <h1 className="mt-2 text-2xl font-semibold text-white">{title}</h1>
      </div>
    </div>
  );
}
