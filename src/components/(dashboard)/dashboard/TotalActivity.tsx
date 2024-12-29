import React from "react";
import Card from "../_global/Card";
import { Progress } from "@/components/ui/progress";

const TotalActivity = () => {
  return (
    <Card className="rounded-xl p-5">
      <p className="text-neutral-400 font-semibold mb-5">Total Kegiatan</p>
      <p className="text-3xl font-semibold border-b-2 border-primary pb-2 mb-5">
        25 <span className="text-sm font-normal">Bulan ini</span>
      </p>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <p>Online</p>
            <p>15 / 25</p>
          </div>
          <Progress value={65} className="bg-online/20" valueColor="online" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <p>Offline</p>
            <p>10 / 25</p>
          </div>
          <Progress value={40} className="bg-offline/20" valueColor="offline" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <p>Not Completed</p>
            <p>2 / 25</p>
          </div>
          <Progress value={12} className="bg-red/20" valueColor="red" />
        </div>
      </div>
    </Card>
  );
};

export default TotalActivity;
