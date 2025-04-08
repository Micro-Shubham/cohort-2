import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/todos").then(function (response) {
      setTodos(response.data.todos);
    });
  }, []);

  return (
    <>
      {todos.map(todo => <Todo key={todo.id} title={todo.todo} completed={todo.completed} />)}
    </>
  );
}

// creating a component
function Todo({ title, completed }) {
  return (
    <div>
      <h1>{title} </h1>
      <h4>Status: {completed ? "✅ Completed" : "❌ Not Completed"}</h4>
    </div>
  );
}

export default App;
