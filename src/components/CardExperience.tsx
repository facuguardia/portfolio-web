import React from "react";
import { IconType } from "react-icons/lib";

interface CardExperienceProps {
  icon: IconType;
  title: string;
  description: string;
  data: string;
  size: number;
}

export default function CardExperience({
  icon: Icon,
  size,
  title,
  description,
  data,
}: CardExperienceProps) {
  return (
    <div className="w-80 h-auto p-5 flex flex-col items-start border border-white rounded-md">
      <div className="flex items-center gap-5">
        <Icon size={size} className="hover:text-white" />
        <h1 className="text-white text-xl font-semibold">{title}</h1>
      </div>
      <div className="flex flex-col justify-start items-start gap-5">
        <h5 className="text-white text-sm mt-5">{data}</h5>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}
