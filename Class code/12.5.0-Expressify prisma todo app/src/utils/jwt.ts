import jwt from "jsonwebtoken";
import { jwtSecret } from "./jwtSecret";

export async function createToken(id: string) {
  const token = await jwt.sign(id, jwtSecret);
  return token;
}

export async function verifyToken(token: string) {
  const userId = await jwt.verify(token, jwtSecret);

  return userId;
}
