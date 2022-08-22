import { useState } from "react";

import Todos from "../components/Todos";
import NewTodo from "../components/NewTodo";

import Todo from "../models/todo";

function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };
  return (
    <>
      <div style={{ margin: "center" }}>
        <NewTodo onAddTodo={addTodoHandler} />
        <Todos items={todos} />
      </div>
    </>
  );
}

export default TodosPage;
