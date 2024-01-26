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
    <button className="hover:bg-black w-10 h-10 flex justify-center items-center border-2 border-black rounded-md">
      <Icon size={size} className='hover:text-white'/>
    </button>
  );
}
