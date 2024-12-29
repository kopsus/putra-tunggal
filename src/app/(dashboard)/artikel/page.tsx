"use client";

import Breadcrumb from "@/components/(dashboard)/_global/Breadcrumb";
import { DataTable } from "@/components/(dashboard)/artikel/table/DataTable";
import React from "react";
import { dataArtikel } from "@/data/artikel";
import { columns } from "@/components/(dashboard)/artikel/table/Columns";
import DialogDelete from "@/components/(dashboard)/artikel/dialog/DialogDelete";
import DialogCreate from "@/components/(dashboard)/artikel/dialog/DialogCreate";
import { useSetAtom } from "jotai";
import { storeDialog } from "@/store/dialog";

const Article = () => {
  const setDialog = useSetAtom(storeDialog);
  return (
    <>
      <Breadcrumb
        pageName="Artikel"
        onClick={() => {
          setDialog({
            type: "CREATE",
            show: true,
            data: null,
          });
        }}
      />
      <DataTable columns={columns} data={dataArtikel} />
      <DialogDelete />
      <DialogCreate />
    </>
  );
};

export default Article;
