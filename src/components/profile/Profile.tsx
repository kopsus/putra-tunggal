"use client";

import React from "react";
import person from "@/assets/psikolog.jpg";
import Image from "next/image";
import { MdOutlineDataUsage } from "react-icons/md";
import { ButtonSmall } from "../Button";
import { useAtom } from "jotai";
import { storeIsLogin } from "@/store/isLogin";
import { useRouter } from "next/navigation";
import { useMutationAuth } from "@/api/auth/mutations";

export const Profile = () => {
  const router = useRouter();
  const [_, setIsLogin] = useAtom(storeIsLogin);
  const { serviceAuth } = useMutationAuth();

  const handleLogout = async () => {
    await serviceAuth({
      type: "logout",
      body: "",
    });
    setIsLogin(false);
    router.push("/");
  };

  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-5">
        <div className="bg-primary w-32 h-32 rounded-full shadow overflow-hidden">
          <Image src={person} alt="person" width={0} height={0} sizes="100vw" />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-2">
              <p className="font-semibold text-primary">Nurhidayat</p>
              <p className="text-black/70">Pasien</p>
            </div>
            <p className="text-black/80">nurhidayat123@gmail.com</p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <MdOutlineDataUsage />
              <p>20 Tahun</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex flex-col border-2 border-primary">
                <span className="bg-red h-1 w-4"></span>
                <span className="bg-white h-1 w-4"></span>
              </div>
              <p>Jakarta, Indonesia</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <ButtonSmall className="bg-primary text-white">
          Edit Profile
        </ButtonSmall>
        <ButtonSmall
          onClick={handleLogout}
          className="text-primary border border-primary"
        >
          Log Out
        </ButtonSmall>
      </div>
    </div>
  );
};
