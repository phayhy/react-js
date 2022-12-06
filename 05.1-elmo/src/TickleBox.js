import React from "react";

class TickleBox extends React.Component {

  message = () => {
    alert("that tickles!");
  }

  render() {
    return (
      <div>
        <img src={require("./elmo.jpg")} height="300" alt="elmo" onMouseOver={this.message}/>
      </div>
    );
  };
};

export default TickleBox;

/*
import React from "react";
import Elmo from "./elmo.jpg";

class TickleBox extends React.Component {

  message = () => {
    alert("that tickles!");
  }

  render() {
    return (
      <div>
        <img src={Elmo} height="300" alt="elmo" onMouseOver={this.message} />
      </div>
    );
  };
};

export default TickleBox;
*/
