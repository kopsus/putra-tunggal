"use client";

import Image from "next/image";
// import { formatDate } from "@/lib/format";
import ActionButtons from "./ActionButtons";
import { ColumnDef } from "@tanstack/react-table";
import { TypeArticle } from "@/api/article/types";

export const columns: ColumnDef<TypeArticle>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      return (
        <Image
          src={row.getValue("image")}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="min-w-40 w-40 h-40"
        />
      );
    },
  },
  {
    accessorKey: "title",
    header: "Judul",
  },
  {
    accessorKey: "desc",
    header: "Deskripsi",
    cell: ({ row }) => <p className="line-clamp-3">{row.getValue("desc")}</p>,
  },
  {
    accessorKey: "date",
    header: "Tanggal",
    cell: ({ row }) => <p className="text-nowrap">{row.getValue("date")}</p>,
  },
  {
    accessorKey: "Action",
    header: "Action",
    cell: ({ row }) => {
      const item = row.original;
      const itemId = row.original.id;
      return <ActionButtons item={item} itemId={itemId} />;
    },
  },
];
