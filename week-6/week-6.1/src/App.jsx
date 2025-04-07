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
    <div>
    <button onClick={upDateTitle}>Click here to change the first header</button>
      <Header title={title}></Header>
      <Header title="My name is Harkirat Singh2"></Header>
      <Header title="My name is Harkirat Singh3"></Header>
      <Header title="My name is Harkirat Singh4"></Header>
      <Header title="My name is Harkirat Singh5"></Header>
    </div>
  )
  
     
  
}
function Header({title}) {
  return <div>
    {title}
  </div>
}

export default App
