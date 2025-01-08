import { prisma } from "@/constants/variables";
import { ResponseHandler } from "@/lib/responseHandler";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: any) {
  try {
    const { id } = params;

    const testimoni = await prisma.testimoni.findUnique({
      where: {
        id,
      },
      include: {
        user: true,
      },
    });

    if (!testimoni) {
      return ResponseHandler.InvalidData("testimoni not found");
    }

    return ResponseHandler.get(testimoni);
  } catch (error) {
    console.error(error);
    return ResponseHandler.serverError();
  }
}

export async function PATCH(req: NextRequest, { params }: any) {
  //   const decoded = await verifyToken(req);
  //   if (decoded instanceof Response) {
  //     return decoded;
  //   }
  try {
    const body = await req.json();
    const { id } = params;

    const testimoni = await prisma.testimoni.findUnique({
      where: {
        id,
      },
    });

    if (!testimoni) {
      return ResponseHandler.InvalidData("testimoni not found");
    }

    const updatedTestimoni = await prisma.testimoni.update({
      where: { id },
      data: body,
    });

    return ResponseHandler.updated(updatedTestimoni);
  } catch (error) {
    return ResponseHandler.serverError();
  }
}

export async function DELETE(req: NextRequest, { params }: any) {
  try {
    const { id } = await params;

    const testimoni = await prisma.testimoni.findUnique({
      where: {
        id,
      },
    });

    if (!testimoni) {
      return ResponseHandler.InvalidData("testimoni not found");
    }
    const deletedTestimoni = await prisma.testimoni.delete({
      where: { id },
    });

    return ResponseHandler.deleted(deletedTestimoni);
  } catch (error) {
    return ResponseHandler.serverError();
  }
}
