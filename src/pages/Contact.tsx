"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import SocialButtons from "@/components/SocialButtons";

import {
  BiLogoInstagramAlt,
  BiLogoLinkedin,
  BiLogoGithub,
  BiLogoWhatsapp,
} from "react-icons/bi";
type FormData = {
  user_name: string;
  user_email: string;
  message: string;
  preventDefault: any;
};

export default function App() {
  const form = useRef<any>();
  const { register, handleSubmit } = useForm<FormData>();

  const handleEmail = () => {
    window.open("mailto:consulta@facutech.com");
  };

  const onSubmit: SubmitHandler<FormData> = () => {
    const sendEmail = () => {
      emailjs
        .sendForm(
          "service_yep9mts",
          "template_z78hrog",
          form.current as HTMLFormElement,
          {
            publicKey: "klFlDlrl3U0mASChZ",
          }
        )
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    };
    sendEmail();
  };
  return (
    <div className="container mx-auto pt-24 pb-10 lg:px-10 flex justify-between">
      <div className="container mx-auto w-[60%]">
        <form
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center gap-6 items-center"
        >
          <input
            {...register("user_name")}
            className="border-2 rounded-sm border-black w-[90%] p-4 shadow-md"
            placeholder="Tu nombre"
          />

          <input
            {...register("user_email")}
            className="border-2 rounded-sm border-black w-[90%] p-4 shadow-md"
            placeholder="Tu correo"
          />

          <textarea
            {...register("message")}
            className="border-2 rounded-sm border-black w-[90%] h-32 p-4 shadow-md"
            placeholder="Tu mensaje"
          />

          <button
            type="button"
            className="text-white bg-black hover:bg-white hover:text-black border-2 border-black font-medium rounded-lg text-sm px-6 py-4 text-center shadow-xl transition-all duration-300 ease-in-out self-start ml-5 "
          >
            <div className="font-bold">Hablemos...</div>
          </button>
        </form>
        
        <div className="container mx-auto ml-5 lg:ml-2 flex items-center gap-5">
          <Link href="https://www.instagram.com/facu_guardia/" target="_blank">
            <SocialButtons icon={BiLogoInstagramAlt} size={20} />
          </Link>

          <Link
            href="https://www.linkedin.com/in/facu-guardia/"
            target="_blank"
          >
            <SocialButtons icon={BiLogoLinkedin} size={20} />
          </Link>

          <Link href="https://github.com/facuguardia" target="_blank">
            <SocialButtons icon={BiLogoGithub} size={20} />
          </Link>

          <Link href="https://bit.ly/wsp-facutech" target="_blank">
            <SocialButtons icon={BiLogoWhatsapp} size={20} />
          </Link>
        </div>
      </div>

      <div className="container mx-auto mt-10 ml-5 lg:mt-0 lg:ml-0 w-[40%]">
        <h1 className="text-4xl text-left leading-[140%]">
          Soñas con tener tu propio <strong>sitio web </strong> o{" "}
          <strong> aplicación móvil</strong>
        </h1>
        <p className="text-lg mt-10 text-gray-500">
          Con mi ayuda, tendrás una web o app que te ayude a aumentar tus
          ventas, mejorar tu imagen profesional y llegar a más clientes.
        </p>

        <div className="mt-10">
          <p className="text-xl mb-2" onClick={handleEmail}>
            <strong>consultas@facutech.com</strong>
          </p>

          <Link href="https://bit.ly/wsp-facutech" target="_blank">
            <p className="text-xl">
              <strong>+54 9 2616 997700</strong>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
