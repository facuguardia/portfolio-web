import React from "react";
import Image from "next/image";

import { RiFacebookCircleLine, RiInstagramFill, RiGithubFill, RiLinkedinFill } from "react-icons/ri";

import Boy from "../assets/hero.png";
import SocialButtons from "@/components/SocialButtons";

export const Hero = () => {
  return (
    // todo: tengo que ver como hacer para que el titulo se separe un poco mas entre las lineas
    <div>
      <div className="pt-10">
        <Image src={Boy} alt="Hero" width={343} height={350} />
      </div>
      <div className="py-10 pl-5 flex justify-center">
        <h1 className="text-4xl text-left">
          Hello I'am <strong>Facundo. Fronted</strong>{" "}
          <span className="text-white bg-black px-2">Developer</span> <br />
          Based in <strong>Argentina</strong>
        </h1>
      </div>
      <div>
        <p className="text-left text-xl pl-5">
          I am a Frontend Developer based in Argentina. I have serious passion
          for UI effects, animations and creating intuitive, dynamic user
          experiences. Let's make something special.
        </p>
      </div>
      <div className="flex justify-start items-center gap-6 pl-5 pt-8">
        {/* faceboock */}
        <SocialButtons icon={RiFacebookCircleLine} size={25} />

        {/* instagram */}
        <SocialButtons icon={RiInstagramFill} size={25} />

        {/* github */}
        <SocialButtons icon={RiGithubFill} size={25} />

        {/* linkedin */}
        <SocialButtons icon={RiLinkedinFill} size={25} />
      </div>
    </div>
  );
};
