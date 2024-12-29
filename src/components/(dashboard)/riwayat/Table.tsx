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
              <td className="py-2">
                <div className="border-2 border-primary text-primary rounded-full w-9 h-9 mx-auto flex justify-center items-center">
                  {index + 1}
                </div>
              </td>
              <td className="py-2">
                <div className="bg-primary/10 rounded-full py-2 px-4 w-max mx-auto">
                  {item.namaPasien}
                </div>
              </td>
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
              <td className="py-2">
                <p className="bg-primary/10 rounded-full w-max mx-auto py-2 px-4">
                  {item.tanggal}
                </p>
              </td>
              <td className="py-2">
                <p className="bg-primary/10 rounded-full w-max mx-auto py-2 px-4">
                  {item.waktu}
                </p>
              </td>
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
