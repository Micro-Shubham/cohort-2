import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom"
import { Dashboard } from "./Components/Dashboard"
import { Landing } from "./Components/Landing"

function App() {
  return (
    <div>
     
   <BrowserRouter>
   <Appbar />
   <Routes>
      <Route  path="/Dashboard" element={<Dashboard />} />
      <Route path="/" element={<Landing />} /> 
   </Routes>

   </BrowserRouter> 
   </div>
  )
}
function Appbar(){
const navigate = useNavigate();
return   <div >
        <button onClick={() => {
          navigate("/")
        }}>Landing Page</button>
        <button onClick={() => {
          navigate("/Dashboard")
        }}>Dashboard Page</button>
      </div>
}

export default App
