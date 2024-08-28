// //Types:-
// type User = {
//   //Types are same as interfaces both lets us aggregate the datas together but types gives us few other things
//   firstName: string;
//   lastName: string;
//   age: number;
// };
//
//
//

{
  /*union*/
}

// function greet(id: number){
//     console.log(id)
// }

// greet(1)
// greet("this") //This will through error because using interfaces we can't assgin multiple data types to an argument but the TYPES lets us do that.
//
//
//

// type GreetArg = number | string | boolean; //defining a type with multiple datatypes
// function greet(id: GreetArg) {
//   //Giving the GreetArg type as datatype to argument (id)
//   console.log(id);
// }

// greet(1);
// greet(true);
// greet("this"); //This will not thorough error because here we can assgin multiple datatypes to a Type and give it a name and then use that type as the datatype of the arguments
//
//
//

// function greet(id: number | String | boolean) {
//   //this is another way to give multiple datatypes to an arguments
//   console.log(id);
// }

// greet(1);
// greet(true);
// greet("this");
//
//
//

{
  /*intersection*/
}

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type Manager = {
//   name: string;
//   department: string;
// };

// interface Unknown {
//   name: string;
//   age: number;
// }

// type TeamLead = Employee & Manager & Unknown; //Using types we can combine the properties of Employee, Manager and Unknown and create a separate type and that type will have all the properties from all the types and iterfaces

// //this work with types and interfaces as well

// const teamLead: TeamLead = {
//   //we can use that to create a object out of it and it will not through any error
//   name: "Guddu Dash",
//   startDate: new Date(),
//   department: "Software developer",
//   age: 20,
// };
//
//
//


//array in TS
const arr: (number | string)[]= [1,3,"gudud", "dash"] //This is how we define an array with multiple datatype
const arr2: string[]= ["gudud", "dash"] //This is how we define an array with a single datatype

function maxValue(arr: number[]){ //This is how we assgin a datatype to array in function
  return arr
}