import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  // usetstat
  const[selectedId, setSelectedId] = useState(1);

  return (
    <>
      <button
        onClick={function () {
          setSelectedId(1);
        }}
      >
        1
      </button>
      <button
        onClick={function () {
          setSelectedId(2);
        }}
      >
        2
      </button>
      <button
        onClick={function () {
         setSelectedId(3);
        }}
      >
        3
      </button>
      <button
        onClick={function () {
         setSelectedId(4);
        }}
      >
        4
      </button>
      <button
        onClick={function () {
          setSelectedId(5);
        }}
      >
        5
      </button>
      <Todo id={selectedId} />
    </>
  );
}
// component
function Todo({ id }) {
  const [todo, setTodo] = useState({});
  // implement useEffect here
  useEffect(() => {
    axios.get(`https://dummyjson.com/todos/${id}`).then((response) => {
      setTodo(response.data);
    });
  }, [id]);

  return (
    
    <div>
      Id:{id}
      <h1>{todo.todo}</h1>
      <h1>{todo.userId}</h1>
    </div>
  );
}

export default App;
