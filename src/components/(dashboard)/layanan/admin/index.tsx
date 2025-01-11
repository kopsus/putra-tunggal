"use client";

import React from "react";
import { DataTable } from "./table/DataTable";
import { useQueryHistories } from "@/api/history/queries";
import { Columns } from "./table/Columns";
import DialogCreate from "./dialog/DialogCreate";
import DialogDelete from "./dialog/DialogDelete";

const LayananAdmin = () => {
  const { dataHistories } = useQueryHistories();

  return (
    <>
      <h2 className="titleSection font-semibold text-black dark:text-white">
        Layanan
      </h2>
      <DataTable data={dataHistories ?? []} columns={Columns} />
      <DialogCreate />
      <DialogDelete />
    </>
  );
};

export default LayananAdmin;
