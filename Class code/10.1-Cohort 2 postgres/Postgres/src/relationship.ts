import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://my-postgres_owner:xndZt9M4Xfha@ep-tight-firefly-a52ik7pu.us-east-2.aws.neon.tech/my-postgres?sslmode=require",
});

// //Creating the address table and establising the relation between the newly created adderss table and existing users table.
// async function createAddressTable() {
//   await client.connect(); //Connecting to the db
//   const res = await client.query(`
//         CREATE TABLE address (
//             id SERIAL PRIMARY KEY,
//             user_id INTEGER NOT NULL,
//             city VARCHAR(100) NOT NULL,
//             country VARCHAR(100) NOT NULL,
//             street VARCHAR(255) NOT NULL,
//             pincode VARCHAR(20) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
//             FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
//         )
//         `); //This is the schema and the query for the address table
//   console.log("Table created successfully:", res);
// }

// createAddressTable();
//
//
//
//

// //........INSERT address to address table for a user.
// async function addAddress(
//   user_id: number,
//   city: string,
//   country: string,
//   street: string,
//   pincode: number
// ) {
//   try {
//     await client.connect();
//     const insertQuery =
//       "INSERT INTO address (user_id, city, country, street, pincode) VALUES ($1, $2, $3, $4, $5)";
//     const values = [user_id, city, country, street, pincode];
//     const result = await client.query(insertQuery, values);
//     console.log("Address added successfully: ", result);
//   } catch (err) {
//     console.error("Problem while adding the address", err);
//   } finally {
//     await client.end();
//   }
// }

// addAddress(
//   4, //passing the id from the users table that is already present in that table if the id is not present in the users table's row then the excution will fail with an error.
//   "Bhadrak",
//   "India",
//   "College Road, Swarnalata Mess",
//   756131
// ).catch(console.error);
//
//
//
//

//.........Fetching the data from address table (SELECT)
async function getData(user_id: number) {
  try {
    await client.connect();
    const fetchingQuery =
      "SELECT city, country, street, pincode FROM address WHERE user_id = $1";
    const values = [user_id];
    const res = await client.query(fetchingQuery, values);
    console.log("data:", res.rows[0]);
  } catch (err) {
    console.error("error while fetching the data", err);
  } finally {
    await client.end();
  }
}

getData(4).catch(console.error);
