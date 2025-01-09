"use client";
import { HistoryType } from "@/interface/history.interface";
import React, { FC, useEffect, useState } from "react";
import moment from "moment";

const TableRiwayat: FC<{ searchName: string }> = ({ searchName }) => {
  const dataThead = [
    "No",
    "Nama Pasien",
    "Layanan",
    "Tanggal",
    "Waktu",
    "Keterangan",
  ];

  const [histories, setHistories] = useState<HistoryType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/histories");
        const data = await res.json();
        setHistories(data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

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
          {(searchName != ""
            ? histories.filter((v) =>
                v.user.namaLengkap.toLowerCase().includes(searchName)
              )
            : histories
          ).map((item, index) => (
            <tr key={index} className="text-center border-b-2">
              <td className="py-2">{index + 1}</td>
              <td className="py-2">{item.user.namaLengkap}</td>
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
                {moment(item.createdAt).format("DD-MM-YYYY ")}
              </td>
              <td className="py-2">
                {moment(item.createdAt).format("hh:mm")} -{" "}
                {moment(item.createdAt).add(1, "hour").format("hh:mm")}
              </td>
              <td className="py-2">
                <p
                  className={`${
                    item.status === "Success" ? "bg-green-200" : "bg-red/10"
                  } rounded-full w-max mx-auto py-2 px-4`}
                >
                  {item.status}
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
