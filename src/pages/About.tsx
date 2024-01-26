import React from "react";
import Image from "next/image";
import AboutImg from "../assets/about.png";

export const About = () => {
  return (
    <div className="px-5 py-10">
      <div className="flex flex-col items-center">
        <Image
          src={AboutImg}
          alt="Picture of the author"
          width={343}
          height={374}
        />
      </div>
      <div className="mt-10 items-start">
        <h1 className="text-2xl py-5">
          About <strong>Me</strong>
        </h1>
        <p className="text-gray-600 mt-5">
          Hello! I'm Facundo, a passionate web and mobile developer with a
          unique focus on turning ideas into captivating digital experiences. My
          proficiency with technologies like React and React Native, backed by a
          deep understanding of JavaScript, enables me to create solutions that
          not only meet technical requirements but also tell visual and
          functional stories.
          <br />
          <br />
          <strong>Work Philosophy</strong>
          <br />
          <br />
          I believe in transparency and collaboration. Each project is a unique
          partnership, where your goals become mine. My commitment to excellence
          and open communication ensures extraordinary results.
          <br />
          <br />
          <strong>Turning Your Vision into Reality</strong>
          <br />
          <br />
          If you're looking for a passionate digital architect, I'm here to take
          your vision to the next level. Let's build digital experiences that
          exceed expectations with style. Let's talk about your project and
          bring your ideas to life! Thanks for visiting; I look forward to
          working with you!
        </p>
      </div>
    </div>
  );
};
