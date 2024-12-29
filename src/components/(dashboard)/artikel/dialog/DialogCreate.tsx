"use client";

import React from "react";
import DialogLayout from "../../layout/DialogLayout";
import { storeDialog } from "@/store/dialog";
import { useAtom } from "jotai";
import Image from "next/image";
import useImagePreview from "@/hooks/useImagePreview";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TextArea } from "@/components/Input";
import { DatePicker } from "@/components/DatePicker";

const DialogCreate = () => {
  const [dialog, setDialog] = useAtom(storeDialog);
  const { previewUrl, setPreviewUrl, handleImageChange } = useImagePreview();
  const [imageFile, setImageFile] = React.useState<File | null>(null);

  const imageSrc = previewUrl || dialog.data?.image || "";

  const closeDialog = () => {
    setDialog((prev) => ({
      ...prev,
      show: false,
    }));
    setPreviewUrl("");
    setImageFile(null);
  };

  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;

    setDialog((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        [name]: value,
      },
    }));
  };

  return (
    <DialogLayout
      show={dialog.type !== "DELETE" && dialog.show}
      onHide={closeDialog}
      title={dialog.type === "CREATE" ? "Tambah Artikel" : "Update Artikel"}
    >
      <form action="" className="flex flex-col gap-3">
        <div className="w-full h-52 rounded-xl border bg-white shadow-1 overflow-hidden mb-2">
          {previewUrl || dialog.data?.image ? (
            <Image
              src={imageSrc}
              alt="Preview"
              width={0}
              height={0}
              sizes="100vw"
            />
          ) : null}
        </div>
        <Input
          type="file"
          onChange={(e) => {
            handleImageChange(e); // Preview gambar
            const file = e.target.files?.[0];
            setImageFile(file ?? null); // Set image file in state
          }}
        />
        <div className="flex flex-col gap-1">
          <p>Judul</p>
          <Input
            type="text"
            placeholder="Title"
            value={dialog.data?.title ?? ""}
            onChange={onInputChange}
            name="title"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <p>Deskripsi</p>
          <textarea
            name="desc"
            id=""
            value={dialog.data?.desc ?? ""}
            onChange={onInputChange}
            className="h-52 outline-none p-2 border rounded-md text-sm w-full"
          ></textarea>
        </div>
        <div className="flex flex-col gap-1">
          <p>Tanggal</p>
          <input
            type="date"
            onChange={onInputChange}
            value={dialog.data?.date ?? ""}
            className="border text-sm shadow-sm rounded-md overflow-hidden p-1 outline-none"
          />
        </div>
        <Button>
          {dialog.type === "CREATE" ? "Tambah Artikel" : "Simpan Perubahan"}
        </Button>
      </form>
    </DialogLayout>
  );
};

export default DialogCreate;
