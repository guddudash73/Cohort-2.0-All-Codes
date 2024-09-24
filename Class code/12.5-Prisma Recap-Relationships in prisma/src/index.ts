import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// async function createUser(
//   username: string,
//   password: string,
//   firstName: string,
//   lastName: string
// ) {
//   const res = await prisma.user.create({
//     data: {
//       username,
//       password,
//       firstName,
//       lastName,
//     },
//   });
//   console.log(res);
// }

// createUser("guddu", "123456", "guddu", "dash");
//
//
//
//
//

// async function createTodo(userId: number, title: string, description: string) {
//   const res = await prisma.todo.create({
//     data: {
//       userId,
//       title,
//       description,
//     },
//   });
//   console.log(res);
// }

// createTodo(4, "test131", "test");
//
//
//
//
//
//

async function findTodoAndUser(userId: number) {
  const res = await prisma.todo.findMany({
    where: {
      userId: userId,
    },
    select: {
      title: true,
      description: true,
      done: true,
      user: {
        select: {
          username: true,
        },
      },
    },
  });
  console.log(res[0]);
}

findTodoAndUser(1);
