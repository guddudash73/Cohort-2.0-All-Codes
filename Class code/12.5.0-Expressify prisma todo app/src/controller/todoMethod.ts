import { json, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { todoSchema, updateTodoSchema } from "../utils/zodSchema";
import { number, string } from "zod";

const prisma = new PrismaClient();

export async function getTodo(req: Request, res: Response) {
  const user = (req as any).userId;
  try {
    const todos = await prisma.todo.findMany({
      where: {
        userId: user,
      },
      select: {
        title: true,
        description: true,
        done: true,
        id: true,
      },
    });

    if (!todos[0]) {
      return res
        .status(404)
        .json({ message: "There is no todo associated with this user" });
    }

    return res.status(200).json({ todos });
  } catch (err) {
    return res.status(503).json({ message: "Internal error occured" });
  }
}

export async function createTodo(req: Request, res: Response) {
  const user = (req as any).userId;
  const response = todoSchema.safeParse(req.body);
  let errorObj: Record<string, string> = {};

  if (!response.success) {
    response.error.issues.forEach((issue) => {
      const key = issue.path[0];
      const value = issue.message;
      errorObj[key] = value;

      return res.status(400).json(errorObj);
    });
  }

  try {
    const newUser = await prisma.todo.create({
      data: {
        userId: user,
        title: req.body.title,
        description: req.body.description,
      },
    });

    return res.status(200).json({ message: "Todo Created" });
  } catch (err) {
    return res.status(503).json({ message: "Internal error occured" });
  }
}

export async function updateTodo(req: Request, res: Response) {
  let queryParam = req.query.todoId as string;
  const todoId = queryParam ? parseInt(queryParam) : null;
  const response = updateTodoSchema.safeParse(req.body);
  let errObj: Record<string, string> = {};
  const tittle = response.data?.title;
  const description = response.data?.description;
  const done = response.data?.done;

  if (!response.success) {
    response.error.issues.forEach((issue) => {
      const key = issue.path[0];
      const value = issue.message;
      errObj[key] = value;
    });
    return res.status(400).json(errObj);
  }

  if (todoId == null || isNaN(todoId)) {
    return res.status(404).json({ message: "Please send Todo id" });
  }

  let todo;

  try {
    todo = await prisma.todo.findUnique({
      where: {
        id: todoId,
      },
    });
  } catch (err) {
    return res.status(404).json({ message: "todo not found" });
  }

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  try {
    const updatetodo = await prisma.todo.update({
      where: {
        id: todoId,
      },
      data: {
        title: tittle !== undefined ? tittle : todo.title,
        description: description !== undefined ? description : todo.description,
        done: done !== undefined ? done : todo.done,
      },
    });

    return res.status(200).json({ message: "Todo updated successfully" });
  } catch (error) {
    return res.status(503).json({
      message: "Internal error occuered",
    });
  }
}

export async function deleteTodo(req: Request, res: Response) {
  const queryParam = req.query.todoId as string;
  const todoId = queryParam ? parseInt(queryParam) : null;

  if (todoId == null || isNaN(todoId)) {
    return res.status(404).json({ message: "Please send the todo id" });
  }
  try {
    const todo = await prisma.todo.findUnique({
      where: {
        id: todoId,
      },
    });
    if (!todo) {
      return res
        .status(404)
        .json({ message: "There is no todo associated with this id" });
    }
  } catch (err) {
    return res.status(503).json({ Message: "Internal error occcured" });
  }

  try {
    await prisma.todo.delete({
      where: {
        id: todoId,
      },
    });

    return res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    return res.status(503).json({ message: "Internal error occured" });
  }
}
