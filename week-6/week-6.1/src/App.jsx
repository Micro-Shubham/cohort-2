
function App() {

  return  (
    // if you don't want to put div as parent you can simply
    // react fragmentation  <React.Fragment> </React.Fragment>
    // or just simply <> </>
    <>
      <Header title="Harkirat1"></Header>
      <Header title="Harkirat2"></Header>
    </>
  )
  
     
  
}
function Header({title}) {
  return <div>
    {title}
  </div>
}

export default App
