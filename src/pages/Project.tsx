import React from "react";
import Image from "next/image";

import { BiLinkExternal } from "react-icons/bi";

import Image1 from "../assets/dashboard.png"
import Image2 from "../assets/spotify.png"
import Image3 from "../assets/shop-market.png"

function Project() {
  return (
    <div className="bg-black w-screen flex flex-col items-center pt-16 pb-10">
      <h1 className="text-2xl text-white">My <strong>Projects</strong></h1>
      {/* Project 1 */}
      <div className="flex flex-col items-center">
        <div className="mt-10 rounded-xl">
          <Image
            src={Image1}
            alt="image project"
            width={400}
            height={398}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col items-start gap-5 py-5 px-5">
          <div className="">
            <h2 className="text-white text-xl font-semibold">01</h2>
          </div>
          <div>
            <h1 className="text-white text-xl font-semibold">Project One</h1>
          </div>
          <div>
            <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio expedita modi ratione, unde dolor quod sapiente fugit est dolores deserunt!</p>
          </div>
          <div>
            <BiLinkExternal size={20} className="text-white" />
          </div>
        </div>
      </div>
      {/* Project 2 */}
      <div className="flex flex-col items-center">
        <div className="mt-10 rounded-xl">
          <Image
            src={Image2}
            alt="image project"
            width={400}
            height={398}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col items-start gap-5 py-5 px-5">
          <div className="">
            <h2 className="text-white text-xl font-semibold">02</h2>
          </div>
          <div>
            <h1 className="text-white text-xl font-semibold">Project One</h1>
          </div>
          <div>
            <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio expedita modi ratione, unde dolor quod sapiente fugit est dolores deserunt!</p>
          </div>
          <div>
            <BiLinkExternal size={20} className="text-white" />
          </div>
        </div>
      </div>
      {/* Project 3 */}
      <div className="flex flex-col items-center">
        <div className="mt-10 rounded-xl">
          <Image
            src={Image3}
            alt="image project"
            width={400}
            height={398}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col items-start gap-5 py-5 px-5">
          <div className="">
            <h2 className="text-white text-xl font-semibold">03</h2>
          </div>
          <div>
            <h1 className="text-white text-xl font-semibold">Project One</h1>
          </div>
          <div>
            <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio expedita modi ratione, unde dolor quod sapiente fugit est dolores deserunt!</p>
          </div>
          <div>
            <BiLinkExternal size={20} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;