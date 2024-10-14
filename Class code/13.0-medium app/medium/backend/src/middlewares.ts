import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context } from "hono";
import { verify } from "hono/jwt";

async function authMiddlewares(c: Context, next: () => Promise<void>) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const authHeader = c.req.header("authorization") || " ";
  const token = authHeader.split(" ")[1];

  try {
    const decoded: any = await verify(token, c.env.JWT_SECRET);

    const user = await prisma.user.findUnique({
      where: {
        email: decoded,
      },
    });

    if (!user) {
      c.status(404);
      return c.json({
        message: "wrong email",
      });
    }

    c.set("user", user);
    await next();
  } catch (e) {
    c.status(500);
    return c.json({
      message: "Incorrect Token",
    });
  }
}

export default authMiddlewares;
