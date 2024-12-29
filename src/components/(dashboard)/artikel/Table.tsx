import { dataArtikel } from "@/data/artikel";
import Image from "next/image";
import React from "react";

const TableArtikel = () => {
  const dataThead = ["image", "title", "desc", "date", "Action"];

  return (
    <div className="border rounded-2xl overflow-hidden">
      <table className="w-full overflow-x-auto">
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
          {dataArtikel.map((item, index) => (
            <tr key={index} className="border-b-2">
              <td className="p-2">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="min-w-32 w-32 h-32"
                />
              </td>
              <td className="p-2">
                <p className="px-4">{item.title}</p>
              </td>
              <td className="p-2">
                <p className="px-4 line-clamp-3">{item.desc}</p>
              </td>
              <td className="p-2">
                <p className="px-4">{item.date}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableArtikel;
