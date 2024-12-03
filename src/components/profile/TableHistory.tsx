import { dataHistoryInteraction } from "@/lib/data";

type TypeService = "Online" | "Offline";

export type TypeleLastInteraction = {
  docterName: string;
  service: TypeService;
  date: string;
  time: string;
};

const TableHistory = () => {
  const thStyle = "border-b-2 border-black py-2";
  const tdStyle = "border-b-2 py-4 text-center";

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
                <p className="badge">{item.docterName}</p>
              </td>
              <td className={tdStyle}>
                <div
                  className={`badge ${
                    item.service === "Online" ? "bg-online/20" : "bg-offline/20"
                  } flex items-center justify-center gap-2`}
                >
                  <div
                    className={`h-5 w-5 rounded-full ${
                      item.service === "Online"
                        ? "bg-green-600"
                        : "bg-yellow-600"
                    }`}
                  />
                  <p>{item.service}</p>
                </div>
              </td>
              <td className={tdStyle}>
                <p className="badge">{item.date}</p>
              </td>
              <td className={tdStyle}>
                <p className="badge">{item.time} WIB</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableHistory;
