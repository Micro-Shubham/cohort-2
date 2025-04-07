import React from "react";
import { useState } from "react";
// global decleration
let counter = 4;
function App() {
  // state that has already three todo in it
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "go to gym",
      description: "go to gym today",
    },
    {
      id: 2,
      title: "go to market",
      description: "go to market today",
    },
    {
      id: 3,
      title: "go to school",
      description: "go to school today",
    },
    ,
  ]);
  // one way to add new todo

  function addTodo() {
    setTodos([
      ...todos,
      {
        id: counter++,
        title: Math.random(),
        description: Math.random(),
      },
    ]);
    // another way to add new todo
    // const newTodos = [];
    // for (let i = 0; i < todos.length; i++) {
    //   newTodos.push(todos[i]);
    // }
    // // newtodos == todos
    // newTodos.push({
    //   id: 4,
    //   title: Math.random(),
    //   description: Math.random(),
    // });
    // setTodos(newTodos);
  }
  return (
    <div>
      <button onClick={addTodo}>Add a Todo</button>
      {/* there  is two ways to do it  */}
     {todos.map(todo => <Todo key={todo?.id} title={todo?.title} description={todo?.description}/>)}
      {/* or  */}
      {/* {todos.map(function (todo) {
        return <Todo title={todo.title} description={todo.description} />
      })} */}
    </div>
  );
}
// title and description
function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  );
}

export default App;
