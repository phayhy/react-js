import React from "react";

const min = 1;
const max = 7;
const diff = max - min;

class Dice extends React.Component {
  state = {
    randInt: Math.floor(Math.random() * diff + min),
  };

  click = () => {
    this.setState({
      randInt: Math.floor(Math.random() * diff + min),
    });
  };

  getDiceColor = () => {
    //let diceColor = "black";
    if (this.state.randInt === 1) {
      return "red";
    } else if (this.state.randInt === 6) {
      return "green";
    } else return "black";
  }
  //ternary operator (can replace function getDiceColor directly)
  //this.state.randInt === 1 ? "red" : (this.state.randInt === 6 ? "green" : "black")

  render() {
    return (
      <React.Fragment>
        <div
          style={{
            border: "1px solid black",
            padding: "10px",
            width: "150px",
            color: this.getDiceColor(),
          }}
        >
          {this.state.randInt}
          <div>
            <br />
            <button onClick={this.click}> Roll the dice! </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Dice;
