import React from "react";

import SayGoodbye from "./components/SayGoodbye";
import DisplayHeader from "./components/DisplayHeader";
import ImageFrame from "./components/ImageFrame";
import DisplayMessage from "./components/DisplayMessage";
import Alert from "./components/Alert";



function App() {
  return (
    <React.Fragment>
      <SayGoodbye/>
      <DisplayHeader/>
      <ImageFrame/>
      <DisplayMessage whatever_message="Hello there" />
      <Alert alert_message="danger danger will robinson!" />
    </React.Fragment>
  );
}

export default App;
