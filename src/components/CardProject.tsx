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
    <div className="flex flex-col md:flex-row-reverse md:justify-center items-start md:items-center mx-5">
      <div className="w-[80%] md:w-[40%] mt-10 rounded-xl border border-white">
        <Image
          src={image}
          alt="image project"
          width={390}
          height={398}
          className="rounded-xl w-screen"
        />
      </div>
      <div className="w-[100%] md:w-[50%] flex flex-col items-start gap-5 py-5">
        <div>
          <h1 className="text-white text-xl font-semibold">{title}</h1>
        </div>
        <div>
          <p className="text-gray-500 mr-5">{description}</p>
        </div>
        <div className="flex justify-start items-center gap-3">
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
