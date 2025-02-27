import { useState } from "react";
import { CreateTodo } from "./component/createTodo";
import { Todos } from "./component/Todos";

function App() {
  // state 
  const [todos,setTodos] = useState([]);
  fetch("https://localhost:3000/todos")
   .then( async function(res) {
    const json = await res.json();
    setTodos(json.todos);
   })
  return (
    <div>
      <CreateTodo />
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;
