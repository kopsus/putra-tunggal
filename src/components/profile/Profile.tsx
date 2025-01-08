"use client";

import React, { FC, useEffect, useState } from "react";
import person from "@/assets/person-empty.png";
import Image from "next/image";
import { MdOutlineDataUsage } from "react-icons/md";
import { ButtonSmall } from "../Button";
import { useAtom } from "jotai";
import { storeIsLogin } from "@/store/isLogin";
import { useRouter } from "next/navigation";
import { useMutationAuth } from "@/api/auth/mutations";
import { useQueryProfile } from "@/api/user/queries";

export const Profile = () => {
  const { dataProfile } = useQueryProfile();
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
          <Image
            src={dataProfile?.foto ?? person}
            alt="person"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-2">
              <p className="font-semibold text-primary">
                {dataProfile?.namaLengkap}
              </p>
              <p className="text-black/70">
                {dataProfile?.role?.role === "User"
                  ? "Pasien"
                  : dataProfile?.role?.role}
              </p>
            </div>
            <p className="text-black/80">{dataProfile?.email}</p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <MdOutlineDataUsage />
              <p>{dataProfile?.tanggal_lahir} Tahun</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex flex-col border-2 border-primary">
                <span className="bg-red h-1 w-4"></span>
                <span className="bg-white h-1 w-4"></span>
              </div>
              <p>{dataProfile?.alamat}</p>
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
