'use client'

import Link from "next/link";
import React from "react";

import { MdKeyboardArrowRight } from "react-icons/md";

function Pricing() {
  return (
    <section id="pricing">
      <div className="items-center w-full pt-16 lg:pt-24 pb-24 mx-auto lg:px-3 max-w-7xl">
        <div className="flex flex-wrap items-start justify-center w-full gap-4 px-5 mx-auto lg:px-0">
          <div className="w-full xl:w-1/2 lg:w-2/6 md:text-center lg:text-left">
            <div className="flex flex-col p-3 lg:p-0">
              <span className="mb-10 text-4xl text-black lg:text-5xl leading-[140%] mt-10">
                <h1 className="text-4xl leading-[140%]">
                  Impulsa <strong>Tu Éxito</strong> con el{" "}
                  <strong>Pack Emprendedor</strong>
                </h1>
              </span>
              <p className="mx-auto mb-4 text-lg lg:text-xl text-gray-500 lg:pr-10">
                Impulsa tu negocio en línea con el Pack Emprendedor: la solución
                completa para dominar el mundo digital sin estrés. Desde tu
                primer dominio hasta tu primera venta en línea, gestiono todo
                para que puedas concentrarte en lo que realmente importa: el
                crecimiento de tu negocio.
                <br />
                <br />
                Súmate a la comunidad de emprendedores exitosos y haz que tu
                marca destaque.{" "}
                <span className="text-black font-medium">
                  ¡Es tu turno de triunfar!
                </span>
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="w-full xl:w-1/3 md:w-2/6">
            <div className="flex flex-col h-full p-8 bg-black shadow-xl rounded-xl">
              <span className="flex justify-end items-center mb-4 font-bold tracking-widest text-white uppercase text-2xl">
                {" "}
                Pack Emprendedor{" "}
              </span>
              <span className="flex justify-end items-center mb-8 text-sm font-medium tracking-tight text-slate-300">
                {" "}
                Tu Puerta al Mundo Digital{" "}
              </span>
              <div className="flex justify-end items-end text-4xl font-black leading-none text-white lg:text-6xl">
                <span className="flex items-center gap-3">
                  <span>$199</span>{" "}
                  <span className="text-sm font-medium">/usd</span>
                </span>
              </div>

              {/* lista pack */}
              <ul>
                {/* Diseño web */}
                <li className="flex items-center mt-8 mb-2 text-base font-medium tracking-tight text-white">
                  <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  <strong>Diseño Web Personalizado</strong>
                </li>

                {/* Gestión de contenido */}
                <li className="flex items-center mb-2 text-base font-medium tracking-tight text-white">
                  <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  <strong>Gestión de Contenido Simplificada</strong>
                </li>

                {/* Ecommerce */}
                <li className="flex items-center mb-2 text-base font-medium tracking-tight text-white">
                  <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  <strong>Vende tus productos en línea fácilmente</strong>
                </li>

                {/* Whatsapp */}
                <li className="flex items-center mb-2 text-base font-medium tracking-tight text-white">
                  <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  <strong>Comunicación Directa con WhatsApp</strong>
                </li>

                {/* Imagenes */}
                <li className="flex items-center mb-2 text-base font-medium tracking-tight text-white">
                  <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  <strong>Imágenes de Alta Calidad</strong>
                </li>

                {/* Mantenimiento */}
                <li className="flex items-center mb-2 text-base font-medium tracking-tight text-white">
                  <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  <strong>Soporte y Mantenimiento</strong>
                </li>
              </ul>
              <div className="mt-5 ">
                <Link href="../pack-details">
                  <span className="flex justify-end items-center gap-2 text-sm cursor-pointer text-green-500 hover:text-green-300 transition-all duration-500 ease-in-out">
                    Más info
                    <MdKeyboardArrowRight />
                  </span>
                </Link>
              </div>

              {/* boton */}
              <div className="mt-8">
                <Link href="https://bit.ly/facutech-wsp" target="_blank">
                  <button className="w-full items-center px-10 py-3.5 text-lg font-medium text-center text-black transition-all duration-500 ease-in-out border-2 border-black shadow-md rounded-xl bg-white hover:bg-green-500">
                    ¡Quiero Mi Pack!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
