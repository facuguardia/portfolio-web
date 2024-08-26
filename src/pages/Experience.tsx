import React from "react";
import CardExperience from "../components/CardExperience";

import { FcGoogle } from "react-icons/fc";
import { FcAndroidOs } from "react-icons/fc";
import { FcCommandLine } from "react-icons/fc";

function Experience() {
  return (
    <div
      id="experience"
      className=" bg-black w-screen h-full flex flex-col lg:flex-row justify-evenly items-center pt-24 pb-24 px-3 gap-8 lg:gap-4"
    >
      <div>
        <CardExperience
          title="Apps Móviles"
          icon={FcAndroidOs}
          size={130}
        />
      </div>
      <div>
        <CardExperience
          title="Desarrollo FullStack"
          icon={FcCommandLine}
          size={130}
        />
      </div>
      <div>
        <CardExperience title="Desarrollo Web" icon={FcGoogle} size={130} />
      </div>
    </div>
  );
}

export default Experience;
