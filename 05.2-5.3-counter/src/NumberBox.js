import React from "react";

class NumberBox extends React.Component {
  state = {
    count: this.props.initialValue,
  };

  clickIncrease = () => {
    this.setState({
      count: this.state.count + 1,
    });
    if (this.state.count == 10) {
      this.setState({
        count: 10,
      });
    }
  };

  clickDecrease = () => {
    this.setState({
      count: this.state.count - 1,
    });
    if (this.state.count == -10) {
      this.setState({
        count: -10,
      });
    }
  };

  clickReset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div
          style={{
            border: "1px solid black",
            padding: "10px",
            width: "150px",
          }}
        >
          {this.state.count}
          <div>
            <br />
            <button onClick={this.clickDecrease}> Decrease </button>
            <button onClick={this.clickIncrease}> Increase </button>
            <br />
            <button onClick={this.clickReset}> Reset to zero </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NumberBox;
