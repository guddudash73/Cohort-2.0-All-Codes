import { Client } from "pg";

//Creating a Connection string variable
const client = new Client({
  connectionString:
    "postgresql://my-postgres_owner:xndZt9M4Xfha@ep-tight-firefly-a52ik7pu.us-east-2.aws.neon.tech/my-postgres?sslmode=require",
});
//
//
//

// //....Creating Table
// async function createUserTable() {
//   await client.connect(); //Connecting to the database
//   const result = await client.query(`
//         CREATE TABLE users (
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//     `);
//   console.log(result);
// }

// createUserTable();
//
//
//

// //......Inserting data in that table
// //This is not the optimal way to put data in database
// async function insertData() {
//   try {
//     await client.connect(); //connecting to the database
//     const result = await client.query(`
//         INSERT INTO users (username, email, password)
//         VALUES ('Sinu Nayak', 'sinu@gmail.com', '756132')
//         `); //"INSERT INTO users" means this data will goes into the user table. (username, email, password) means the data will go into these fields .
//     // "VALUES" represents the actuall data that will inserted into the table
//     console.log("Insertion success", result);
//   } catch (err) {
//     console.error("Error during the insertion", err);
//   } finally {
//     await client.end(); //This will end the Connection to the database
//   }
// }
// //This code have a problem that is the user can do sql injection throgh the user input fields, and that can lead to delete the database also so this way to do sql injuction is not optimal.
// insertData();
//
//
//
//

// //The optimal way to put data in the database
// async function insertData(username: string, email: string, password: string) {
//   //1st we take the user inputs as the arguments in the function
//   try {
//     await client.connect(); //connecting to the database;
//     const insertQuery =
//       "INSERT INTO users (username, email, password) VALUES($1, $2, $3)"; //creating a variable from the INSERT and VALUE query instead of passing the user field values directly we put $1, $2, $3 short of arguments.
//     const values = [username, email, password]; //creating an array out of all user input field values that we recived through our arguments.
//     const res = await client.query(insertQuery, values); //querying on the client db and passing the "inserQuery" and that "values" array that we define from the user input fields. So that the the $1, $2, $3 we have mentioned on the "insertQuery" query string that will work as the arguments and take data from the values array respectively.
//     console.log("Insertion success:", res);
//   } catch (err) {
//     console.error("Error during the insertion:", err);
//   } finally {
//     await client.end(); //closing the connection from the db
//   }
// }

// insertData("Gudi Dash", "gudi@gmail.com", "45466").catch(console.error);
//
//
//
//

// //.........Fetch user data from the database given an email(get). ("query data/ SELECT")
// async function getUser(email: string) {
//   //taking the email as argument to this function.
//   try {
//     await client.connect(); //establising the connection to the db.
//     const query = "SELECT * FROM users WHERE email = $1"; //defining the query string to a variable.
//     const values = [email]; //creating the value with the array of arguments that the user have passed.
//     const result = await client.query(query, values); //finally calling the query to the database with the query string and the values respectively and storing the value in a variable.

//     if (result.rows.length > 0) {
//       console.log("User found:", result.rows[0]);
//       return result.rows[0];
//     } else {
//       console.log("No user found with the given email id");
//       return null;
//     }
//   } catch (err) {
//     console.error("Error during fetching user:", err);
//     throw err;
//   } finally {
//     await client.end(); //closing the connection with the db.
//   }
// }

// getUser("gudi@gmail.com").catch(console.error);
//
//
//
//
//

// //.........UPDATE Data in a database.
// async function updateData(password: string, email: string) {
//   try {
//     await client.connect();
//     const updateQuery = "UPDATE users SET password = $1 WHERE email = $2"; //SQL string for update data in users table
//     const values = [password, email]; //defining array from the user provied string
//     const result = await client.query(updateQuery, values); //Running query on the db
//     console.log("Password successfully updated", result);
//   } catch (err) {
//     console.error("Error during updating the passsword", err);
//   } finally {
//     await client.end();
//   }
// }

// updateData("989898", "guddu@gmail.com").catch(console.error);
//
//
//
//

// //......DELETE data in a database / table
// async function deleteData(email: string) {
//   try {
//     await client.connect();
//     const deleteQuery = "DELETE FROM users WHERE email = $1";
//     const values = [email];
//     const result = await client.query(deleteQuery, values);
//     console.log("User deleted", result);
//   } catch (err) {
//     console.error("Error while deleting the user", err);
//   } finally {
//     await client.end();
//   }
// }

// deleteData("guddu@gmail.com").catch(console.error);
