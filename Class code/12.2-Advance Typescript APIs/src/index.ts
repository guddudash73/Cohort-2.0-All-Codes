//creating a simple interface for the user object
// interface User {
//   name: string;
//   age: number;
// }

// function sumOfAge(user1: User, user2: User) {
//   return user1.age + user2.age;
// }

// const age = sumOfAge({ name: "guddu", age: 23 }, { name: "sinu", age: 23 });

// console.log(age);
//
//
//
//

//......pick
// interface User {
//   id: number;
//   name: string;
//   age: number;
//   email: string;
//   password: string;
// }

// type UpdateProps = Pick<User, "name" | "age" | "email">; //definig a separate type using pick for the argument to update the user in database, and the type will have the name, age, and password fields

// function UpdateUser(updatedProps: UpdateProps) {
//   //here goes the code to update the database
// }
//
//
//

//.....Partial
// interface User {
//   id: number;
//   name: string;
//   age: number;
//   email: string;
//   password: string;
// }

// type UpdatePropsOptional = Partial<User>; //This means the field in user is all optional we can pick and choose what to use in the function's argument

// //we can use the Pick and Partial combinedly to get a better solution where a part of the interface require in the argumet also needed to optional.

// function UpdateUser(updatedProps: UpdatePropsOptional) {
//   //here goes the code to update the database
// }
//
//
//
//

//......Readonly
// type User = {
//   readonly name: string; //giving readonly before the name property means that this property of the User type is Readonly (can't ba updated in future) the object created with this type by default its values can't be updated in future.
//   age: number; // value for this property can be updated after creating an object out of this type in future.
// };

// const user: Readonly<User> = {
//   //we can give the readonly state to all property in a type by writing Readonly<type_name> while creating a object.
//   name: "jhon",
//   age: 21,
// };

// user.age = 12; //this will complain because the age has the property as readonly
//
//
//
//

//........Records
// type User1 = {
//   [key: string]: { age: number; name: string }; //This is how we used to write the property for a object
// };

// // Using Records.
// type Users = Record<string, { age: number; name: string }>; //This the cleaner way to write property for a object where after Record in between <> the first property is for the key and the second is for the value.

// const users: Users = {
//   "guddu": { age: 21, name: "guddu" },
//   "raman": { age: 34, name: "raman" },
// };
//
//
//
//

//.......maps
// type Users = { name: string; age: number; email: string };

// const users = new Map<string, Users>(); //This is like creating a object like Records we can give the properties in this also

// users.set("guddu", { name: "guddu", age: 23, email: "guddu@gmail.com" }); //This is to inserting the value to the object/Map
// users.set("sinu", { name: "sinu", age: 21, email: "sinu@gmail.com" });

// const user1 = users.get("guddu");
// console.log(user1);
//
//
//
//

//.......Exclude
// type EventType = "scroll" | "click" | "mousemove";
// type ExcudeEvent = Exclude<EventType, "scroll">; //The ExcludeEvent type will have click and mousemove

// const handleEvent = (event: ExcudeEvent) => {
//   console.log(`Handling event  : ${event}`);
// };

// handleEvent("click"); //This will run
// handleEvent("scroll") //This will theough error because we have excluded the scroll in the ExcludeEvent type.
//
//
//
//

//......type interfaces in zod
import { z } from "zod";
import express from "express";

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z
    .number()
    .min(18, { message: "You must be at least 18 years old" })
    .optional(),
});

type FinalUserSchema = z.infer<typeof userProfileSchema>; //this is how we infer the types from the zod schema the FinalUserSchema will have the same properties like the zod schema.

app.put("/user", (req, res) => {
  const result = userProfileSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({ error: result.error });
    return;
  }

  // Type of updateBody is inferred from userProfileSchema
  const updateBody: FinalUserSchema = result.data;

  // update database here
  res.json({
    message: "User updated",
    updateBody,
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));
