import React from "react";
/*import "./styles.css";*/
import "./App.css";

function sayGoodbye() {
  return "Goodbye";
}

function displayHeader() {
  return <h2>About Me</h2>;
}
function DisplayMessage(props) {
  return <div>{props.whatever_message}</div>;
}

function App() {
  return (
    <React.Fragment>
      <p>{sayGoodbye()}</p>
      {displayHeader()}
      <DisplayMessage whatever_message="Hello there" />
    </React.Fragment>
  );
}

export default App;
