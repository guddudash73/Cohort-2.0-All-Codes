//Problem

// function getFirstElement(arr: (string | number)[]) {
//   return arr[0];
// }

// const el = getFirstElement(["guddu", "dash"]);
// console.log(el.toUpperCase()); //This will through error because el datatype is not string it is string or number the toUpperCase() function only works with string
//
//
//

//This will compile but...

// function getFirstElement(arr: any[]) {
//   return arr[0];
// }

// //const el = getFirstElement(["guddu", "dash", 1, 2]); //This will compile and run as expected
// const el = getFirstElement([1, 2]); //This will compiled successfully but when we gonna run the actual compiled js file the code gonna crash.
// console.log(el.toUpperCase());
//
//
//

//The solution

function getFirstElement<T>(arr: T[]) {
  //Here with <T> this and giving the datatype of argument as T we are basically telling the function that the arument can have any type of datatype.
  //We can give the return type as any type as ":T" adding this after the parentheses but since we alredy define the argument datatype as anything and we returning the argument only ts gonna difine the return type to any by default
  return arr[0];
}

// const el = getFirstElement(["guddu", "dash"]);

// const el = getFirstElement(["guddu", "dash", 2]); //if we pass both number and string as argument to the function the function gonna take it and process it because we make the argument as it will take any datatype but..
// console.log(el.toUpperCase()); //while we use the toUpperCase() to it, then it will gonna complain because the datatype of el is not string it is string | Number

//checking the arguments at the function stage
// const el = getFirstElement<string>(["guddu", "dash", 1]) // This gonna complain, the funcion is not gonna take number as argument any more becuse we strict the function to take the arguments as sting by adding "<string>" this after the function name.
