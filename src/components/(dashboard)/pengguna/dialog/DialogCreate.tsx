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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMutationAuth } from "@/api/auth/mutations";
import { useMutationUser } from "@/api/user/mutation";
import { useQueryRoles } from "@/api/user/queries";

const DialogCreate = () => {
  const [dialog, setDialog] = useAtom(storeDialog);
  const { previewUrl, setPreviewUrl, handleImageChange } = useImagePreview();
  const [imageFile, setImageFile] = React.useState<File | null>(null);
  const { dataRole } = useQueryRoles();

  const imageSrc = previewUrl || dialog.data?.foto || "";

  const closeDialog = () => {
    setDialog((prev) => ({
      ...prev,
      show: false,
    }));
    setPreviewUrl("");
    setImageFile(null);
  };

  const onValueChange = (value: string, name: string) => {
    setDialog((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        [name]: value,
      },
    }));
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

  const { serviceAuth } = useMutationAuth();
  const { serviceUser } = useMutationUser();
  const mutationArticle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const imageUrl = imageFile
      ? await handleUploadImage(imageFile)
      : dialog.data?.image;

    const payloadUser: TypeUser = {
      roleId: dialog.data?.roleId ?? null,
      foto: imageUrl ?? null,
      email: dialog.data?.email ?? null,
      namaLengkap: dialog.data?.namaLengkap ?? null,
      noTlp: dialog.data?.noTlp ?? null,
      jenis_kelamin: dialog.data?.jenis_kelamin ?? null,
      tanggal_lahir: dialog.data?.tanggal_lahir ?? null,
      alamat: dialog.data?.alamat ?? null,
      password: dialog.data?.password ?? null,
    };

    try {
      if (dialog.type === "CREATE") {
        // Call create gallery API
        await serviceAuth({
          type: "regsiter",
          body: payloadUser,
        });
        closeDialog();
      } else {
        // Call update gallery API
        await serviceUser({
          type: "update",
          body: payloadUser,
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
          className="max-w-72 mx-auto p-1"
        />
        <div className="flex flex-col gap-1">
          <p>Role</p>
          <Select
            value={dialog.data?.roleId}
            onValueChange={(value) => onValueChange(value, "roleId")}
            required
          >
            <SelectTrigger className="w-full border-2 border-primary/50">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              {dataRole?.map((item, index) => (
                <SelectItem key={index} value={item.id!}>
                  {item.role}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-1">
          <p>Email</p>
          <Input
            type="email"
            placeholder="Email"
            value={dialog.data?.email ?? ""}
            onChange={onInputChange}
            name="email"
            required
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <p>Nama Lengkap</p>
          <Input
            name="namaLengkap"
            placeholder="Nama Lengkap"
            id=""
            value={dialog.data?.namaLengkap ?? ""}
            onChange={onInputChange}
            required
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
          <p>Jenis Kelamin</p>
          <Select
            value={dialog.data?.jenis_kelamin}
            onValueChange={(value) => onValueChange(value, "jenis_kelamin")}
          >
            <SelectTrigger className="w-full border-2 border-primary/50">
              <SelectValue placeholder="Jenis Kelamin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="L">Laki - laki</SelectItem>
              <SelectItem value="P">Perempuan</SelectItem>
            </SelectContent>
          </Select>
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
        <div className="flex flex-col gap-1">
          <p>Alamat</p>
          <textarea
            name="alamat"
            onChange={onInputChange}
            placeholder="Alamat"
            value={dialog.data?.alamat ?? ""}
            className="border h-32 text-sm shadow-sm rounded-md overflow-hidden p-1 outline-none"
          ></textarea>
        </div>
        <div className="flex flex-col gap-1">
          <p>password</p>
          <Input
            name="password"
            id=""
            placeholder="Password"
            value={dialog.data?.password ?? ""}
            onChange={onInputChange}
            required
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
