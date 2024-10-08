"use client";

import React from "react";

import {
  MdOutlineWeb,
  MdOutlineAdminPanelSettings,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import {
  BiRevision,
  BiTimeFive,
  BiLibrary,
  BiSupport,
  BiSolidCart,
  BiLogoWhatsapp,
  BiImage,
} from "react-icons/bi";
import Link from "next/link";

const PackDetails: React.FC = () => {
  return (
    <div>
      <section className="bg-black my-20 h-[300px] md:h-[450px] flex justify-center items-center">
        <div className="py-8 px-10 mx-auto max-w-screen-xl text-center lg:py-16 z-90">
          <h1 className="mb-8 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Bienvenido al Pack Emprendedor
            <br />
            <span className="lg:text-5xl text-xl font-semibold text-slate-300">
              Tu Lanzamiento hacia el Éxito Digital
            </span>
          </h1>
        </div>
      </section>

      {/* diseño web */}
      <section>
        <div className="flex flex-col items-center px-5 py-5 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
            <div className="w-full mx-auto text-center lg:text-left">
              <h1 className="mb-20 text-4xl font-extrabold tracking-tight leading-none text-">
                ¿Qué incluye el Pack Emprendedor?
              </h1>
              <h2 className="mb-10 text-2xl font-extrabold tracking-tight leading-none text-gray-900">
                Diseño Web
              </h2>
            </div>
          </div>

          <div className="flex flex-col items-center pb-10 mx-5 my-5 border-b border-gray-200 max-w-7xl sm:flex-row sm:mx-52">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
              <MdOutlineWeb className="w-10 h-10" />
            </div>
            <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
              <p className="text-lg">
                <span className="font-bold">Template a elección: </span>
                Podrás elegir entre más de 2.000 plantillas y personalizarlas
                fácilmente con tu contenido.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center pb-10 mx-5 my-5 border-b border-gray-200 max-w-7xl sm:flex-row sm:mx-52">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
              <BiRevision className="w-10 h-10" />
            </div>
            <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
              <p className="text-lg">
                <span className="font-bold">Revisiones de Diseño: </span>2
                rondas de revisiones para asegurarnos de que el diseño final
                cumpla con tus expectativas.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center pb-10 mx-5 my-5 max-w-7xl sm:flex-row sm:mx-52">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
              <BiTimeFive className="w-10 h-10" />
            </div>
            <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
              <p className="text-lg">
                <span className="font-bold">Tiempo de Entrega: </span>Tu sitio
                estará listo para lanzarse en un plazo de 2 a 4 semanas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gestion de contenido */}
      <section>
        <div className="flex flex-col items-center px-5 py-5 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
            <div className="w-full mx-auto text-center lg:text-left">
              <h2 className="mb-10 text-2xl font-extrabold tracking-tight leading-none text-gray-900">
                Gestión de Contenido Simplificada
              </h2>
            </div>
          </div>

          <div className="flex flex-col items-center pb-10 mx-5 my-5 border-b border-gray-200 max-w-7xl sm:flex-row sm:mx-52">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
              <BiLibrary className="w-10 h-10" />
            </div>
            <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
              <p className="text-lg">
                <span className="font-bold">Capacitación en CMS: </span>
                Sesión de capacitación de 1 hora para enseñarte a administrar y
                actualizar tu contenido de manera eficaz.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center pb-10 mx-5 my-5 max-w-7xl sm:flex-row sm:mx-52">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
              <BiSupport className="w-10 h-10" />
            </div>
            <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
              <p className="text-lg">
                <span className="font-bold">Soporte Post-Lanzamiento: </span>1
                mes de soporte post-lanzamiento para consultas sobre la gestión
                de contenido.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce */}
      <section>
        <div className="flex flex-col items-center px-5 py-5 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
            <div className="w-full mx-auto text-center lg:text-left">
              <h2 className="mb-10 text-2xl font-extrabold tracking-tight leading-none text-gray-900">
                E-Commerce Listo para Usar
              </h2>
            </div>
          </div>

          <div className="flex flex-col items-center pb-10 mx-5 my-5 border-b border-gray-200 max-w-7xl sm:flex-row sm:mx-52">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
              <BiSolidCart className="w-10 h-10" />
            </div>
            <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
              <p className="text-lg">
                <span className="font-bold">Cantidad de Productos: </span>
                Configuración inicial de hasta 10 productos, con la opción de
                añadir más por ti mismo o contratar mi servicio de
                mantenimiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chat de WhatsApp */}
      <section>
        <div className="flex flex-col items-center px-5 py-5 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
            <div className="w-full mx-auto text-center lg:text-left">
              <h2 className="mb-10 text-2xl font-extrabold tracking-tight leading-none text-gray-900">
                Comunicación Directa con WhatsApp
              </h2>
            </div>
          </div>

          <div className="flex flex-col items-center pb-10 mx-5 my-5 max-w-7xl sm:flex-row sm:mx-52">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
              <BiLogoWhatsapp className="w-10 h-10" />
            </div>
            <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
              <p className="text-lg">
                <span className="font-bold">Integración de Chat: </span>
                Integración del botón de chat de WhatsApp para facilitar la
                comunicación directa con tus clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Imagenes */}
      <section>
        <div className="flex flex-col items-center px-5 py-5 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
            <div className="w-full mx-auto text-center lg:text-left">
              <h2 className="mb-10 text-2xl font-extrabold tracking-tight leading-none text-gray-900">
                Imágenes de Alta Calidad
              </h2>
            </div>
          </div>

          <div className="flex flex-col items-center pb-10 mx-5 my-5 max-w-7xl sm:flex-row sm:mx-52">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
              <BiImage className="w-10 h-10" />
            </div>
            <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
              <p className="text-lg">
                <span className="font-bold">Cantidad de Imágenes: </span>
                Selección de hasta 10 imágenes libres de derechos para usar en
                tu sitio web, elegidas específicamente para complementar tu
                marca y contenido.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Soporte y mantenimiento */}
      <section>
        <div className="flex flex-col items-center px-5 py-5 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
            <div className="w-full mx-auto text-center lg:text-left">
              <h2 className="mb-10 text-2xl font-extrabold tracking-tight leading-none text-gray-900">
                Soporte y Mantenimiento
              </h2>
            </div>
          </div>

          <div className="flex flex-col items-center pb-10 mx-5 my-5 max-w-7xl sm:flex-row sm:mx-52">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
              <MdOutlineAdminPanelSettings className="w-10 h-10" />
            </div>
            <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
              <p className="text-lg">
                <span className="font-bold">Detalles de Soporte: </span>
                Durante el primer mes, recibirás actualizaciones de seguridad y
                plugins, así como 3 horas de soporte técnico para cualquier
                incidencia que pueda surgir.
              </p>
            </div>
          </div>
        </div>
        {/* volver */}
        <div className="flex justify-end items-center w-[90%] lg:w-[80%] pb-10 text-lg font-semibold text-green-500 hover:text-green-300">
          <Link href="/">
            <div className="flex justify-center items-center gap-1">
              <MdOutlineArrowBackIos className="text-sm self-center mt-1" />

              <h3>Volver</h3>
            </div>
          </Link>
        </div>
      </section>

      <section className="w-full bg-white border-t border-gray-300">
        <div className="items-center w-full px-3 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
          <div className="flex w-full mx-auto text-left">
            <div className="inline-flex items-center mx-auto align-middle">
              <div className="text-center">
                <h1 className="max-w-5xl text-3xl font-bold lg:leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                  ¿Listo para dar el siguiente paso
                  <br />
                  con tu negocio online?
                </h1>

                <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-10">
                  <div className="mt-8">
                    <Link href="https://bit.ly/facutech-wsp" target="_blank">
                      <button className="w-full items-center px-6 py-3 lg:px-20 lg:py-5 text-md lg:text-lg font-medium text-center text-white transition-all duration-500 ease-in-out border-2 border-black shadow-md rounded-xl bg-black hover:bg-green-500 hover:text-black ">
                        ¡Quiero mi Pack Emprendedor!
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackDetails;
