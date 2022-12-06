import React from "react";

class ColoredBox extends React.Component {
  state = {
    color: 1,
  };

  getColor = () => {
    if (this.state.color === 1) {
      return "red";
    }
    if (this.state.color === 2) {
      return "blue";
    }
    if (this.state.color === 3) {
      return "green";
    }
  };

  changeRed = () => {
    this.setState({ color: 1 });
  };
  changeBlue = () => {
    this.setState({ color: 2 });
  };
  changeGreen = () => {
    this.setState({ color: 3 });
  };

  render() {
    return (
      <React.Fragment>
        <div
          style={{
            border: "1px black solid",
            width: "50px",
            height: "50px",
            backgroundColor: this.getColor(),
          }}
        ></div>
        <button onClick={this.changeRed}>Red</button>
        <button onClick={this.changeGreen}>Green</button>
        <button onClick={this.changeBlue}>Blue</button>
      </React.Fragment>
    );
  }
}

export default ColoredBox;
