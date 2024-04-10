import React from "react";
import Image from "next/image";

import ImgExp1 from "../assets/img-6.jpg";
import ImgExp2 from "../assets/img-3.jpg";
import ImgExp3 from "../assets/img-1.jpg";

function Experience() {
  return (
    <section className=" bg-black h-[100%] flex flex-col justify-center items-center pt-24 pb-10 px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid max-w-lg gap-12 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
          <div className="flex flex-col mb-12 overflow-hidden cursor-pointer">
            <div className="flex-shrink-0">
              <Image
                className="w-full h-[16rem] rounded-xl border-4 border-gray-300 opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out"
                src={ImgExp1}
                alt="aplication mobile"
              />
            </div>

            <div className="flex flex-col justify-between flex-1">
              <div className="flex-1">
                <div className="flex pt-6 space-x-1 text-sm text-gray-500"></div>

                <div className="block mt-2 space-y-6 text-left lg:text-center">
                  <h3 className="text-2xl font-semibold  text-neutral-300">
                    Aplicaciones Móviles Personalizadas
                  </h3>
                  <p className="text-white font-light">
                    Entiendo la importancia de conectar con tu cliente en
                    cualquier momento y lugar. Por eso, desarrollo aplicaciones
                    móviles que aseguren una experiencia de usuario fluida y
                    accesible desde cualquier dispositivo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col mb-12 overflow-hidden cursor-pointer">
            <div className="flex-shrink-0">
              <Image
                className="w-full h-[16rem] rounded-xl border-4 border-gray-300 opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out"
                src={ImgExp2}
                alt=""
              />
            </div>

            <div className="flex flex-col justify-between flex-1">
              <div className="flex-1">
                <div className="flex pt-6 space-x-1 text-sm text-gray-500"></div>

                <div className="block mt-2 space-y-6 text-center">
                  <h3 className="text-2xl font-semibold leading-none tracking-tighter text-neutral-300">
                    Experiencias Web a Medida
                  </h3>
                  <p className="text-white font-light">
                    Cada punto de contacto con tu cliente es una oportunidad
                    para impresionar y convertir. Como desarrollador frontend,
                    pongo especial atención en crear sitios web que no solo se
                    vean bien, sino que sean intuitivos y fáciles de navegar.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col mb-12 overflow-hidden cursor-pointer">
            <div className="flex-shrink-0">
              <Image
                className="w-full h-[16rem] rounded-xl border-4 border-gray-300 opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out"
                src={ImgExp3}
                alt=""
              />
            </div>

            <div className="flex flex-col justify-between flex-1">
              <div className="flex-1">
                <div className="flex pt-6 space-x-1 text-sm text-gray-500"></div>

                <div className="block mt-2 space-y-6 text-center">
                  <h3 className="text-2xl font-semibold leading-none tracking-tighter text-neutral-300">
                    Desarrollo Integral para Tu Negocio
                  </h3>
                  <p className="text-white font-light">
                    Tu proyecto requiere una solución que abarque tanto el
                    atractivo visual como la funcionalidad robusta. Fusiono
                    habilidades de frontend y backend para construir sistemas
                    complejos utilizando tecnologías de vanguardia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
