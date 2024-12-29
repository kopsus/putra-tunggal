import LastInteraction from "@/components/(dashboard)/dashboard/LastInteraction";
import { TodaysTask } from "@/components/(dashboard)/dashboard/TodaysTask";
import TotalActivity from "@/components/(dashboard)/dashboard/TotalActivity";
import React from "react";

const page = () => {
  return (
    <>
      <p className="w-1/2 my-5">
        Hallo, Selamat datang diforum{" "}
        <span className="text-primary font-semibold">PUTRA TUNGGAL</span>{" "}
        Berinteraksi dengan nyaman demi kesehatan mental yang baik
      </p>
      <div className="grid grid-cols-3 gap-5 mb-5">
        <div className="col-span-2">
          <TodaysTask />
        </div>
        <TotalActivity />
      </div>
      <LastInteraction />
    </>
  );
};

export default page;
