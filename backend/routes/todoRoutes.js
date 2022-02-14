import express from "express";
import { addTodo, getTodos } from "../controllers/todoController.js";
const router = express.Router();

router.get("/todos", getTodos);
router.post("/", addTodo);

export default router;
