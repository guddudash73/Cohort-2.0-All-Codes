import { z } from "zod";

export const signupSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(1, { message: "firstname is required" }),
  lastName: z.string().min(1, { message: "lastname is required" }),
  password: z
    .string()
    .min(6, { message: "password must be at least 6 chatacters long" })
    .max(16, { message: "password cannot be more than 16 characters" }),
});

export const signinSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "password must ne at least 6 characters long" })
    .max(16, { message: "password cannot be more than 16 characters" }),
});

export const todoSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Tittle is required" })
    .max(100, { message: "Tittle cannot be more than 16 characters long" }),
  description: z.string().max(250).optional(),
  done: z.boolean(),
});

export const updateTodoSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Tittle is required" })
    .max(100, { message: "Tittle cannot be more than 16 characters long" })
    .optional(),
  description: z.string().max(250).optional().optional(),
  done: z.boolean().optional(),
});
