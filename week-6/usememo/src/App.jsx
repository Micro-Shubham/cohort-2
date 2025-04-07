import React  from "react"
import { useState } from "react"


function App() {
const [title, setTitle] = useState("My name is harkirat singh") 
function updateTitle() {
  setTitle("My name is "+ Math.random())
}
  return (
    <div>
    <button onClick={updateTitle}>Update the title</button> 
    <Header title={title}></Header>
    <Header title=" Harkirat"></Header>
    <Header title="Harkirat"></Header>
    <Header title=" Harkirat"></Header>
    </div>
  )
}

// usememo concept 
// what is actually does its a second method to make our application more optimal
// use memo help to render only the components needs to be not the whole parent including all children
const Header = React.memo(function Header({title}){
  return <div>
    {title}
  </div>
})

export default App
