"use client";

import React from "react";
import DialogLayout from "../../layout/DialogLayout";
import { storeDialog } from "@/store/dialog";
import { useAtom } from "jotai";
import Image from "next/image";
import useImagePreview from "@/hooks/useImagePreview";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { uploadImage } from "@/api/upload/fetcher";
import { TypeUser } from "@/api/user/types";
import { useMutationArticle } from "@/api/article/mutation";

const DialogCreate = () => {
  const [dialog, setDialog] = useAtom(storeDialog);
  const { previewUrl, setPreviewUrl, handleImageChange } = useImagePreview();
  const [imageFile, setImageFile] = React.useState<File | null>(null);

  const imageSrc = previewUrl || dialog.data?.foto || "";

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

  const handleUploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await uploadImage(formData);
      console.log("response", response);
      const imageUrl = response.data;

      return imageUrl; // URL gambar yang berhasil di-upload
    } catch (error) {
      console.error("Error uploading image:", error);
      throw new Error("Failed to upload image");
    }
  };

  const { serviceArticle } = useMutationArticle();
  const mutationArticle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const imageUrl = imageFile
      ? await handleUploadImage(imageFile)
      : dialog.data?.image;

    const payloadArticle: TypeUser = {
      foto: imageUrl,
      email: dialog.data?.email,
      namaLengkap: dialog.data?.namaLengkap,
      noTlp: dialog.data?.noTlp,
      jenis_kelamin: dialog.data?.jenis_kelamin,
      alamat: dialog.data?.alamat,
      tanggal_lahir: dialog.data?.tanggal_lahir,
    };

    try {
      if (dialog.type === "CREATE") {
        // Call create gallery API
        await serviceArticle({
          type: "create",
          body: payloadArticle,
        });
        closeDialog();
      } else {
        // Call update gallery API
        await serviceArticle({
          type: "update",
          body: payloadArticle,
          id: dialog.data?.id,
        });
        closeDialog();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DialogLayout
      show={dialog.type !== "DELETE" && dialog.show}
      onHide={closeDialog}
      title={dialog.type === "CREATE" ? "Tambah Pengguna" : "Update Pengguna"}
    >
      <form onSubmit={mutationArticle} className="flex flex-col gap-3">
        <div className="h-52 w-52 rounded-full mx-auto border bg-white shadow-1 overflow-hidden mb-2">
          {previewUrl || dialog.data?.foto ? (
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
          name="image"
          onChange={(e) => {
            handleImageChange(e); // Update preview
            const file = e.target.files?.[0];
            setImageFile(file ?? null); // Set file for upload
          }}
          className="max-w-72 mx-auto"
        />
        <div className="flex flex-col gap-1">
          <p>Email</p>
          <Input
            type="email"
            placeholder="Email"
            value={dialog.data?.email ?? ""}
            onChange={onInputChange}
            name="email"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <p>Nama Lengkap</p>
          <Input
            name="namaLengkap"
            id=""
            value={dialog.data?.namaLengkap ?? ""}
            onChange={onInputChange}
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <p>No Telephone</p>
          <Input
            name="noTlp"
            id=""
            placeholder="No Telephone"
            value={dialog.data?.noTlp ?? ""}
            onChange={onInputChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <p>Tanggal</p>
          <input
            type="date"
            onChange={onInputChange}
            name="date"
            value={dialog.data?.date ?? ""}
            className="border text-sm shadow-sm rounded-md overflow-hidden p-1 outline-none"
          />
        </div>
        <Button type="submit">
          {dialog.type === "CREATE" ? "Tambah Pengguna" : "Simpan Perubahan"}
        </Button>
      </form>
    </DialogLayout>
  );
};

export default DialogCreate;
