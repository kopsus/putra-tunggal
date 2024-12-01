import Image from "next/image";
import React from "react";

// assets
import LogoIMG from "@/assets/Logo.png";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={LogoIMG}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="w-8"
      />
      <p className="titleContent font-medium">Putra Tunggal</p>
    </div>
  );
};
