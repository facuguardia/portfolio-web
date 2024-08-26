import React from "react";
import CardExperience from "../components/CardExperience";

import { FcSmartphoneTablet } from "react-icons/fc";
import { FcShop } from "react-icons/fc"
import { FcGoogle } from "react-icons/fc";


function Experience() {
  return (
    <div
      id="experience"
      className=" bg-black w-screen h-full flex flex-col md:flex-row justify-evenly items-center pt-24 pb-24 px-3 gap-10 md:gap-4"
    >
      <div>
        <CardExperience title="E-Commerce" icon={FcShop} size={120} />
      </div>
      <div>
        <CardExperience title="Apps" icon={FcSmartphoneTablet} size={120} />
      </div>
      <div>
        <CardExperience title="WebApps" icon={FcGoogle} size={120} />
      </div>
    </div>
  );
}

export default Experience;
