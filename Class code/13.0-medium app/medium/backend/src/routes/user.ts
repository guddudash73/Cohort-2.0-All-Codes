import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { signupSchema, signinSchema } from "@guddudash73/medium-common";

const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const response = signupSchema.safeParse(body);
  if (!response.success) {
    const errorObj: Record<string, string> = {};

    response.error.issues.forEach((issue) => {
      const key = issue.path.join(".");
      const value = issue.message;
      errorObj[key] = value;
    });
    c.status(411);
    return c.json({ error: errorObj });
  }
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (user) {
      c.status(400);
      return c.json({ message: "User already exists" });
    }

    await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name,
      },
    });
  } catch (e) {
    c.status(500);
    return c.json({ message: "Internal error occurred" });
  }

  const jwt = await sign(body.email, c.env.JWT_SECRET);

  return c.json({ jwt });
});

userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const response = signinSchema.safeParse(body);

  if (!response.success) {
    const errorObj: Record<string, string> = {};
    response.error.issues.forEach((issue) => {
      const key = issue.path.join(".");
      const value = issue.message;
      errorObj[key] = value;
    });

    c.status(411);
    return c.json({ error: errorObj });
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password,
      },
    });

    if (!user) {
      c.status(404);
      return c.json({ message: "user not found" });
    }
  } catch (e) {
    c.status(500);
    return c.json({ message: "Internal error occurred" });
  }

  const jwt = await sign(body.email, c.env.JWT_SECRET);

  return c.json({ jwt });
});

export default userRouter;
