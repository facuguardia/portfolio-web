import Link from "next/link";
import { RiWhatsappFill } from "react-icons/ri";

export const ButtonCTA = () => {
  return (
    <Link href="https://bit.ly/wsp-dev" target="_blank">
      <button
        type="button"
        className="text-black bg-white hover:bg-black hover:text-white border-2 border-black font-medium rounded-lg text-sm px-6 py-4 text-center shadow-xl"
      >
        <div className="flex justify-center items-center gap-3 shadow-2xl font-bold">
          ¡ Quiero Impulsar mi Negocio ! <RiWhatsappFill className="text-green-500" size={20}/>
        </div>
      </button>
    </Link>
  );
};
