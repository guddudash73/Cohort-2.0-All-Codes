import z from "zod";

//User Schemas
export const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, { message: "Password must be 6 character long" }),
  name: z.string().optional(),
});

export const signinSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

//Posts Schemas
export const createPostSchema = z.object({
  title: z
    .string()
    .max(150, { message: "Title must not be more than 150 character" }),
  content: z.string(),
});

export const updatePostSchema = z.object({
  title: z
    .string()
    .max(150, { message: "Title must not be more than 150 character" })
    .optional(),
  content: z.string().optional(),
  published: z.boolean().optional(),
});

export type SignupInput = z.infer<typeof signupSchema>;
export type SigninInput = z.infer<typeof signinSchema>;
export type CreatePostInput = z.infer<typeof createPostSchema>;
export type UpdatePostInput = z.infer<typeof updatePostSchema>;
