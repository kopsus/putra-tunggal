import { Input } from "@/components/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { dataBulan } from "@/data/bulan";
import { dataTahun } from "@/data/tahun";
import { SetStateAction } from "jotai";
import React, { Dispatch, FC } from "react";

const Toolbar: FC<{setSearch: Dispatch<SetStateAction<string>>, searchValue: string}> = ({setSearch, searchValue}) => {
  return (
    <div className="flex flex-col gap-5 mb-10">
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <p>Pencarian</p> :
          <Input placeholder="Cari Nama Pasien" value={searchValue} onChange={(e) => setSearch(e.target.value)}/>
        </div>
        <div className="flex items-center gap-2">
          <p>Bulan</p> :
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Bulan" />
            </SelectTrigger>
            <SelectContent>
              {dataBulan.map((item, index) => (
                <SelectItem key={index} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <p>Tahun</p> :
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Tahun" />
            </SelectTrigger>
            <SelectContent>
              {dataTahun.map((item, index) => (
                <SelectItem key={index} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <p>Jenis Layanan : </p>
        <div className="flex items-center gap-1">
          <p>All</p>
          <input id="jenis_layanan" name="jenis_layanan" type="radio" />
        </div>
        <div className="flex items-center gap-1">
          <p>Offline</p>
          <input id="jenis_layanan" name="jenis_layanan" type="radio" />
        </div>
        <div className="flex items-center gap-1">
          <p>Online</p>
          <input id="jenis_layanan" name="jenis_layanan" type="radio" />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
