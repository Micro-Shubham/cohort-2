import React from "react"
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
class MyComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {count:0}
  }

  incrementCount =() =>{
    this.setState({count:this.state.count+1});
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    )
  }
}
export default App
