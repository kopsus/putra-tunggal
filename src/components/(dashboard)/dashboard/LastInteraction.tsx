import React from "react";
import Card from "../_global/Card";
import Link from "next/link";

const LastInteraction = () => {
  const dataThead = [
    "No",
    "Nama Pasien",
    "Layanan",
    "Tanggal",
    "Waktu",
    "Keterangan",
  ];

  const dataTbody = [
    {
      namaPasien: "Ardea Himawari",
      layanan: "Online",
      tanggal: "27 Oktober",
      waktu: "13 : 00",
      keterangan: "Completed",
    },
    {
      namaPasien: "Ardea Himawari",
      layanan: "Offline",
      tanggal: "27 Oktober",
      waktu: "13 : 00",
      keterangan: "Completed",
    },
  ];
  return (
    <Card className="rounded-xl p-5">
      <div className="flex justify-between items-center mb-5">
        <p className="text-neutral-400 font-semibold">Last Interaction</p>
        <Link
          href={"#"}
          className="border-b-2 border-blue text-blue text-sm font-semibold"
        >
          View All
        </Link>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            {dataThead.map((item, index) => (
              <th
                key={index}
                className="border-b border-black py-2 text-primary"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataTbody.map((item, index) => (
            <tr key={index} className="text-center">
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
    </Card>
  );
};

export default LastInteraction;
