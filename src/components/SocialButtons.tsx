import React from "react";
import { IconType } from "react-icons/lib";

interface SocialButtonsProps {
  icon: IconType;
  size: number;
}

export default function SocialButtons({
  icon: Icon,
  size,
}: SocialButtonsProps) {
  return (
    <button className="flex items-center justify-center  hover:text-gray-400 transition-all duration-300 shadow-2xl">
      <Icon size={size}/>
    </button>
  );
}
