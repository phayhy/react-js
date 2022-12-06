import React from "react";
import "./styles.css";
//import dog from './dog.jpg';
//import kittens from './kittens.jpg';

function sayGoodbye() {
  return "Goodbye";
}

function displayHeader() {
  return <h2>About Me</h2>;
}

function ImageFrame() {
  return <img src={require("./dog.jpg")} height = "300" alt="Cute puppy" />;
}
/*function ImageFrame() {
  return <img src={dog} height="300" alt="Cute puppy" />;
}*/

function BorderedImageFrame() {
  const myStyle = {
    border: '4px solid red'
  };
  return <img style={myStyle} src={require("./kittens.jpg")} height = "300" alt="Cute kittens" />;
}
/*function BorderedImageFrame() {
  const myStyle = {
    border: '4px solid red'
  };
  return <img style={myStyle} src={kittens} height="300" alt="Cute kittens" />;
}*/

function App() {
  return (
    <React.Fragment>
      <h1>Hello World</h1>
      <p>{sayGoodbye()}</p>
      {displayHeader()}
      <ImageFrame />
      <BorderedImageFrame />
    </React.Fragment>
  );
}
export default App;
