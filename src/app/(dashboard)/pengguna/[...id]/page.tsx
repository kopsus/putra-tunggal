"use client";

import { useQueryDetailUser } from "@/api/user/queries";
import { TypeUser } from "@/api/user/types";
import Card from "@/components/(dashboard)/_global/Card";
import { TextArea } from "@/components/Input";
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
    email: "",
    namaLengkap: "",
    noTlp: "",
    jenis_kelamin: "",
    tanggal_lahir: "",
    alamat: "",
  });

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

  return (
    <Card className="p-5 rounded-xl overflow-hidden grid grid-cols-3 gap-5">
      <div className="col-span-1 flex flex-col gap-2">
        <div className="rounded-full min-w-52 w-52 h-52 overflow-hidden shadow border mx-auto">
          {detailUser?.foto ? (
            <Image
              src={detailUser.foto}
              alt={detailUser.namaLengkap as string}
              width={0}
              height={0}
              sizes="100vw"
            />
          ) : null}
        </div>
        <Input type="file" className="w-full p-0.5" />
      </div>
      <div className="col-span-2 grid grid-cols-2 gap-5">
        <div className="flex flex-col gap-1">
          <p>Email</p>
          <Input type="email" onChange={onInputChange} placeholder="email" />
        </div>
        <div className="flex flex-col gap-1">
          <p>Nama Lengkap</p>
          <Input
            type="text"
            onChange={onInputChange}
            placeholder="nama lengkap"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p>No telephone</p>
          <Input
            type="text"
            onChange={onInputChange}
            placeholder="No Telephone"
          />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-1">
            <p>Jenis Kelamin</p>
            <Select>
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
            <Input type="date" onChange={onInputChange} placeholder="" />
          </div>
        </div>
        <div className="flex flex-col gap-1 col-span-2">
          <p>Alamat</p>
          <TextArea
            placeholder="Alamat"
            className="h-32"
            onChange={onInputChange}
          />
        </div>
      </div>
    </Card>
  );
};

export default DetailUser;
