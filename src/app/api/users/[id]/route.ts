import { prisma } from "@/constants/variables";
import { ResponseHandler } from "@/lib/responseHandler";
import { NextRequest } from "next/server";
import bcrypt from "bcrypt";

export async function GET(req: NextRequest, { params }: any) {
  try {
    const { id } = await params;

    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      return ResponseHandler.InvalidData("user not found");
    }

    return ResponseHandler.get(user);
  } catch (error) {
    console.error(error);
    return ResponseHandler.serverError();
  }
}

export async function PATCH(req: NextRequest, { params }: any) {
  try {
    const body = await req.json();
    const { id } = params;

    // Cari user berdasarkan ID untuk mendapatkan data lama
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        password: true,
        id: true,
        roleId: true,
        email: true,
        namaLengkap: true,
        alamat: true,
        noTlp: true,
        jenis_kelamin: true,
        tanggal_lahir: true,
        foto: true,
      },
    });

    if (!user) {
      return ResponseHandler.InvalidData("User not found");
    }

    // Perbarui password hanya jika password baru diberikan dan berbeda
    let hashedPassword = user.password; // Default: gunakan password lama
    if (body.password && body.password !== user.password) {
      const salt = await bcrypt.genSalt();
      hashedPassword = await bcrypt.hash(body.password, salt);
    }

    // Gabungkan data lama dengan data baru (body)
    const updatedData = {
      ...user, // Data lama
      ...body, // Data baru (menimpa data lama jika ada)
      password: hashedPassword, // Pastikan menggunakan password yang sesuai
    };

    // Update user di database
    const updateUser = await prisma.user.update({
      where: { id },
      data: updatedData,
    });

    return ResponseHandler.updated(updateUser, "Berhasil update data user");
  } catch (error) {
    console.error(error);
    return ResponseHandler.serverError();
  }
}

export async function DELETE(req: NextRequest, { params }: any) {
  try {
    const { id } = await params;

    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      return ResponseHandler.InvalidData("User not found");
    }

    const deletedUser = await prisma.user.delete({
      where: { id },
    });

    return ResponseHandler.deleted(deletedUser);
  } catch (error) {
    return ResponseHandler.serverError();
  }
}
