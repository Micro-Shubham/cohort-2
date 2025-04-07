

function App() {
  // state that has already three todo in it
  const [todos , setTodos] = usestate([
    {
      id:1,
      title:"go to gym",
      description:"go to gym today"
    },
    {
      id:1,
      title:"go to market",
      description:"go to market today"
    }, 
    {
      id:1,
      title:"go to school",
      description:"go to school today"
    },,
  ])

  return (
    <>
     
    </>
  )
}
// title and description
function Todo (title , description) {
  return <div>
    <h1>{title}</h1>
    <h5>{description}</h5>
  </div>
}

export default App
