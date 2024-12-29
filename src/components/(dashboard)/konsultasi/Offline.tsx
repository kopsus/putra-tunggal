import React from "react";
import Card from "../_global/Card";

const Offline = () => {
  const dataThead = ["Layanan", "Tanggal", "Waktu", "Nama Pasien"];
  const dataTbody = [
    {
      layanan: "Konsultasi Psikolog",
      tanggal: "29 Oktober",
      waktu: "10 : 00",
      nama_pasien: "Sani Akhzam",
    },
    {
      layanan: "Konsultasi Psikolog",
      tanggal: "29 Oktober",
      waktu: "10 : 00",
      nama_pasien: "Sani Akhzam",
    },
  ];

  return (
    <>
      <Card className="rounded-xl p-5 mb-10">
        <p className="text-lg font-semibold mb-5">Hari ini</p>
        <div className="grid grid-cols-4 gap-5 mb-5">
          {dataThead.map((item, index) => (
            <p
              key={index}
              className="text-center text-base border-b-2 border-primary pb-3"
            >
              {item}
            </p>
          ))}
        </div>
        <div className="grid gap-5">
          {dataTbody.map((item, index) => (
            <div key={index} className="grid grid-cols-4 gap-5">
              <p className="text-center text-base bg-online/20 rounded-full py-2 px-4 w-max mx-auto">
                {item.layanan}
              </p>
              <p className="text-center text-base bg-online/20 rounded-full py-2 px-4 w-max mx-auto">
                {item.tanggal}
              </p>
              <p className="text-center text-base bg-online/20 rounded-full py-2 px-4 w-max mx-auto">
                {item.waktu}
              </p>
              <p className="text-center text-base bg-online/20 rounded-full py-2 px-4 w-max mx-auto">
                {item.nama_pasien}
              </p>
            </div>
          ))}
        </div>
      </Card>
      <Card className="rounded-xl p-5 mb-10">
        <p className="text-lg font-semibold mb-5 text-primary/50">
          Akan Datang
        </p>
        <div className="grid grid-cols-4 gap-5 mb-5">
          {dataThead.map((item, index) => (
            <p
              key={index}
              className="text-center text-base border-b-2 border-primary pb-3"
            >
              {item}
            </p>
          ))}
        </div>
        <div className="grid gap-5">
          {dataTbody.map((item, index) => (
            <div key={index} className="grid grid-cols-4 gap-5">
              <p className="text-center text-base bg-primary/20 rounded-full py-2 px-4 w-max mx-auto">
                {item.layanan}
              </p>
              <p className="text-center text-base bg-primary/20 rounded-full py-2 px-4 w-max mx-auto">
                {item.tanggal}
              </p>
              <p className="text-center text-base bg-primary/20 rounded-full py-2 px-4 w-max mx-auto">
                {item.waktu}
              </p>
              <p className="text-center text-base bg-primary/20 rounded-full py-2 px-4 w-max mx-auto">
                {item.nama_pasien}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
};

export default Offline;
