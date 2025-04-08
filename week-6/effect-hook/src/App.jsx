import { useEffect, useState } from "react";
import axios from "axios"
function App() {



  return <>
   <Todo id={1} />
  </>;
}
// component
function Todo({id}) {
  const [todo, setTodo] = useState({})
  // implement useEffect here
  useEffect(() => {
   axios.get("https://dummyjson.com/todos/"+id)
    .then(response => {
      setTodo(response.data)
    })
  },[])

  return <div>
    <h1>
      {todo.todo}
    </h1>
    <h1>
      {todo.userId}
    </h1>
  </div>


}

export default App;
