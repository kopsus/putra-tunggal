"use client";

import { useQueryTestomoni } from "@/api/testimoni/queries";
import Breadcrumb from "@/components/(dashboard)/_global/Breadcrumb";
import { columns } from "@/components/(dashboard)/testimoni/table/Columns";
import { DataTable } from "@/components/(dashboard)/testimoni/table/DataTable";
import { storeDialog } from "@/store/dialog";
import { useSetAtom } from "jotai";
import React from "react";

const Testimoni = () => {
  const setDialog = useSetAtom(storeDialog);
  const { dataTestimoni } = useQueryTestomoni();

  return (
    <>
      <Breadcrumb
        pageName="Testimoni"
        onClick={() => {
          setDialog({
            type: "CREATE",
            show: true,
            data: null,
          });
        }}
      />
      <DataTable columns={columns} data={dataTestimoni ?? []} />
    </>
  );
};

export default Testimoni;
