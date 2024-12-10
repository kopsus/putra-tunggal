import Image from "next/image";
import React from "react";

// assest
import psikologIMG from "@/assets/psikolog.jpg";
import { FaJoget } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
// import { Star } from "lucide-react";
import { TextArea } from "@/components/Input";
import { ButtonSmall } from "@/components/Button";

const Rating = () => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex gap-x-5">
        <div className="col-span-1 w-24 h-24 rounded-3xl overflow-hidden shadow-md border">
          <Image src={psikologIMG} alt="" width={0} height={0} sizes="100vw" />
        </div>
        <div className="col-span-2 flex flex-col justify-between h-full">
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
      </div>
      {/* <div className="flex justify-center gap-2">
        <Star color="yellow" fill="yellow" />
        <Star color="yellow" fill="yellow" />
        <Star color="yellow" fill="yellow" />
        <Star color="yellow" fill="yellow" />
        <Star color="yellow" fill="yellow" />
      </div> */}
      <TextArea className="h-32" placeholder="Bagikan Pengalaman anda!" />
      <ButtonSmall className="bg-red text-white">KIRIM</ButtonSmall>
    </div>
  );
};

export default Rating;
