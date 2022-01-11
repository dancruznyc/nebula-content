import React, { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
// import TodoList from "../TodoList/TodoList";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

export default function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  console.log(todos);

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
    console.log(edit.id);
  };

  if (edit.id) {
    return <TodoForm onSubmit={submitUpdate} />;
  }

  const todoList = todos.map((todo, idx) => {
    return (
      <div
        className={todo.isComplete ? "todo-row complete" : "todo-row"}
        key={idx}
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <div className="icons">
          <RiCloseCircleLine
            onClick={() => removeTodo(todo.id)}
            className="edit-icon"
          />
          <TiEdit
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className="edit-icon"
          />
        </div>
      </div>
    );
  });
  return todoList;
}
