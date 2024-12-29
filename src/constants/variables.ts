import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export { prisma, baseURL };
