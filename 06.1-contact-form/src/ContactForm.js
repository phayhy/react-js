import React from "react";

export default class ContactForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    enquiries: "",
    heardFrom: "",
    btnStatus: true, //disabled is true by default
  };

  updateFormField = (e) => {
    //function to read in all form names and values
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name);

    //check all fields have been filled
    if (
      this.state.firstName !== "" &&
      this.state.lastName !== "" &&
      this.state.enquiries !== "" &&
      this.state.heardFrom !== ""
    ) {
      this.setState({ btnStatus: false }); //disable function deactivated if all fields are filled
    }
  };


  submitForm = () => {
    alert("submitted");
    this.setState({
      firstName: "",
      lastName: "",
      enquiries: "",
      heardFrom: "",
      btnStatus: true
    }); //reset details and submit button
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <label>First Name:</label>
          <input
            name="firstName"
            type="text"
            value={this.state.firstName}
            onChange={this.updateFormField}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            name="lastName"
            type="text"
            value={this.state.lastName}
            onChange={this.updateFormField}
          />
        </div>
        <div>
          <label>Enquiries:</label>
          <input
            name="enquiries"
            type="radio"
            value="support"
            checked={this.state.enquiries === "support"}
            onChange={this.updateFormField}
          />
          Support
          <input
            name="enquiries"
            type="radio"
            value="sales"
            checked={this.state.enquiries === "sales"}
            onChange={this.updateFormField}
          />
          Sales
          <input
            name="enquiries"
            type="radio"
            value="marketing"
            checked={this.state.enquiries === "marketing"}
            onChange={this.updateFormField}
          />
          Marketing
        </div>
        <div>
          <label>Where did you here about us?:</label>
          <select
            name="heardFrom"
            value={this.state.heardFrom}
            onChange={this.updateFormField}
          >
            <option value="wordOfMouth">Word of Mouth</option>
            <option value="advertisement">Advertisement</option>
            <option value="socialMedia">Social Media</option>
            <option value="newspaper">Newspaper</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <button onClick={this.submitForm} disabled={this.state.btnStatus}>
          Submit
        </button>
      </React.Fragment>
    );
  }
}
