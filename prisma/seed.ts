import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const adminRole = await prisma.role.create({ data: { role: "Admin" } });
  const userRole = await prisma.role.create({ data: { role: "User" } });
  const dokterRole = await prisma.role.create({ data: { role: "Dokter" } });

  const hashedPassword = await bcrypt.hash("password", 10);
  const users = [
    {
      namaLengkap: "Admin",
      email: "admin@example.com",
      password: hashedPassword,
      roleId: adminRole.id,
    },
  ];

  const amountOfUser = 4;
  for (let i = 0; i < amountOfUser; i++) {
    users.push({
      namaLengkap: faker.person.fullName(),
      email: faker.internet.email(),
      password: hashedPassword,
      roleId: userRole.id,
    });
  }
  const amountOfDokter = 6;
  for (let i = 0; i < amountOfDokter; i++) {
    users.push({
      namaLengkap: faker.person.fullName(),
      email: faker.internet.email(),
      password: hashedPassword,
      roleId: dokterRole.id,
    });
  }
  const createUser = await prisma.user.createMany({
    data: users,
  });

  const doctors = await prisma.user.findMany({
    where: { role: { role: "Dokter" } },
  });
  const namaService = [
    "Psikiater Ahli",
    "Psikolog Klinis",
    "Psikolog Anak",
    "Psikoterapis",
    "Konselor",
    "Psikiater Ahli",
  ];

  const services: { dokterId: string; namaService: string; harga: number }[] =
    [];

  doctors.forEach((dokter, index) => {
    services.push({
      dokterId: dokter.id,
      namaService: namaService[index],
      harga: parseInt(faker.commerce.price({ min: 100000, max: 1000000 })),
    });
  });

  const createService = await prisma.service.createMany({
    data: services,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
