import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  function logsomthing() {
    console.log("child cliked")
  }
  return (
    <>
    <Child inputFunction={logsomthing} />
    <button onClick={() => {
      setCount(count + 1);
    }}>
      click me {count}
    </button>
    </>
  )
}
const Child = memo (({inputFunction}) =>{
  console.log("child clicked")
  return <div>
    <button onClick={inputFunction} >Button clicked</button>
  </div>
})

export default App
