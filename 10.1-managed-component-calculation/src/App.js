import React from "react";
import AskForNumber from "./AskForNumber";
import Answer from "./Answer";

export default class App extends React.Component {
  state = {
    number1: 0,
    number2: 0,
    total: 0,
    submitted: false,
  };

  render() {
    return (
      <div className="App">
        {this.state.submitted === false ? (
          <AskForNumber
            number1={this.state.number1}
            number2={this.state.number2}
            updateFormField={this.updateFormField}
            add={this.addNumber}
          />
        ) : (
          <Answer 
          result={this.state.total} 
          submitted={this.state.submitted}
          />
        )}
      </div>
    );
  }

  updateFormField = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  addNumber = () => {
    this.setState({
      submitted: true,
      total: parseFloat(this.state.number1) + parseFloat(this.state.number2)
    });
  };
}
