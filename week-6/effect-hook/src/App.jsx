import { useEffect, useState } from "react";

function App() {



  return <>
   <Todo id={3} />
  </>;
}
// component
function Todo({id}) {
  const [todo, setTodo] = useState({})
  // implement useEffect here
  useEffect(() => {
   axios.get("https://dummyjson.com/todos/"+id)
  },[])

  return <div>
    <h1>
      {todo.todo}
    </h1>
    <h1>
      {todo.completed}
    </h1>
  </div>


}

export default App;
