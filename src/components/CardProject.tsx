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
    <div className="flex flex-col items-center justify-center md:flex-row-reverse md:justify-center md:items-center w-screen lg:w-[100%]">
      <div className="w-[90%] md:w-[40%] mt-10 rounded-xl border border-white">
        <Image
          src={image}
          alt="image project"
          width={390}
          height={398}
          className="w-screen rounded-xl"
        />
      </div>
      <div className="w-[90%] md:w-[45%] flex flex-col items-start gap-5 py-5">
        <div>
          <h1 className="text-xl font-semibold text-gray-300">{title}</h1>
        </div>
        <div>
          <p className="mr-5 text-gray-300 font-light">{description}</p>
        </div>
        <div className="flex items-center justify-start gap-3">
          <Link
            href={urlDeploy}
            target="_blank"
          >
            <BiLinkExternal size={20} className="text-gray-300 hover:text-green-500 transition-all duration-300 ease-in-out" />
          </Link>
          <Link
            href={urlGithub}
            target="_blank"
          >
            <BiLogoGithub size={20} className="text-gray-300 hover:text-green-500 transition-all duration-300 ease-in-out" />
          </Link>
        </div>
      </div>
    </div>
  );
};
