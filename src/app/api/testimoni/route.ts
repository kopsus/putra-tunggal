import { prisma } from "@/constants/variables";
import { ResponseHandler } from "@/lib/responseHandler";

export async function GET() {
  try {
    const testimoni = await prisma.testimoni.findMany({
      include: {
        user: {
          select: {
            namaLengkap: true,
            foto: true,
          },
        },
      },
    });
    return ResponseHandler.get(testimoni);
  } catch (error) {
    return ResponseHandler.serverError();
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!body) {
      ResponseHandler.InvalidData();
    }

    const newTestimoni = await prisma.testimoni.create({
      data: body,
    });

    return ResponseHandler.created(newTestimoni);
  } catch (error) {
    return ResponseHandler.serverError();
  }
}
