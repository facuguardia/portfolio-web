"use client";

import React, { useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";

import { BsFillSendFill } from "react-icons/bs";
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

  const onSubmit: SubmitHandler<FormData> = () => {
    const sendEmail = () => {
      const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
      const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
      const keyId = process.env.NEXT_PUBLIC_PUBLIC_KEY as string;

      console.log(serviceID, templateID, keyId);

      emailjs
        .sendForm(serviceID, templateID, form.current as HTMLFormElement, {
          publicKey: keyId,
        })
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
      className="container mx-auto pt-24 pb-24 px-0 lg:px-16 flex flex-col lg:flex-row justify-between w-screen"
    >
      <div className="container mx-auto w-screen lg:w-[50%]">
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
            className="border-2 rounded-sm border-black w-[90%] h-52 lg:h-32 p-4 shadow-md"
            placeholder="Contame sobre tu proyecto..."
          />

          {isSent ? (
            <button
              type="submit"
              className="text-black bg-green-500 border-2 border-black font-medium rounded-lg text-sm px-6 py-4 text-center shadow-xl transition-all duration-300 ease-in-out self-center lg:self-start w-[%] lg:w-[50%]"
            >
              <div className="font-bold">Gracias por escribirme...</div>
            </button>
          ) : (
            <button
              type="submit"
              className="text-white bg-black hover:bg-green-500 hover:text-black border-2 border-black font-medium rounded-lg text-sm px-6 py-4 w-[90%] lg:w-[50%] text-center shadow-xl transition-all duration-500 ease-in-out"
            >
              <div className="font-bold flex justify-center items-center gap-2">
                Enviar <BsFillSendFill />{" "}
              </div>
            </button>
          )}
        </form>
      </div>

      <div className="mx-5 text-left lg:text-start mt-10 lg:mt-0 lg:ml-0 lg:w-[50%]">
        <h1 className="text-4xl leading-[140%]">
          Convierte tu <strong>Sueño Digital</strong> en{" "}
          <strong>Realidad</strong>
        </h1>
        <p className="lg:mx-0 text-lg lg:text-xl mt-10 text-gray-500">
          Eleva tu negocio con una poderosa presencia online diseñada para
          impulsar tus ventas, mejorar tu imagen de marca y llegar a más
          clientes.
        </p>

        {/* Correo y telefono */}
        {/* <div className="mt-8 flex flex-col lg:flex-row justify-start lg:gap-7">
          <p
            className="text-xl mb-2 hover:text-green-500 cursor-pointer transition-all duration-500 ease-in-out"
            onClick={handleEmail}
          >
            <strong>consultas@facutech.com</strong>
          </p>

          <Link href="https://bit.ly/wsp-cliente" target="_blank">
            <p className="text-xl hover:text-green-500 cursor-pointer transition-all duration-500 ease-in-out">
              <strong>(+569) 5620 5175</strong>
            </p>
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default ContactUs;
