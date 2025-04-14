import {RecoilRoot, useRecoilValue} from "recoil"
import { todosAtomFamily } from "./atom"
function App() {
 

  return (
    <>
      <RecoilRoot>
        <Todo id={1}/>
        <br />
        <Todo id={2}/>

      </RecoilRoot>
    </>
  )
}
// component
function Todo({id}) {
  const currentTodo = useRecoilValue(todosAtomFamily(id))
  return <>
  {currentTodo.title}
  <br />
  {currentTodo.description}
  </>
}

export default App
