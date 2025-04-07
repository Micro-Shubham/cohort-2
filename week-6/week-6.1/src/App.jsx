import { useState } from "react"

function App() {
  // usestate
  // const [title, setTitle] = useState("My name is hakirat")
//  function upDateTitle() {
  // setTitle("My name is "+Math.random())
//  }
  return  (
    // if you don't want to put div as parent you can simply
    // react fragmentation  <React.Fragment> </React.Fragment>
    // or just simply <> </>
    <div>
    {/* <button onClick={upDateTitle}>Click here to change the first header</button> */}
      {/* <Header title={title}></Header> */}
      <HeaderWithButton></HeaderWithButton>
      <Header title="My name is Harkirat Singh2"></Header>
      <Header title="My name is Harkirat Singh3"></Header>
      <Header title="My name is Harkirat Singh4"></Header>
      <Header title="My name is Harkirat Singh5"></Header>
    </div>
  )
  
     
  
}
// this help to avoid re rendering whole parents div 
// to avoid we push it to the component
// when click on button it re render only that component not whole div
// goal is to make our application more optimal 
function HeaderWithButton() {
  const [title, setTitle] = useState("My name is hakirat")
   function upDateTitle() {
  setTitle("My name is "+Math.random())
 }

  return (
    <>
    <button onClick={upDateTitle}>Click here to change the first header</button>
      <Header title={title}></Header>
    </>
  )

}
function Header({title}) {
  return <div>
    {title}
  </div>
}

export default App
