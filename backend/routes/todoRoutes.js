import express from "express";
import { addTodo, getTodos,deleteTodo } from "../controllers/todoController.js";
const router = express.Router();

router.get("/todos", getTodos);
router.post("/", addTodo);
router.delete("/:id", deleteTodo);

export default router;
