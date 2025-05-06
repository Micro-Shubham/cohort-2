import { useState } from "react"

function App() {
  
  return (
    <>
      <MyComponent />
  
    </>
  )
}

function MyComponent() {
  const [count, setCount] = useState(0);
  const Increament=() => {
     setCount(count+1);
  }
  return <div>
    <h1>{count}</h1>
    <button onClick={Increament}>increment</button>
  </div>
}

export default App
