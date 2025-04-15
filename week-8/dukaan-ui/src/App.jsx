import { RevanueCard } from "./components/RevanueCard"


function App() {


  return (
    <div className=" grid grid-cols-4">
    <RevanueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={13}  /> 
    </div>
  )
}

export default App
