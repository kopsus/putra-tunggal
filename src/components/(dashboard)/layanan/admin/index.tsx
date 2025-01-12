"use client";

import React from "react";
import DialogUpdate from "./dialog/DialogUpdate";
import DialogDelete from "./dialog/DialogDelete";
import TableLayananAdmin from "./table/table";
import { TableToolbar } from "./table/TableToolbar";

const LayananAdmin = () => {
  const [searchValue, setSearch] = React.useState("");
  const [serviceFilter, setServiceFilter] = React.useState("");

  return (
    <>
      <TableToolbar
        setSearch={setSearch}
        searchValue={searchValue}
        setServiceFilter={setServiceFilter}
      />
      <TableLayananAdmin
        searchValue={searchValue}
        serviceFilter={serviceFilter}
      />
      <DialogUpdate />
      <DialogDelete />
    </>
  );
};

export default LayananAdmin;
