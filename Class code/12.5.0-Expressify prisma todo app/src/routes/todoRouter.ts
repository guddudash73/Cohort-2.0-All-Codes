import { Router } from "express";
import { authMiddleware } from "../utils/middleware";
import {
  createTodo,
  deleteTodo,
  getTodo,
  updateTodo,
} from "../controller/todoMethod";

const router = Router();

router.get("/", authMiddleware, getTodo);
router.post("/create", authMiddleware, createTodo);
router.put("/update", authMiddleware, updateTodo);
router.delete("/delete", authMiddleware, deleteTodo);
export default router;
