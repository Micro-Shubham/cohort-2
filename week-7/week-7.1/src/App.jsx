import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Dashboard } from "./Components/Dashboard"
import { Landing } from "./Components/Landing"

function App() {

  return (
    <div>
      <div style={{background: "black" , color:"white"}}>
      Hi there from topbar 
      </div>
   <BrowserRouter>
   <Routes>
      <Route  path="/Dashboard" element={<Dashboard />} />
      <Route path="/" element={<Landing />} /> 
   </Routes>

   </BrowserRouter> 
   </div>
  )
}

export default App
