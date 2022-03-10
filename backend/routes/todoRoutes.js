import express from "express";
import {
  addTodo,
  getTodos,
  deleteTodo,
  updateTodo,
} from "../controllers/todoController.js";
const router = express.Router();

router.get("/todos", getTodos);
router.post("/", addTodo);
router.delete("/:id", deleteTodo);
router.patch("/:id", updateTodo);

export default router;
