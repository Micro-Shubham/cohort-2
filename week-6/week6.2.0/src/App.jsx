import { useState,useMemo } from 'react'


function App() {
 const [counter, setCounter] = useState(0);
 const [inputValue, setInputValue] = useState(1);
 // usememo
 let count = useMemo(() =>{
 let finalcount = 0;
 for(let i = 1; i <= inputValue; i++) {
  finalcount = finalcount +i;
 } 
 return finalcount 
 }, [inputValue]) // run only when input value changes
 // this helps to optimise and avoid re rendering unncessarly

  return (
    <>
      <input onClick={function(e){
        setInputValue(e.target.value)
      }} placeholder={'Find the sum from 1 to n '}></input>
      <br />
      Sum from 1 to {inputValue} is {count};
      <br />
      <button onClick={() =>{
        setCounter(counter + 1)
      }}>Counter ({counter}) </button>
    </>
  )
}

export default App
