import React from "react";
import './App.css'
import Heading from "./Heading"

function App() {
  return (
    <React.Fragment>
      <Heading firstName="Bob" />
      <Heading firstName="Jane" />
      <Heading firstName="Lily" />
    </React.Fragment>
  );
}

export default App;
