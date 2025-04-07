import React from "react";
import { useState } from "react";

function App() {
  return (
    // <div>
    //   <CardWrapper innerComponent={<TextComponent />} />
    //   <CardWrapper innerComponent={<TextComponent2 />} />
    // </div>
    // there is something called real wrapper

    <div>
      <CardWrapper>
        Hi there
      </CardWrapper>
      <CardWrapper>
        Hello there
      </CardWrapper>
    </div>
  )

}

// wrapper accept a component as input
function CardWrapper({ children }) {
  // create  a div  which has a border
  // and inside  the div  , render  the prop
  return <div style={{ border: "2px solid black",padding:"20px",margin:"5px" }}>{children}</div>;
}
// function TextComponent() {
//   return <div>hi there</div>;
// }
// function TextComponent2() {
//   return <div>Hi there 2</div>
// }

export default App;
