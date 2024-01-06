import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

function NavTopWhatsApp({ phoneSlug, GeneralsData }: any) {
  return (
    <Link
      href={`https://api.whatsapp.com/send?phone=+9${phoneSlug}&text=${GeneralsData.wpMessage}`}
      target="_blank"
      title="WhatsApp"
      className="h-full flex items-center justify-center px-4 gap-x-2 bg-green-500 hover:bg-green-400 transition-all"
    >
      <FaWhatsapp
        size={24}
        className="text-white cursor-pointer transition-all"
      />
      <span className="text-xl tracking-wider text-white font-gemunu">
        WhatsApp
      </span>
    </Link>
  );
}

export default NavTopWhatsApp;
