import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom"
import { Dashboard } from "./Components/Dashboard"
import { Landing } from "./Components/Landing"

function App() {
const navigate = useNavigate();
  return (
    <div>
      <div >
        <button onClick={() => {
          navigate("/")
        }}>Landing Page</button>
        <button onClick={() => {
          navigate("/Dashboard")
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
