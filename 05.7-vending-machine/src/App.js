import React from 'react';

export default class App extends React.Component {
  state = {
    displayMessage: "Welcome, please select your drink"
  }

  getCoffee = () => {
    this.setState({ displayMessage: "Dispensing Cofee" })
  }
  getTea = () => {
    this.setState({ displayMessage: "Dispensing Tea" })
  }
  getOrangeJuice = () => {
    this.setState({ displayMessage: "Dispensing Orange Juice" })
  }

  render() {
    return (
      <React.Fragment>
        <h1>Drink Vending Machine</h1>
        <div className="display">
          {this.state.displayMessage}
        </div>
        <button onClick={this.getCoffee}>Coffee</button>
        <button onClick={this.getTea}>Tea</button>
        <button onClick={this.getOrangeJuice}>Orange Juice</button>
      </React.Fragment>
    );
  }
}


