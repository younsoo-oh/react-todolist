import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="오늘 할일"
        value={input}
        name="text"
        className="todo-input"
      />
      <button className="todo-button">Add Todo</button>
    </form>
  );
}

export default TodoForm;