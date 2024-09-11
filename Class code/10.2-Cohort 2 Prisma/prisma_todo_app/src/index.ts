import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient(); //Generating the prisma client and assgin it to a veriable

////Inserting a user to user table
// async function insertUser(
//   email: string,
//   password: string,
//   firstName: string,
//   lastName: string
// ) {
//   const res = await prisma.user.create({
//     data: {
//       //data defines what are the data we want to put in the user table
//       email,
//       password,
//       firstName,
//       lastName,
//     },
//     select: {
//       //select defines what should this create operation return to res.
//       firstName: true,
//       lastName: true,
//     },
//   });
//   console.log(res);
// }

// insertUser("guddu@gmail.com", "123456", "Guddu", "Dash");
//
//
//
//

// //Updating the user info in User table
// interface UpdateParams {
//   //defining the interface for the update info object
//   firstName: string;
//   lastName: string;
// }

// async function updateUser(
//   email: string,
//   { firstName, lastName }: UpdateParams
// ) {
//   const res = await prisma.user.update({
//     where: { email }, //where defines the value that the prisma will look for in table to find exact user
//     data: {
//       firstName,
//       lastName,
//     }, //data represents the values that gonna update on the table
//     select: {
//       firstName: true,
//       lastName: true,
//     }, //select remains the same as previous
//   });
//   console.log(res);
// }

// updateUser("guddu@gmail.com", { firstName: "Sinu", lastName: "Nayak" });
//
//
//
//
//
//

//Get a user details.
async function getUser(email: string) {
  const res = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  console.log(res);
}

getUser("guddu@gmail.com");
