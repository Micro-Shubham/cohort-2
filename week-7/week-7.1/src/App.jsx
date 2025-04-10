import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Dashboard } from "./Components/Dashboard"
import { Landing } from "./Components/Landing"

function App() {

  return (
    <div>
      <div >
        <button onClick={() => {
          window.location.href ="/"
        }}>Landing Page</button>
        <button onClick={() => {
          window.location.href ="/Dashboard"
        }}>Dashboard Page</button>
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
