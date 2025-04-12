import React from "react"
import { CountContext } from './context'
import { useContext } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom, evenSelector } from './store/atoms/count'
// contextApi is help to tackle the prop drilling 
// it directly telpot the props to required child

function App() {

  // wrap anyone that wants to use  the  teleported  value  inside  a provider
  return (
    <>
    <RecoilRoot>
    <Count  />
    </RecoilRoot>
    </>
  )
}
function Count ({ }){
  console.log("re-render")
  return <div>
    <CountRenderer />
    <Button />
  </div>
}
function CountRenderer() {
  const count  = useRecoilValue(countAtom);
  return <div>
    {count}
    <EvenCountRenderer />
  </div>
}
function EvenCountRenderer() {
  // understanding selectors in recoil
  const isEven = useRecoilValue(evenSelector)
  return <div>
    {isEven ? "it is even": null}
  </div>


}
function Button ({}) {
  console.log("button re-render")
  const setCount = useSetRecoilState(countAtom)
  return <div>
    <button onClick={() => {setCount(count => count +1)}}> Increase</button>
    <button onClick={() => {setCount(count => count -1)}}> Decrease</button>
  </div>
}

export default App
