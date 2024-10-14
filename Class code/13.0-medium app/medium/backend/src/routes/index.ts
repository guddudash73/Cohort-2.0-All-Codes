import { Hono } from "hono";
import userRouter from "./user";
import blogRouter from "./blogs";

const router = new Hono();

router.route("/user", userRouter);
router.route("/posts", blogRouter);

export default router;
