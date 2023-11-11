import React, { useState } from "react";

export function Todolist() {
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState(" ");

  const addTodo = () => {
    setList([...list, todo]);
    setTodo(" ");
  };
  return (
    <div>
      {list.map((i, j) => {
        return (
          <span key={j}>
            {i}
            <br />
          </span>
        );
      })}
      <div>
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
        />
        <button onClick={addTodo}>Ekle</button>
      </div>
    </div>
  );
}
