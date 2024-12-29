import { dataRiwayat } from "@/data/riwayat";
import React from "react";

const TableRiwayat = () => {
  const dataThead = [
    "No",
    "Nama Pasien",
    "Layanan",
    "Tanggal",
    "Waktu",
    "Keterangan",
  ];

  return (
    <div className="border rounded-2xl overflow-hidden">
      <table className="w-full">
        <thead>
          <tr>
            {dataThead.map((item, index) => (
              <th key={index} className="bg-primary p-2 text-white">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataRiwayat.map((item, index) => (
            <tr key={index} className="text-center border-b-2">
              <td className="py-2">{index + 1}</td>
              <td className="py-2">{item.namaPasien}</td>
              <td className="py-2">
                <div
                  className={`${
                    item.layanan === "Online" ? "bg-online/20" : "bg-offline/20"
                  } flex items-center gap-2 rounded-full py-2 px-4 w-max mx-auto`}
                >
                  <span
                    className={`${
                      item.layanan === "Online" ? "bg-online" : "bg-offline"
                    } w-5 h-5 rounded-full`}
                  ></span>
                  {item.layanan}
                </div>
              </td>
              <td className="py-2">{item.tanggal}</td>
              <td className="py-2">{item.waktu}</td>
              <td className="py-2">
                <p
                  className={`${
                    item.keterangan === "Completed"
                      ? "bg-green-200"
                      : "bg-red/10"
                  } rounded-full w-max mx-auto py-2 px-4`}
                >
                  {item.keterangan}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableRiwayat;
