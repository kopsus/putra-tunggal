import React from "react";
import { Input, TextArea } from "../Input";
import { ButtonMedium } from "../Button";
import Link from "next/link";
import { DatePicker } from "../DatePicker";

const FormRegister = () => {
  return (
    <form className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <Input placeholder="Email" />
        <Input placeholder="Nama Lengkap" type="password" />
        <TextArea placeholder="Alamat"></TextArea>
        <Input placeholder="Nomer Telepon" type="number" />
        <Input placeholder="Kata Sandi" type="password" />
        <Input placeholder="Ulang Kata Sandi" type="password" />
        <Input placeholder="Tempat Lahir" type="text" />
        <div className="flex items-center justify-between">
          <p className="text-sm">Jenis Kelamin</p>
          <div className="flex items-center gap-2">
            <input type="radio" />
            <label className="text-sm">Laki - laki</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" />
            <label className="text-sm">Perempuan</label>
          </div>
        </div>
        <div className="flex items-center gap-5 justify-between">
          <p className="text-sm">Tanggal Lahir</p>
          <DatePicker />
        </div>
      </div>
      <div className="flex items-start gap-2">
        <input type="checkbox" />
        <p className="text-xs text-black/70">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy.
        </p>
      </div>
      <ButtonMedium className="bg-red text-white">Daftar</ButtonMedium>
      <p className="text-sm">
        Sudah Punya Akun?{" "}
        <Link href="/login" className="font-bold text-primary">
          Login
        </Link>
      </p>
    </form>
  );
};

export default FormRegister;
