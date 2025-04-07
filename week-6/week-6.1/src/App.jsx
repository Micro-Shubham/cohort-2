import { useState } from "react"

function App() {
  // usestate
  const [title, setTitle] = useState("My name is hakirat")
 function upDateTitle() {
  setTitle("My name is "+Math.random())
 }
  return  (
    // if you don't want to put div as parent you can simply
    // react fragmentation  <React.Fragment> </React.Fragment>
    // or just simply <> </>
    <>
    <button onClick={upDateTitle}>Click here to change the first header</button>
      <Header title={title}></Header>
      <Header title="My name is Raman"></Header>
    </>
  )
  
     
  
}
function Header({title}) {
  return <div>
    {title}
  </div>
}

export default App
