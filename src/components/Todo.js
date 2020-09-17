import React, { useState } from "react";
import { CgCloseR } from "react-icons/cg";
import { BiEdit } from "react-icons/bi";

function Todo({ todos, completeTodo, removeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  return todos.map((todo, index) => (
    <div className={todo.isComplete ? "todo-complete" : "todo-row"} key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <CgCloseR className="delete-icon" onClick={() => removeTodo(todo.id)} />
        <BiEdit
          className="edit-icon"
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        />
      </div>
    </div>
  ));
}

export default Todo;
