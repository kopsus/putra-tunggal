import { prisma } from "@/constants/variables";
import { ResponseHandler } from "@/lib/responseHandler";
import { JwtPayload } from "jsonwebtoken";
import { headers } from "next/headers";

export async function POST(req: Request) {
  try {
    const userData = (await headers()).get("x-user-data");
    if (!userData) {
      return ResponseHandler.Unauthorized();
    }
    const user: JwtPayload = JSON.parse(userData);

    const body = await req.json();
    if (!body) {
      ResponseHandler.InvalidData();
    }

    const newOrder = await prisma.order.create({
      data: {
        ...body,
        layanan: "Offline",
        userId: user.id,
      },
    });

    return ResponseHandler.created(newOrder);
  } catch (error) {
    return ResponseHandler.serverError();
  }
}
