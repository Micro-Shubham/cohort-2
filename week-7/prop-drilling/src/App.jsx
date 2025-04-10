import { useState } from "react";

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Count count={count} setCount={setCount} />
    </>
  );
}
// component
function Count({ count , setCount}) {
  return <div>
    {count}
    <Button count={count} setCount={setCount} />
    </div>;
}
function Button({count, setCount}) {
  return (
    <div>
      <button onClick={() => { setCount(count +1)}}>Increace</button>
      <button onClick={() => { setCount(count -1)}} > Decrease</button>
    </div>
  );
}

export default App;
