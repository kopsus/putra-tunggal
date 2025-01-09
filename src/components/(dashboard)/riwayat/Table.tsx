"use client";
import moment from "moment";
import { useQueryHistories } from "@/api/history/queries";

const TableRiwayat = () => {
  const dataThead = [
    "No",
    "Nama Pasien",
    "Layanan",
    "Tanggal",
    "Waktu",
    "Keterangan",
  ];

  const { dataHistories, isLoading } = useQueryHistories();

  if (isLoading) {
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
          {dataHistories?.map((item, index) => (
            <tr key={index} className="text-center border-b-2">
              <td className="py-2">{index + 1}</td>
              <td className="py-2">{item.order?.user?.namaLengkap}</td>
              <td className="py-2">
                <div
                  className={`${
                    item.order?.layanan === "Online"
                      ? "bg-online/20"
                      : "bg-offline/20"
                  } flex items-center gap-2 rounded-full py-2 px-4 w-max mx-auto`}
                >
                  <span
                    className={`${
                      item.order?.layanan === "Online"
                        ? "bg-online"
                        : "bg-offline"
                    } w-5 h-5 rounded-full`}
                  ></span>
                  {item.order?.layanan}
                </div>
              </td>
              <td className="py-2">
                {moment(item.order?.createdAt).format("DD-MM-YYYY ")}
              </td>
              {item.order?.layanan === "Online" ? (
                <td className="py-2">
                  {moment(item.order?.createdAt).format("hh:mm")} -{" "}
                  {moment(item.order?.createdAt).add(1, "hour").format("hh:mm")}
                </td>
              ) : (
                <td className="py-2">
                  {moment(item.order?.createdAt).format("hh:mm")}
                </td>
              )}
              <td className="py-2">
                <p
                  className={`${
                    item.order?.status === "Success"
                      ? "bg-green-200"
                      : "bg-red/10"
                  } rounded-full w-max mx-auto py-2 px-4`}
                >
                  {item.order?.status}
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
