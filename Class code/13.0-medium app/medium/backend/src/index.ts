import { Hono } from "hono";
import userRouter from "./routes/user";
import blogRouter from "./routes/blogs";
import router from "./routes";
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

app.route("/api/v1", router);

export default app;
