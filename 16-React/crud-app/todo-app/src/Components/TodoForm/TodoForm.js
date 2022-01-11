import React, { useState, useEffect, useRef } from "react";

export default function TodoForm(props) {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 1000000),
      text: input,
    });
    setInput("");
    console.log("it works");
  };

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
        ref={inputRef}
      />

      <button className="todo-button">Add todo</button>
    </form>
  );
}
