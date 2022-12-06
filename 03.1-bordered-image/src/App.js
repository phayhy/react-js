import React from "react";
import BorderedImageFrame from "./BorderedImageFrame";
import kittens from './kittens.jpg';

function App() {
  return (
    <React.Fragment>
      <h1>Hello Kittens</h1>
      <BorderedImageFrame newImage = {kittens}/>
    </React.Fragment>
  );
}

export default App;

