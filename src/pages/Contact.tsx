// 'use client'

// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// function ContactUs() {
//   const form = useRef<any>();

//   const sendEmail = (e: any) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_yep9mts', 'template_z78hrog', form.current, {
//         publicKey: 'klFlDlrl3U0mASChZ',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />

//       <button type="submit">Send</button>
//     </form>
//   );
// };

// export default ContactUs;

"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";

import SocialButtons from "@/components/SocialButtons";

import {
  BiLogoInstagramAlt,
  BiLogoLinkedin,
  BiLogoGithub,
} from "react-icons/bi";
import { userSchema } from "@/schema/userSchema";
type FormData = {
  user_name: string;
  user_email: string;
  message: string;
  preventDefault: any;
};

function ContactUs() {
  const [isSent, setIsSent] = useState(false);

  const form = useRef<any>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(userSchema),
  });

  const handleEmail = () => {
    window.open("mailto:consulta@facutech.com");
  };

  const onSubmit: SubmitHandler<FormData> = () => {
    const sendEmail = () => {

      const serviceID = "service_yep9mts";
      const templateID = "template_z78hrog";
      const keyId = "klFlDlrl3U0mASChZ";


      emailjs
        .sendForm(
          serviceID,
          templateID,
          form.current as HTMLFormElement,
          {
            publicKey: keyId,
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
    setIsSent(true);
    reset();
  };
  return (
    <div
      id="contact"
      className="container mx-auto pt-24 pb-10 px-0 lg:px-16 flex flex-col lg:flex-row justify-between items-center"
    >
      <div className="container mx-auto w-[90%] lg:w-[60%]">
        <form
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center lg:items-start gap-3 w-[100%]"
        >
          <input
            {...register("user_name")}
            className="border-2 rounded-sm border-black w-[90%] p-4 shadow-md"
            placeholder="Tu nombre"
          />
          {errors.user_name && (
            <p className="text-red-500 ml-5 self-start">
              {errors.user_name.message}
            </p>
          )}

          <input
            {...register("user_email")}
            className="border-2 rounded-sm border-black w-[90%] p-4 shadow-md"
            placeholder="Tu correo"
          />
          {errors.user_email && (
            <p className="text-red-500 ml-5 self-start">
              {errors.user_email.message}
            </p>
          )}

          <textarea
            {...register("message")}
            className="border-2 rounded-sm border-black w-[90%] h-32 p-4 shadow-md"
            placeholder="Tu mensaje"
          />

          {isSent ? (
            <button
              type="submit"
              className="text-black bg-green-500 border-2 border-black font-medium rounded-lg text-sm px-6 py-4 text-center shadow-xl transition-all duration-300 ease-in-out self-center lg:self-start w-[90%] lg:w-[50%]"
            >
              <div className="font-bold">Gracias por escribirme !!!</div>
            </button>
          ) : (
            <button
              type="submit"
              className="text-white bg-black hover:bg-white hover:text-black border-2 border-black font-medium rounded-lg text-sm px-6 py-4 text-center shadow-xl transition-all duration-300 ease-in-out self-center lg:self-start w-[90%] lg:w-[50%]"
            >
              <div className="font-bold">Hablemos...</div>
            </button>
          )}
        </form>
      </div>

      <div className="container mx-auto text-center lg:text-start mt-10 lg:mt-0 lg:ml-0 lg:w-[40%]">
        <h1 className="text-4xl leading-[140%]">
          Soñas con tener tu propio <strong>sitio web </strong> o{" "}
          <strong> aplicación móvil</strong>
        </h1>
        <p className="mx-10 lg:mx-0 text-lg mt-10 text-gray-500">
          Con mi ayuda, tendrás una web o app que te ayude a aumentar tus
          ventas, mejorar tu imagen profesional y llegar a más clientes.
        </p>

        <div className="mt-10">
          <p className="text-xl mb-2 cursor-pointer" onClick={handleEmail}>
            <strong>consultas@facutech.com</strong>
          </p>

          <Link href="https://bit.ly/wsp-facutech" target="_blank">
            <p className="text-xl">
              <strong>+54 9 2616 997700</strong>
            </p>
          </Link>
          <div className="mt-5 flex justify-center lg:justify-start items-center gap-5">
            <Link
              href="https://www.instagram.com/facu_guardia/"
              target="_blank"
            >
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
