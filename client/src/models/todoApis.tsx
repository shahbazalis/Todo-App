import axios from "axios";
import { TodoItem } from "../interfaces/TodoItem";
import { baseUrl } from "../constants/constant";

export const getTodos = async () => {
  try {
    const todos = await axios.get<TodoItem[]>(baseUrl + "todos");
    return todos.data;
  } catch (error) {
    throw error;
  }
};

export const addTodo = async () => {
  try {
    const todo = await axios.post<TodoItem>(baseUrl);
    return todo.data;
  } catch (error) {
    throw error;
  }
};
