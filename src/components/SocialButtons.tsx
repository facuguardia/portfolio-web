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
    <button className="flex items-center justify-center hover:text-green-500 transition-all duration-300 ease-in-out">
      <Icon size={size} />
    </button>
  );
}
