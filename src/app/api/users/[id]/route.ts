import { prisma } from "@/constants/variables";
import { ResponseHandler } from "@/lib/responseHandler";
import { NextRequest } from "next/server";

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
