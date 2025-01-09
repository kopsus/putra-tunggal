import React from "react";
import Card from "../(dashboard)/_global/Card";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export const UpdateProfile = () => {
  return (
    <Card className="p-5 rounded-xl">
      <p className="text-xl mb-10">Data Pribadi</p>
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-3 items-center">
          <p>Nama Lengkap </p>
          <Input placeholder="Nama Lengkap" className="col-span-2" />
        </div>
        <div className="grid grid-cols-3 items-center">
          <p>Alamat </p>
          <Input placeholder="Alamat" className="col-span-2" />
        </div>
        <div className="grid grid-cols-3 items-center">
          <p>Email </p>
          <Input
            type="email"
            placeholder="Nama Lengkap"
            className="col-span-2"
          />
        </div>
        <div className="grid grid-cols-3 items-center">
          <p>Email </p>
          <Input
            type="email"
            placeholder="Nama Lengkap"
            className="col-span-2"
          />
        </div>
        <div className="grid grid-cols-3 items-center">
          <p>Email </p>
          <Input type="date" />
        </div>
        <div className="grid grid-cols-3 items-center">
          <p>Email </p>
          <Select
          // value={dialog.data?.jenis_kelamin}
          // onValueChange={(value) => onValueChange(value, "jenis_kelamin")}
          >
            <SelectTrigger className="w-full border-2 border-primary/50">
              <SelectValue placeholder="Jenis Kelamin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="L">Laki - laki</SelectItem>
              <SelectItem value="P">Perempuan</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </Card>
  );
};
