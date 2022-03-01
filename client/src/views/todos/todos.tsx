import { useEffect, useState } from "react";
import { getTodos } from "../../models/todoApis";
import { TodoItem } from "../../interfaces/TodoItem";

const Todos = () => {
  const [todos, setTodos] = useState<TodoItem[] | undefined>([]);

  const getTodoList = async () => {
    try {
      const todosList = await getTodos();
      console.log("Todo List",todosList);
      setTodos(todosList);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTodoList();
  }, []);

  return <h1>Todos</h1>;
};

export default Todos;
