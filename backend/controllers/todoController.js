import Todo from "../models/todo.js";

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addTodo = async (req, res) => {
  const todo = req.body;
  const newTodo = new Todo(todo);
  try {
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findOneAndRemove({ _id: req.params.id });
    res.status(200).json(todo);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
