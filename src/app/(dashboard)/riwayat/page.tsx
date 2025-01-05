'use client';
import TableRiwayat from "@/components/(dashboard)/riwayat/Table";
import Toolbar from "@/components/(dashboard)/riwayat/Toolbar";
import React, { useState } from "react";

const Page = () => {
  const [searchName, setSearchName] = useState<string>('')
  return (
    <>
      <Toolbar searchValue={searchName} setSearch={setSearchName} />
      <TableRiwayat searchName={searchName}  />
    </>
  );
};

export default Page;
