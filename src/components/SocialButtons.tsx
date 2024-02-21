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
    <button className="flex items-center justify-center w-10 h-10 border-2 border-black rounded-md hover:bg-black transition-all duration-300">
      <Icon size={size} className='hover:text-white'/>
    </button>
  );
}
