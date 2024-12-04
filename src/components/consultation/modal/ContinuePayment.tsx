import Image from "next/image";
import React from "react";

// assets
import psikologIMG from "@/assets/psikolog.jpg";
import { FaJoget } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { formatIDR } from "@/lib/format";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProfilePsikolog from "@/components/psikolog/ProfilePsikolog";
import { ButtonSmall } from "@/components/Button";

const ContinuePayment = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <p className="titleContent w-1/2 mx-auto border-b-2 border-black pb-2 text-center">
        LANJUTKAN KONSULTASI
      </p>
      <div className="grid grid-cols-3 gap-x-5">
        <div className="col-span-1 min-h-40 rounded-3xl overflow-hidden shadow-md border">
          <Image src={psikologIMG} alt="" width={0} height={0} sizes="100vw" />
        </div>
        <div className="col-span-2 flex flex-col justify-between h-full">
          <div className="flex flex-col gap-y-[6px]">
            <p className="font-semibold">Dr. Rr. Wara Setija Brawidjajani </p>
            <p>CBT Therapist</p>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-3 py-1 px-2 bg-primary rounded">
                <FaJoget className="w-5 h-5 text-white" />
                <p className="text-white text-sm">20 Tahun</p>
              </div>
              <div className="flex items-center gap-3 py-1 px-2 bg-primary rounded">
                <BiLike className="w-5 h-5 text-white" />
                <p className="text-white text-sm">100 %</p>
              </div>
            </div>
          </div>
          <p className="font-semibold">{formatIDR(50000)}</p>
          <div className="flex items-center gap-4">
            <Dialog>
              <DialogTrigger className="text-xs rounded-full font-bold shadow py-2 px-8 border border-black">
                Lihat Profil
              </DialogTrigger>
              <DialogContent>
                <DialogTitle></DialogTitle>
                <ProfilePsikolog />
                <ButtonSmall className="bg-red text-white">Chat</ButtonSmall>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <p className="text-center">
        Perjalanan menuju kesembuhan Anda belum selesai. Lanjutkan konsultasi
        sekarang
      </p>
      <ButtonSmall className="bg-red text-white">
        Lanjutkan Pemabayaran
      </ButtonSmall>
    </div>
  );
};

export default ContinuePayment;
