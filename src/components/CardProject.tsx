import React from 'react'
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";

interface CardProjectProps {
  id: string;
  title: string;
  description: string;
  urlDeploy: string;
  urlGithub: string;
  image: StaticImageData;
}

export const CardProject = ({ id, title, description, urlDeploy, urlGithub, image }: CardProjectProps) => {
  return (
    <div className="flex flex-col items-center">
<div className="w-[90%] mt-10 rounded-xl border border-white">
  <Image
    src={image}
    alt="image project"
    width={390}
    height={398}
    className="rounded-xl"
  />
</div>
<div className="flex flex-col items-start gap-5 py-5 px-5">
  <div className="">
    <h2 className="text-white text-xl font-semibold">{id}</h2>
  </div>
  <div>
    <h1 className="text-white text-xl font-semibold">{title}</h1>
  </div>
  <div>
    <p className="text-gray-500">
      {description}
    </p>
  </div>
  <div className="flex justify-start items-center gap-3">
    <Link
      href={urlDeploy}
      target="_blank"
      className="hover:text-blue-500"
    >
      <BiLinkExternal size={20} className="text-white" />
    </Link>
    <Link
      href={urlGithub}
      target="_blank"
      className="hover:text-blue-500"
    >
      <BiLogoGithub size={20} className="text-white" />
    </Link>
  </div>
</div>
</div>
  )
}
