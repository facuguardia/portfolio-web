import React from "react";
import CardExperience from "../components/CardExperience";

import { FcGoogle } from "react-icons/fc";
import { FcAndroidOs } from "react-icons/fc";
import { FcCommandLine } from "react-icons/fc";

function Experience() {
  return (
    // TODO: Completar información
    <div className="bg-black w-screen h-[100%] flex flex-col items-center pt-16 pb-10">
      <h1 className="text-2xl text-white">
        My<strong> Experience</strong>
      </h1>
      <div className="mt-10">
        <CardExperience
          title="Mobile Developer - React Native"
          data="Nov 2023 - Present"
          description="I specialized in mobile application development using React Native. I independently designed and implemented key features, ensuring cross-platform compatibility and delivering high-quality products. My ability to work closely with clients and adapt to their unique needs has been crucial in meeting project deadlines."
          icon={FcAndroidOs}
          size={40}
        />
      </div>
      <div className="mt-10 bg-gray-900/40">
        <CardExperience
          title="Frontend Web Developer - React.Js"
          data="Dic 2022 - Nov 2023"
          description="As a freelance frontend web developer, I have been leading the creation of dynamic and engaging user interfaces using React. Working independently, I collaborate closely with clients to deliver tailor-made solutions, enhancing user experiences and ensuring project goals are met. I am also adept at optimizing page load times and troubleshooting performance issues for a seamless user experience."
          icon={FcGoogle}
          size={30}
        />
      </div>
      <div className="mt-10">
        <CardExperience
          title="Frontend Developer - JavaScript"
          data="Sep 2022 - Dic 2022"
          description="I focused on developing and maintaining interactive and responsive user interfaces using JavaScript-based technologies. Independently managing projects, I contributed to the migration of legacy systems to modern architectures, resulting in improved speed and efficiency. My adaptability and commitment to client satisfaction have been key factors in successful project outcomes."
          icon={FcCommandLine}
          size={40}
        />
      </div>
    </div>
  );
};

export default Experience;