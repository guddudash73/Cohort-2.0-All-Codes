import { record, z } from "zod";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { signinSchema, signupSchema } from "../utils/zodSchema";
import { createToken } from "../utils/jwt";

const prisma = new PrismaClient();

export async function signup(req: Request, res: Response) {
  const response = signupSchema.safeParse(req.body);

  if (!response.success) {
    const errObj: Record<string, string> = {};

    response.error.issues.forEach((error) => {
      const key = error.path[0];
      const value = error.message;
      errObj[key] = value;
    });

    return res.status(400).json(errObj);
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: req.body.email,
      },
    });

    if (existingUser) {
      return res.status(401).json({ message: "Email id already taken" });
    }
  } catch (err) {
    return res.status(503).json({ message: "Internal error occured" });
  }

  try {
    const result = await prisma.user.create({
      data: {
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      },
    });

    const token = await createToken(`${result.id}`);

    res.status(200).json({
      message: `Hii ${req.body.firstName}, Welcome to Todo app. Your USER ID is ${result.id}`,
      token,
    });
  } catch (err) {
    return res.status(503).json({ message: "Internal error occured" });
  }
}

export async function signin(req: Request, res: Response) {
  const response = signinSchema.safeParse(req.body);

  const errorObj: Record<string, string> = {};

  if (!response.success) {
    response.error.issues.forEach((error) => {
      const key = error.path[0];
      const value = error.message;
      errorObj[key] = value;
    });

    return res.status(400).json(errorObj);
  }

  try {
    const result = await prisma.user.findUnique({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
    });

    if (!result) {
      return res.status(404).json({ Message: "User not found" });
    }

    const token = await createToken(`${result?.id}`);

    return res.status(200).json({
      message: `Hi ${result?.firstName} Welcome back to Todo app. Your USER ID id ${result?.id}.`,
      token,
    });
  } catch (err) {
    return res.status(503).json({ message: "Internal error occured" });
  }
}
