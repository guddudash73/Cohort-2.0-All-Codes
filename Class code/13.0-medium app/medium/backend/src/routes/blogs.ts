import { Hono, Context } from "hono";
import authMiddlewares from "../middlewares";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createPostSchema, updatePostSchema } from "@guddudash73/medium-common";

const blogRouter = new Hono();

blogRouter.use("/", authMiddlewares);

//create post
blogRouter.post("/", async (c: Context) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  });

  const body = await c.req.json();
  const response = createPostSchema.safeParse(body);
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
  const user = c.get("user");

  try {
    const blog = await prisma.post.create({
      data: {
        authorId: user.id,
        title: body.title,
        content: body.content,
      },
    });

    return c.json({
      message: "Post created successfully",
      id: blog.id,
    });
  } catch (err) {
    c.status(411);
    return c.json({
      message: "Error while creating the post",
    });
  }
});

//get all blog
blogRouter.get("/bulk", async (c: Context) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const posts = await prisma.post.findMany();

    return c.json({ posts });
  } catch (e) {
    c.status(500);
    c.json({ message: "internal error occurred" });
  }
});

//update post
blogRouter.put("/:blogId", async (c: Context) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const response = updatePostSchema.safeParse(body);
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
    const update = await prisma.post.update({
      where: {
        id: c.req.param("blogId"),
      },
      data: {
        title: body.title,
        content: body.content,
        published: body.published,
      },
    });

    return c.json({ message: "Blog updated successfully" });
  } catch (error) {
    c.status(411);
    return c.json({ message: "Invalid Blog Id" });
  }
});

//get a perticular post
blogRouter.get("/:blogId", async (c: Context) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const blogId = c.req.param("blogId");

  try {
    const blog = await prisma.post.findUnique({
      where: {
        id: blogId,
      },
      select: {
        title: true,
        content: true,
        published: true,
        authorId: true,
      },
    });

    if (!blog) {
      c.status(404);
      return c.json({ message: "There is no blog with this blogId" });
    }
    const user = await prisma.user.findUnique({
      where: {
        id: blog?.authorId,
      },
      select: {
        email: true,
        name: true,
      },
    });

    return c.json({
      blog,
      user: user?.email,
    });
  } catch (e) {
    c.status(500);
    c.json({ message: "Internal error occured" });
  }
});

export default blogRouter;
