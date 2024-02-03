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
    <div className="md:w-[90%] p-5 flex flex-col items-center md:items-start border border-white rounded-md">
      <div className="flex items-center gap-5">
        <Icon size={size} className="hover:text-white" />
        <h1 className="text-xl font-semibold text-white">{title}</h1>
      </div>
      <div className="flex flex-col items-start justify-start gap-5">
        <h5 className="mt-5 text-sm text-gray-500">{data}</h5>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
}
