import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function insertUser(name: string, phone: number) {
  const res = await client.users.create({
    data: {
      name: name,
      phone: phone,
    },
  });

  console.log(res);
}

insertUser("rashmi", 3984938493);
