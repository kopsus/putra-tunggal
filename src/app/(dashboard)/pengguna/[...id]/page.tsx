"use client";

import { useQueryDetailUser } from "@/api/user/queries";
import { TypeUser } from "@/api/user/types";
import Card from "@/components/(dashboard)/_global/Card";
import { TextArea } from "@/components/Input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import React from "react";

const DetailUser = () => {
  const { detailUser } = useQueryDetailUser();
  const [payload, setPayload] = React.useState<TypeUser>({
    email: detailUser?.email ?? "",
    namaLengkap: detailUser?.namaLengkap ?? "",
    noTlp: detailUser?.noTlp ?? "",
    jenis_kelamin: detailUser?.jenis_kelamin ?? "",
    tanggal_lahir: detailUser?.tanggal_lahir ?? "",
    alamat: detailUser?.alamat ?? "",
  });

  React.useEffect(() => {
    if (detailUser) {
      setPayload({
        email: detailUser.email ?? "",
        namaLengkap: detailUser.namaLengkap ?? "",
        noTlp: detailUser.noTlp ?? "",
        jenis_kelamin: detailUser.jenis_kelamin ?? "",
        tanggal_lahir: detailUser.tanggal_lahir ?? "",
        alamat: detailUser.alamat ?? "",
        foto: detailUser.foto ?? "",
      });
    }
  }, [detailUser]);

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

  const onValueChange = (value: string, name: string) => {
    setPayload((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log("payload", detailUser);

  return (
    <Card className="p-5 rounded-xl overflow-hidden grid grid-cols-3 gap-5">
      <div className="col-span-1 flex flex-col gap-2">
        <div className="rounded-full min-w-52 w-52 h-52 overflow-hidden shadow border mx-auto">
          {detailUser?.foto && payload.foto ? (
            <Image
              src={payload.foto}
              alt={payload.namaLengkap || "Foto Pengguna"}
              width={200} // Ganti dengan ukuran yang sesuai
              height={200} // Ganti dengan ukuran yang sesuai
              sizes="100vw"
            />
          ) : (
            <div className="w-52 h-52 bg-gray-300 flex items-center justify-center rounded-full">
              {/* Fallback content jika foto tidak ada */}
              <span className="text-white">No Foto</span>
            </div>
          )}
        </div>
        <Input type="file" className="w-full p-0.5" />
      </div>
      <div className="col-span-2 grid grid-cols-2 gap-5">
        <div className="flex flex-col gap-1">
          <p>Email</p>
          <Input
            type="email"
            onChange={onInputChange}
            placeholder="email"
            value={payload?.email}
          />
        </div>
        <div className="flex flex-col gap-1">
          <p>Nama Lengkap</p>
          <Input
            type="text"
            onChange={onInputChange}
            placeholder="nama lengkap"
            value={payload?.namaLengkap}
          />
        </div>
        <div className="flex flex-col gap-1">
          <p>No telephone</p>
          <Input
            type="text"
            onChange={onInputChange}
            placeholder="No Telephone"
            value={payload?.noTlp}
          />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-1">
            <p>Jenis Kelamin</p>
            <Select
              value={payload?.jenis_kelamin}
              onValueChange={(value) => onValueChange(value, "jenis_kelamin")}
            >
              <SelectTrigger className="w-full border-2 border-primary/50">
                <SelectValue
                  placeholder="Jenis Kelamin"
                  onChange={onInputChange}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="L">Laki - laki</SelectItem>
                <SelectItem value="P">Perempuan</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-1">
            <p>Tanggal Lahir</p>
            <Input
              type="date"
              onChange={onInputChange}
              value={payload.tanggal_lahir}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 col-span-2">
          <p>Alamat</p>
          <TextArea
            placeholder="Alamat"
            className="h-32"
            onChange={onInputChange}
            value={payload.alamat}
          />
        </div>
      </div>
      <div className="flex justify-end col-span-3">
        <Button>Update</Button>
      </div>
    </Card>
  );
};

export default DetailUser;
