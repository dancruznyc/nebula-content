import React, { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import Todo from "../Todo/Todo";

export default function TodoList(props) {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    console.log("123");
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log("NewTodo:", todo, "\n", "OldTodos:", ...todos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <div>
      <h1>What needs to be done today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} />
    </div>
  );
}
