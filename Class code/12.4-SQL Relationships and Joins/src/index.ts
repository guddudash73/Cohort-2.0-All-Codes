import { Client } from "pg";
const client = new Client({
  connectionString: "postgresql://postgres:guddu@localhost:5432/postgres",
});

//.......Recap........

// async function createUsersTable() {
//   await client.connect();
//   const result = await client.query(`
//         CREATE TABLE users (
//         id SERIAL PRIMARY KEY,
//         username VARCHAR(50) UNIQUE NOT NULL,
//         email VARCHAR(255) UNIQUE NOT NULL,
//         password VARCHAR(255) NOT NULL,
//         created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//         `);
//   console.log(result);
// }

// createUsersTable();
//
//
//
//

// async function insertUserData(
//   username: string,
//   password: string,
//   email: string
// ) {
//   await client.connect();
//   //   const result = await client.query(`
//   //         INSERT INTO users (username, password, email)
//   //         VALUES('${username}', '${password}', '${email}')
//   //         `); //violates sql injection

//   const sqlQuery = `INSERT INTO users (username, password, email) VALUES($1, $2, $3)`;
//   const values = [username, password, email];
//   const result = await client.query(sqlQuery, values); //this is the optimal way to do insert into the sql database.
//   console.log(result);
// }

// insertUserData("gudddu123", "123456", "guddu123@gmail.com");
//
//
//
//
//

//.....new.....
//Relationships

// async function relateUserToAddressTable() {
//   await client.connect();
//   const result = await client.query(`
//         CREATE TABLE addresses (
//         id SERIAL PRIMARY KEY,
//         user_id INTEGER NOT NULL,
//         city VARCHAR(100) NOT NULL,
//         country VARCHAR(100) NOT NULL,
//         street VARCHAR(255) NOT NULL,
//         pincode VARCHAR(20),
//         FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
//         );
//         `);
//   console.log(result);
// }
// relateUserToAddressTable();
//
//
//
//
//

// async function insertAddresses(
//   user_id: number,
//   city: string,
//   country: string,
//   street: string,
//   pincode: string
// ) {
//   await client.connect();
//   const sqlString = `INSERT INTO addresses (user_id, city, country, street, pincode) VALUES ($1, $2, $3, $4, $5)`;
//   const values = [user_id, city, country, street, pincode];
//   const res = await client.query(sqlString, values);
//   console.log(res);
// }

// insertAddresses(1, "bhadrak", "India", "nalgunda", "756132");
//
//
//
//
//

//Transactions
// async function insertUserAndAddress(
//   username: string,
//   email: string,
//   password: string,
//   city: string,
//   country: string,
//   street: string,
//   pincode: string
// ) {
//   await client.connect();
//   await client.query(`BEGIN;`);
//   const userQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;`;
//   const userValues = [username, email, password];
//   const resUser = await client.query(userQuery, userValues);
//   console.log(resUser);
//   const userId = resUser.rows[0].id;
//   const addressQuery = `INSERT INTO addresses (user_id, city, country, street, pincode) VALUES ($1, $2, $3, $4, $5);`;
//   const addressValues = [userId, city, country, street, pincode];
//   const resAddress = await client.query(addressQuery, addressValues);
//   console.log(resAddress);
//   await client.query(`COMMIT;`);
// }

// insertUserAndAddress(
//   "gudddu1234",
//   "guddu1234@gmail.com",
//   "123456",
//   "bhadrak",
//   "india",
//   "nalgunda",
//   "756132"
// );
//
//
//
//
//

//Join

async function join(id: number) {
  await client.connect();
  const sqlString = `SELECT users.id, users.username, users.email, a.city, a.country, a.street, a.pincode FROM users JOIN addresses a ON users.id = a.user_id WHERE users.id = $1;`;
  const res = await client.query(sqlString, [id]);
  console.log(res.rows[0]);
}

join(7);
