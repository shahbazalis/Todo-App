import axios from "axios";
import { TodoItem } from "../interfaces/TodoItem";
import { baseUrl } from "../utils/constant";

export const getTodos = async () => {
  try {
    const todos = await axios.get<TodoItem[]>(baseUrl + "todos");
    return todos.data;
  } catch (error) {
    console.log("Get todos error:", error);
  }
};

export const addTodo = async () => {
  try {
    const todo = await axios.post<TodoItem>(baseUrl);
    return todo.data;
  } catch (error) {
    console.log("Add todo error:", error);
  }
};
