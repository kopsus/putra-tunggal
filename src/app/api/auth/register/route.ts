import { ResponseHandler } from "@/lib/responseHandler";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!body) {
      ResponseHandler.InvalidData();
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return ResponseHandler.InvalidData(
        `Email ${existingUser.email} sudah terdaftar`
      );
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);

    const newUser = await prisma.user.create({
      data: {
        ...body,
        password: hashedPassword,
      },
    });

    const { password, ...withoutPassword } = newUser;

    return ResponseHandler.created(withoutPassword);
  } catch (error) {
    return ResponseHandler.serverError();
  }
}
