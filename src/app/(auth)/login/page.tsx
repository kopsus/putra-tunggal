import Image from "next/image";
import React from "react";
import { FormLogin } from "@/components/auth/FormLogin";

// assets
import authIMG from "@/assets/auth.png";
import LogoLarge from "@/assets/logo_large.png";

const page = () => {
  return (
    <div className="grid grid-cols-2 min-h-screen max-h-screen">
      <div className="col-span-1 h-screen">
        <Image src={authIMG} alt="" width={0} height={0} sizes="100vw" />
      </div>
      <div className="col-span-1 w-2/3 mx-auto flex flex-col justify-between py-10">
        <div className="text-center flex flex-col gap-2">
          <p className="titleSection text-primary">
            Biro Psikologi Putra Tunggal Selamat Datang
          </p>
          <p>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do”
          </p>
        </div>
        <div className="w-1/3 mx-auto">
          <Image src={LogoLarge} alt="" width={0} height={0} sizes="100vw" />
        </div>
        <FormLogin />
      </div>
    </div>
  );
};

export default page;
