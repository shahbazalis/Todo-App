import axios from "axios";
import { TodoItem } from "../interfaces/TodoItem";
import { AddTodoItem } from "../interfaces/AddTodoItem";
import { baseUrl } from "../constants/constant";

export const getTodos = async () => {
  try {
    const todos = await axios.get<TodoItem[]>(baseUrl + "todos");
    return todos.data;
  } catch (error) {
    throw error;
  }
};

export const addNewTodo = async (newTodoItem: AddTodoItem) => {
  try {
    const todo = await axios.post<TodoItem>(baseUrl, newTodoItem);
    return todo.data;
  } catch (error) {
    throw error;
  }
};

export const deleteTodo = async (id: String) => {
  try {
    const todo = await axios.delete<TodoItem>(baseUrl + `${id}`);
    return todo.data;
  } catch (error) {
    throw error;
  }
};

export const updateTodo = async (
  id: String | undefined,
  updatedStatus: String | undefined
) => {
  try {
    const todo = await axios.patch<TodoItem>(baseUrl + `${id}`, {
      status: updatedStatus,
    });
    return todo.data;
  } catch (error) {
    throw error;
  }
};
