import React from "react";

class AlertBox extends React.Component {
  state = {
    message: this.props.initialValue
  }

  render() {
    return (
      <div style={{ border: '4px solid black' }}>
        Message: {this.state.message}
      </div>
    );
  }
}


export default AlertBox;

/*
class AlertBox extends React.Component {
  state = {
    message: "Hello this is an Alertbox using state"
  }

  render() {
    return (
      <div style={{ border: '4px solid black' }}>
        Message: {this.state.message}
      </div>
    );
  }
}
*/

