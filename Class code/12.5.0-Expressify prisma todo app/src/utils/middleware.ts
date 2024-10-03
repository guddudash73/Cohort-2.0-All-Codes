import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { verifyToken } from "./jwt";

const prisma = new PrismaClient();

export async function authMiddleware(
  req: Request,
  res: Response,
  next: () => void
) {
  const header = req.header("Authorization") || "";
  const token = header.split(" ")[1];

  if (!token) {
    return res.status(400).json({ message: "please send token" });
  }

  let userId;
  try {
    userId = await verifyToken(token);
  } catch (err) {
    return res.status(401).json({ message: "invalid User(token)" });
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        id: parseInt(`${userId}`),
      },
    });

    if (!existingUser) {
      return res.status(401).json({ message: "user is not logged in" });
    }

    (req as any).userId = existingUser.id;
    await next();
  } catch (err) {
    return res.status(503).json({ message: "Internal error occured" });
  }
}
