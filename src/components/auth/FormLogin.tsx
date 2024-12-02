import React from "react";
import { Input } from "../Input";
import { ButtonMedium } from "../Button";
import Link from "next/link";

export const FormLogin = () => {
  return (
    <form className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <Input placeholder="Email" />
        <Input placeholder="Password" type="password" />
      </div>
      <ButtonMedium className="bg-red text-white">Masuk</ButtonMedium>
      <p>
        Belum Punya Akun?{" "}
        <Link href="/register" className="font-bold text-primary">
          Daftar
        </Link>
      </p>
    </form>
  );
};
