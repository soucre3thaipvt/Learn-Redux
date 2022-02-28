import React, { useState } from "react";

export default function TodoApp({ todos }) {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type={"text"}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>Add</button>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
