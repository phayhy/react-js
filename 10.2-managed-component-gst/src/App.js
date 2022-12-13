import React from "react";
import GST from "./GST";
import Summary from "./Summary";

export default class App extends React.Component {

  state = {
    gst: 0,
    bill: 0,
    serviceCharge: 0,
    total: 0,
    submitted: false
  };

  render() {
    return (
      <React.Fragment>
        {this.state.submitted === false ? (
        <GST
        bill={this.state.bill}         
        updateField={this.updateField}
        calculate={this.calculate}
        />
        ) : (
        <Summary 
        bill={this.state.bill} 
        serviceCharge = {this.state.serviceCharge}
        gst = {this.state.gst}
        total={this.state.total}
        />
        )}
      </React.Fragment>
    );
  }

  updateField = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  calculate = (e) => {
    this.setState({
      submitted: true,
      gst: (0.07 * this.state.bill).toFixed(2),
      serviceCharge: (0.1 * this.state.bill).toFixed(2),
      total: (1.17 * this.state.bill).toFixed(2)
    });
  };

}
