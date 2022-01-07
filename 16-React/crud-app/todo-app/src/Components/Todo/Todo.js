import React, { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

export default function Todo({ todos, completeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  return todos.map((todo, idx) => {
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={idx}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine />
        <TiEdit />
      </div>
    </div>;
  });
}
