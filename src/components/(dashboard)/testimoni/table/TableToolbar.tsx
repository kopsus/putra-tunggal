import { Input } from "@/components/ui/input";
import React from "react";
import { Table } from "@tanstack/react-table";

interface ITableToolbar<TData> {
  table: Table<TData>;
}

export function TableToolbar<TData>({ table }: ITableToolbar<TData>) {
  return (
    <div className="flex items-center justify-end">
      <div className="flex items-center gap-2 overflow-x-auto">
        {/* <Input
          type="text"
          placeholder="Cari nama lengkap..."
          className="w-[150px] md:w-[250px] border outline-none"
          value={
            (table.getColumn("namaLengkap")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("namaLengkap")?.setFilterValue(event.target.value)
          }
        /> */}
      </div>
    </div>
  );
}
