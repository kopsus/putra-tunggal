import React from "react";
import Card from "../_global/Card";

export const TodaysTask = () => {
  const dataThead = ["Layanan", "Nama Pasien", "Waktu"];
  const dataTbody = [
    {
      layanan: "Online",
      pasien: "Addharu Qutni",
      waktu: "Berlangsung",
    },
    {
      layanan: "Online",
      pasien: "Addharu Qutni",
      waktu: "10 : 00",
    },
    {
      layanan: "Online",
      pasien: "Addharu Qutni",
      waktu: "13 : 00",
    },
  ];

  return (
    <Card className="rounded-xl p-5">
      <p className="text-base font-semibold mb-5">Task Hari ini</p>
      <table className="w-full">
        <thead>
          <tr>
            {dataThead.map((item, index) => (
              <th
                key={index}
                className="border-b border-black py-2 text-neutral-400"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataTbody.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="py-2">
                <div className="flex items-center gap-2 bg-green-200 rounded-full py-2 px-4 w-max mx-auto">
                  <span className="w-5 h-5 rounded-full bg-online"></span>
                  {item.layanan}
                </div>
              </td>
              <td className="py-2">
                <p className="bg-primary/10 rounded-full w-max mx-auto py-2 px-4">
                  {item.pasien}
                </p>
              </td>
              <td className="py-2">
                <p
                  className={`${
                    item.waktu === "Berlangsung"
                      ? "bg-green-200"
                      : "bg-primary/10"
                  } rounded-full w-max mx-auto py-2 px-4`}
                >
                  {item.waktu} WIB
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};
