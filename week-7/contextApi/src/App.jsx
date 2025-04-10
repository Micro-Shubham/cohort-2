import { useState } from 'react'
// contextApi is help to tackle the prop drilling 
// it directly telpot the props to required child

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Count count={count} setCount={setCount} />
    </>
  )
}
function Count ({count, setCount}){
  return <div>
    <CountRenderer count={count}></CountRenderer>
    <Button count={count} setCount={setCount}></Button>
  </div>
}
function CountRenderer({count}) {
  return <div>
    {count}
  </div>
}
function Button ({count , setCount}) {
  return <div>
    <button onClick={() => {setCount(count +1)}}> Increase</button>
    <button onClick={() => {setCount(count -1)}}> Decrease</button>
  </div>
}

export default App
