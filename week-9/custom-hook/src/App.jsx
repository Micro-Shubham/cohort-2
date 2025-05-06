import React from "react"
import { useEffect } from "react"
import { useState } from "react"

function App() {
  
  return (
    <>
      <MyComponent />
  
    </>
  )
}

// function MyComponent() {
//   const [count, setCount] = useState(0);
//   const Increament=() => {
//      setCount(count+1);
//   }
//   return <div>
//     <h1>{count}</h1>
//     <button onClick={Increament}>increment</button>
//   </div>
// }


// class based component
// class MyComponent extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {count:0}
//   }

//   incrementCount =() =>{
//     this.setState({count:this.state.count+1});
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     )
//   }
// }


// functional component lifecycle
function MyComponent() {
  useEffect(() => {
    console.log("component mounted")
    return () =>{
      console.log("component unmounted")
    }
  },[])
  return <div>
    <h1>From Inside my component</h1>
  </div>
}
export default App
