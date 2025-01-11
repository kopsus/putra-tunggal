import { ColumnDef } from "@tanstack/react-table";
import { TypeHistory } from "@/api/history/types";
import ActionButtons from "./ActionButtons";
import moment from "moment";

export const Columns: ColumnDef<TypeHistory>[] = [
  {
    accessorKey: "layanan",
    header: "Layanan",
    cell: ({ row }) => {
      return (
        <div
          className={`${
            row.getValue("layanan") === "Online"
              ? "bg-online/20"
              : "bg-offline/20"
          } flex items-center gap-2 rounded-full py-2 px-4 w-max mx-auto`}
        >
          <span
            className={`${
              row.getValue("layanan") === "Online" ? "bg-online" : "bg-offline"
            } w-5 h-5 rounded-full`}
          ></span>
          {row.getValue("layanan")}
        </div>
      );
    },
  },
  {
    accessorKey: "time",
    header: "Waktu",
    cell: ({ row }) => {
      return <p>{moment(row.getValue("time")).format("HH:mm")}</p>;
    },
  },
  {
    header: "Nama User",
    accessorKey: "user", // or path according to your data structure
    cell: ({ row }) => {
      const user = row.original.user;
      return <p>{user?.namaLengkap}</p>;
    },
    filterFn: (row, columnId, filterValue) => {
      const user = row.original.user;
      return (
        user?.namaLengkap
          ?.toLowerCase()
          .includes(filterValue?.toLowerCase() || "") ?? false
      );
    },
  },

  {
    header: "Nama Dokter",
    cell: ({ row }) => {
      const dokter = row.original?.orderItem?.[0]?.service?.dokter;
      return <p>{dokter?.namaLengkap}</p>;
    },
  },
  {
    header: "Service",
    cell: ({ row }) => {
      const service = row.original?.orderItem?.[0]?.service?.namaService;
      return <p>{service}</p>;
    },
  },
  {
    accessorKey: "Action",
    header: "Action",
    cell: ({ row }) => {
      const item = row.original;
      const itemId = row.original.id;

      return <ActionButtons item={item} itemId={itemId ?? ""} />;
    },
  },
];
