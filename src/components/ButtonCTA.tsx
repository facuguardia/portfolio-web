"use client";

import Link from "next/link";

export const ButtonCTA = () => {
  return (
    <Link href="#pricing">
      <button
        type="button"
        className="text-white bg-black hover:bg-green-500 hover:text-black border-2 border-black font-medium rounded-lg text-lg px-6 py-4 text-center shadow-xl transition-all duration-500 ease-in-out"
      >
        <div className="flex justify-center items-center gap-3 shadow-2xl font-bold">
        Descubrí el Pack Emprendedor
        </div>
      </button>
    </Link>
  );
};
