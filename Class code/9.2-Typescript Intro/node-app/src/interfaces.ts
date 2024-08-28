// interface User {
//   //defining the interface
//   firstName: string;
//   lastName: string;
//   age: number;
//   //all arguments in iterface is not optional that means we have to pass all argument we define in the interface, there is a way to define optional argument that is:-
//   email?: string; //we use "?" after the argument name after that that argument will be a optional argument so that if we dont pass that argument while calling the function the compiler will not give any error
// }

// function isLegal(user: User) {
//   //using the interface as type in argument
//   if (user.age > 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const ans = isLegal({
//   firstName: "guddu",
//   lastName: "dash",
//   age: 10,
// });

// console.log(ans);
