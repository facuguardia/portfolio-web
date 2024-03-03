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
    <button className="flex items-center justify-center p-2 border-2 rounded-md border-black hover:bg-black hover:text-white transition-all duration-300 ease-in-out shadow-md">
      <Icon size={size}/>
    </button>
  );
}
