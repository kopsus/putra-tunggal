import { ColumnDef } from "@tanstack/react-table";
import { TypeUser } from "@/api/user/types";
import { DataTableRowActions } from "./TableRowActions";
import { formatIDR } from "@/lib/format";

export const Columns: ColumnDef<TypeUser>[] = [
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "namaLengkap",
    header: () => <p className="text-nowrap">Nama Lengkap</p>,
  },
  {
    accessorKey: "noTlp",
    header: () => <p className="text-nowrap">No Telephone</p>,
  },
  {
    accessorKey: "service",
    header: "Harga",
    cell: ({ row }) => {
      const role = row.original.role?.role;
      const price = row.original.service?.harga; // Mengambil harga dari service

      // Tampilkan harga hanya jika role adalah Dokter
      if (role === "Dokter" && typeof price === "number" && !isNaN(price)) {
        return <p>{formatIDR(price)}</p>;
      }

      // Jika role bukan Dokter atau harga tidak valid, tampilkan pesan fallback
      return <p>Harga tidak tersedia</p>;
    },
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const role = row.original.role?.role;
      return <p>{role}</p>;
    },
  },
  {
    accessorKey: "Action",
    header: "Action",
    cell: ({ row }) => {
      const itemId = row.original.id;
      return <DataTableRowActions itemId={itemId ?? ""} />;
    },
  },
];
