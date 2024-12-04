import Image from "next/image";
import React from "react";

// assets
import authIMG from "@/assets/auth.png";
import FormRegister from "@/components/auth/FormRegister";

const page = () => {
  return (
    <div className="grid grid-cols-2 min-h-screen max-h-screen">
      <div className="col-span-1 min-h-screen">
        <Image src={authIMG} alt="" width={0} height={0} sizes="100vw" />
      </div>
      <div className="col-span-1 w-2/3 mx-auto flex flex-col justify-between gap-5 py-5">
        <div className="text-center">
          <p className="text-xl font-bold text-primary">PENDAFTARAN</p>
          <p>
            Pengguna baru, Silahkan mendaftar untuk mengakses forum{" "}
            <span className="text-primary font-semibold">
              BIRO PSIKOLOGI PUTRA TUNGGAL
            </span>
          </p>
        </div>
        <FormRegister />
      </div>
    </div>
  );
};

export default page;
