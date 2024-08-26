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
    <div>
      <div className="flex flex-col justify-center items-center">
        <Icon size={size} />
        <h1 className="mt-2 text-2xl font-semibold text-white">{title}</h1>
      </div>
    </div>
  );
}
