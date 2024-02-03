import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";

interface CardProjectProps {
  title: string;
  description: string;
  urlDeploy: string;
  urlGithub: string;
  image: StaticImageData;
}

export const CardProject = ({
  title,
  description,
  urlDeploy,
  urlGithub,
  image,
}: CardProjectProps) => {
  return (
    <div className="flex flex-col items-start mx-5 md:flex-row-reverse md:justify-center md:items-center">
      <div className="w-[80%] md:w-[40%] mt-10 rounded-xl border border-white">
        <Image
          src={image}
          alt="image project"
          width={390}
          height={398}
          className="w-screen rounded-xl"
        />
      </div>
      <div className="w-[100%] md:w-[50%] flex flex-col items-start gap-5 py-5">
        <div>
          <h1 className="text-xl font-semibold text-white">{title}</h1>
        </div>
        <div>
          <p className="mr-5 text-gray-500">{description}</p>
        </div>
        <div className="flex items-center justify-start gap-3">
          <Link
            href={urlDeploy}
            target="_blank"
          >
            <BiLinkExternal size={20} className="text-white hover:text-blue-500" />
          </Link>
          <Link
            href={urlGithub}
            target="_blank"
          >
            <BiLogoGithub size={20} className="text-white hover:text-blue-500" />
          </Link>
        </div>
      </div>
    </div>
  );
};
