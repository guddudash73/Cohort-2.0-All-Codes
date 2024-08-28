// enum Direction { //Definig an Enum with a name
//   up, //default value 0
//   down, //default value 1
//   left, //default value 2
//   right, //default value 3
// }

// function doSomething(keyPressed: Direction) {
//   //Passing erum(Direction) as the datatype in arguments so that it only allows the values from erum only
//   //do something
//   if (keyPressed == Direction.up) {
//   }
// }

// doSomething(Direction.up); //calling the function with the value of erum
// doSomething(Direction.right);

// console.log(Direction.down); //since we haven't provide any values to our enum variables the value for the variables starts from 0 and increse by 1 till the end of our enum list
// console.log(Direction.up);
//
//
//

//We can change the default value in Enums

// enum Direction { //Definig an Enum with a name
//   up = 1, //Changing the default value to one
//   down, //becomes 2 by default
//   left, //becomes 3
//   right, //becomes 4
// }

// function doSomething(keyPressed: Direction) {
//   //Passing erum(Direction) as the datatype in arguments so that it only allows the values from erum only
//   //do something
//   if (keyPressed == Direction.up) {
//   }
// }

// doSomething(Direction.up); //calling the function with the value of erum
// doSomething(Direction.right);

// console.log(Direction.down); //since we haven't provide any values to our enum variables the value for the variables starts from 0 and increse by 1 till the end of our enum list
// console.log(Direction.up);
//
//
//

//we can also set the value of enums as string

// enum Direction { //Definig an Enum with a name
//   up = "up", //Changing the default value to string
//   down = "down", //If we change the value of one enum to string we have to change the all Enum values to string as well
//   left = "left",
//   right = "right",
// }

// function doSomething(keyPressed: Direction) {
//   //Passing erum(Direction) as the datatype in arguments so that it only allows the values from erum only
//   //do something
//   if (keyPressed == Direction.up) {
//   }
// }

// doSomething(Direction.up); //calling the function with the value of erum
// doSomething(Direction.right);

// console.log(Direction.down); //since we haven't provide any values to our enum variables the value for the variables starts from 0 and increse by 1 till the end of our enum list
// console.log(Direction.up);
//
//
//

//A common usecase of enums in express

// const app = express()
// enum ResponseStatus {
//   Success = 200,
//   NotFound = 404,
//   Error = 500,
// }

// app.get("/", (req,res)=>{
//     if(req.query.userId){
//         res.status.(ResponseStatus.Error).json{}
//     }

//     //add so on

//     res.status(ResponseStatus.Success).json{}
// })
