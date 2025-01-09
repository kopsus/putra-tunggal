"use client";

import React, { FormEventHandler, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ButtonMedium } from "../Button";
import { dataLayanan } from "@/data/layanan";
import { useQueryUsers } from "@/api/user/queries";
import { useMutationOrderOffline } from "@/api/orderOffline/mutation";
import { useRouter } from "next/navigation";

export const MakePromise = () => {
  const router = useRouter();
  const { dataUsers } = useQueryUsers();
  const [payload, setPayload] = useState({
    time: "",
    dokter: "",
    jenisLayanan: "",
  });

  const dataDokter =
    dataUsers?.filter((item) => item.role?.role === "Dokter") || [];

  const onValueChange = (value: string, name: string) => {
    setPayload((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;

    setPayload((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { serviceOrderOffline } = useMutationOrderOffline();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await serviceOrderOffline({
      type: "create",
      body: payload,
    });

    if (res.message !== "Unauthorized") {
      router.push("/login");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5">
      <p className="titleContent border-b-2 border-black pb-2">
        Layanan Reservasi
      </p>
      <p className="text-center">
        Anda tidak sendirian, kami ada untuk Anda. Temukan solusi bersama
        psikolog.
      </p>
      <div className="grid grid-cols-2 gap-10">
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Layanan</p>
          <Select
            name="jenisLayanan"
            onValueChange={(value) => onValueChange(value, "jenisLayanan")}
            required
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih jenis layanan" />
            </SelectTrigger>
            <SelectContent>
              {dataLayanan.map((item, index) => (
                <SelectItem key={index} value={item.title}>
                  {item.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            name="dokter"
            onValueChange={(value) => onValueChange(value, "dokter")}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih Dokter (Opsional)" />
            </SelectTrigger>
            <SelectContent>
              {dataDokter?.map((item, index) => (
                <SelectItem key={index} value={item.id!}>
                  {item.namaLengkap}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex flex-col gap-1">
            <p className="font-semibold">Waktu</p>
            <input
              type="datetime-local"
              className="border text-sm p-2 rounded overflow-hidden"
              onChange={onInputChange}
              name="time"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Lokasi</p>
          <p>
            Jalan Wahid Hasyim 37, Karangklesem, Kec. Purwokerto Sel., Kabupaten
            Banyumas, Jawa Tengah 53144
          </p>
          <div className="bg-white shadow border w-full h-32 rounded-xl overflow-hidden"></div>
        </div>
      </div>
      <ButtonMedium className="bg-red text-white mx-auto">
        Buat Janji
      </ButtonMedium>
    </form>
  );
};
