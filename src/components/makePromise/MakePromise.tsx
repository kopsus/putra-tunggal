import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ButtonMedium } from "../Button";
import { dataLayanan } from "@/data/layanan";
import { dataDokter } from "@/data/users";

export const MakePromise = () => {
  return (
    <form className="flex flex-col items-center gap-5">
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
          <Select>
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
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih Dokter (Opsional)" />
            </SelectTrigger>
            <SelectContent>
              {dataDokter.map((item, index) => (
                <SelectItem key={index} value={item.name}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex flex-col gap-1">
            <p className="font-semibold">Waktu</p>
            <input
              type="datetime-local"
              className="border text-sm p-2 rounded overflow-hidden"
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
