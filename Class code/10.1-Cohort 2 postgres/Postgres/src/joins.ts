import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://my-postgres_owner:xndZt9M4Xfha@ep-tight-firefly-a52ik7pu.us-east-2.aws.neon.tech/my-postgres?sslmode=require",
});

async function join(id: number) {
  try {
    await client.connect();
    const query =
      "SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode FROM users u JOIN address a ON u.id = a.user_id WHERE u.id = $1"; //This is the join string explanation is in the notes.
    const values = [id];
    const res = await client.query(query, values);
    console.log("Result:", res.rows[0]);
  } catch (err) {
    console.error("Error while joining", err);
  } finally {
    await client.end();
  }
}

join(4);
