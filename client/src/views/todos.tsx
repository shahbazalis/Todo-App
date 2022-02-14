import React, { useEffect, useState } from "react";
import { getTodos } from "../models/apis";
import { TodoItem } from "../interfaces/TodoItem";

const Todos = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const todosList: any = await getTodos();
        setTodos(todosList);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return <h1>Todos</h1>;
};

export default Todos;
