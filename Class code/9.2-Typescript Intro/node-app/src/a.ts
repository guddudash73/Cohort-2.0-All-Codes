// let x: number = 1; //here x is a variable and number is the type of thet variable variable (similar like "int a = 1" in C++)
// // x =  "harkirat"  //This will give error because type conversion is not allowed in typescript
// console.log(x);

// function greet(firstName: string) {
//   //We have to specify the type of the arguments in function also otherwise the code will not run
//   console.log("Hello" + firstName);
// }

// greet("guddu");

// function sum(a: number, b: number): number {
//   //We can give the return type in Typescript (after the arguments parentheses we can define the return type of a function followed by semicolon)
//   //If we don't give the return type to any function typescript gonna infer it and give the appropriate return type.
//   return a + b;
// }

// const value = sum(2, 5);
// console.log(value);

// function isLegal(age: number) {
//   //   return age > 18 ? true : false;
//   if (age > 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let x = isLegal(19); //Here x is gonna have boolean type value because the function return the boolean value even though we haven't define the return type the typescript gonna infer it and give the return type as boolean.

function runAfter1S(fn: () => void) {
  //We need to give the type of function that we pass as arguments in a function to give the type we have to give the name of the function and then have to define a anonymous function with the type follwed by a semicolon
  //void means the function can return nothing if the function returns a number we need to specify the type as number
  //here we didn't pass any argument in function if we need we can pass argument with the argument name and type
  setTimeout(fn, 1000);
}

runAfter1S(function () {
  console.log("hii there");
});
