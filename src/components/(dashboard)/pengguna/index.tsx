"use client";

import { User, User2 } from "lucide-react";
import React from "react";
import Card from "../_global/Card";
import { useQueryUsers } from "@/api/user/queries";
import { DataTable } from "./table/DataTable";
import { Columns } from "./table/Columns";
import { Button } from "@/components/ui/button";

const Pengguna = () => {
  const [tabActive, setTabActive] = React.useState("Psikolog");
  const { dataUsers } = useQueryUsers();

  const dataDokter =
    dataUsers?.filter((item) => item.role?.role === "Dokter") || [];

  const dataPasien =
    dataUsers?.filter((item) => item.role?.role === "User") || [];

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 mb-5">
          <button
            onClick={() => setTabActive("Psikolog")}
            className={`${
              tabActive === "Psikolog" ? "bg-primary text-white" : ""
            } flex items-center gap-1 rounded-full overflow-hidden py-2 px-4 text-sm`}
          >
            <User2 size={28} />
            Psikolog
          </button>
          <button
            onClick={() => setTabActive("User")}
            className={`${
              tabActive === "User" ? "bg-primary text-white" : ""
            } flex items-center gap-1 rounded-full overflow-hidden py-2 px-4 text-sm`}
          >
            <User size={28} />
            User
          </button>
        </div>
        <Button className="bg-primary">Tambah Pengguna</Button>
      </div>
      <Card className="p-5 rounded-xl overflow-hidden">
        {tabActive === "Psikolog" ? (
          <DataTable data={dataDokter} columns={Columns} />
        ) : (
          <DataTable data={dataPasien} columns={Columns} />
        )}
      </Card>
    </>
  );
};

export default Pengguna;
