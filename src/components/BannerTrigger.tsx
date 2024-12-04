import React from "react";

// components
import { ButtonMedium } from "./Button";

// image
import bannerTriggerIMG from "@/assets/bannerTrigger.png";
import Image from "next/image";

export const BannerTrigger = () => {
  return (
    <div className="ContainerX">
      <div className="relative bg-white shadow-md shadow-black/25 border rounded-3xl p-20 flex flex-col gap-10 items-center justify-center">
        <div className="flex flex-col gap-5 text-center">
          <p>
            Kesehatan mental sama pentingnya dengan kesehatan fisik. Jangan ragu
            untuk berkonsultasi dengan psikolog. Dapatkan dukungan yang Anda
            butuhkan untuk menjalani hidup yang lebih baik.
          </p>
          <p className="titleHighlight">Ayo Nikmati Layanan Kami!</p>
        </div>
        <ButtonMedium className="bg-red text-white">
          BUAT JANJI SEKARANG
        </ButtonMedium>
        <div className="absolute bottom-5 right-5">
          <Image
            src={bannerTriggerIMG}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
      </div>
    </div>
  );
};
