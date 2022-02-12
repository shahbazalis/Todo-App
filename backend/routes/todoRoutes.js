import express from "express";
import { addTodo } from "../controllers/todoController.js";
const router = express.Router();

//router.get('/todos', getTodos);
router.post('/', addTodo);
//router.get('/:id', getPost);
//router.patch('/:id', updatePost);
//router.delete('/:id', deletePost);
//router.patch('/:id/likePost', likePost);

export default router;
