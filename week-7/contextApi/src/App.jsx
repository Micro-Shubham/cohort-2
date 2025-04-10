import { useState } from 'react'
import { CountContext } from './context'
import { useContext } from 'react'
// contextApi is help to tackle the prop drilling 
// it directly telpot the props to required child

function App() {
  const [count, setCount] = useState(0)

  // wrap anyone that wants to use  the  teleported  value  inside  a provider
  return (
    <>
    <CountContext.Provider value={count}>
    <Count  setCount={setCount} />
    </CountContext.Provider>
    </>
  )
}
function Count ({ setCount}){
  return <div>
    <CountRenderer></CountRenderer>
    <Button setCount={setCount}></Button>
  </div>
}
function CountRenderer() {
  const count  = useContext(CountContext);
  return <div>
    {count}
  </div>
}
function Button ({setCount}) {
  const count = useContext(CountContext);
  return <div>
    <button onClick={() => {setCount(count +1)}}> Increase</button>
    <button onClick={() => {setCount(count -1)}}> Decrease</button>
  </div>
}

export default App
