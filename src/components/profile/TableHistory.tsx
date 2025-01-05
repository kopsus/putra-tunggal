'use client'
import { ServiceType } from "@/interface/service.interface";
import { Order, OrderItem } from "@prisma/client";
import { useEffect, useState } from "react";
import moment from 'moment'

type TypeService = "Online" | "Offline";

export type TypeleLastInteraction = {
  docterName: string;
  service: TypeService;
  date: string;
  time: string;
};

interface HistoryUser extends OrderItem {
  service: ServiceType,
  order: Order
}

const TableHistory = () => {
  const thStyle = "border-b-2 border-black py-2";
  const tdStyle = "border-b-2 py-4 text-center";

  const [loading, setIsloading] = useState(true);
  const [dataHistoryInteraction, setDataHistoryInteraction] = useState<HistoryUser[]>([])

  useEffect(() => {
    (async () => {
      try {
        setIsloading(true);
        const res = await fetch("/api/histories");
        const data = await res.json();
        setDataHistoryInteraction(data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsloading(false);
      }
    })()
  }, [])

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="overflow-x-auto w-full bg-white shadow-md border rounded-xl p-10">
      <p className="font-semibold text-black/50 mb-10">Last Interaction</p>
      <table className="w-full">
        <thead>
          <tr>
            <th className={thStyle}>No</th>
            <th className={thStyle}>Nama Dokter</th>
            <th className={thStyle}>Layanan</th>
            <th className={thStyle}>Tanggal</th>
            <th className={thStyle}>Waktu</th>
          </tr>
        </thead>
        <tbody>
          {dataHistoryInteraction.map((item, index) => (
            <tr key={index}>
              <td className={tdStyle}>
                <p className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mx-auto text-white">
                  {index + 1}
                </p>
              </td>
              <td className={tdStyle}>
                <p className="badge">{item.service.dokter.namaLengkap}</p>
              </td>
              <td className={tdStyle}>
                <div
                  className={`badge ${
                    item.order.layanan === "Online" ? "bg-online/20" : "bg-offline/20"
                  } flex items-center justify-center gap-2`}
                >
                  <div
                    className={`h-5 w-5 rounded-full ${
                      item.order.layanan === "Online"
                        ? "bg-green-600"
                        : "bg-yellow-600"
                    }`}
                  />
                  <p>{item.order.layanan}</p>
                </div>
              </td>
              <td className={tdStyle}>
                <p className="badge">{moment(item.order.createdAt).format('DD-MM-YYYY ')}</p>
              </td>
              <td className={tdStyle}>
                <p className="badge">{moment(item.order.createdAt).format('hh:mm')} - {moment(item.order.createdAt).add(1, 'hour').format('hh:mm')}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableHistory;
