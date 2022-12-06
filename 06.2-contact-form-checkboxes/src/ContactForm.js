import React from "react";

export default class ContactForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    enquiries: "",
    heardFrom: "",
    contacts: [],
    btnStatus: true, //disabled is true by default
  };

  updateFormField = (e) => {
    let currentValues = this.state[e.target.name];
    let modifiedValues;

    //check array
    if (Array.isArray(currentValues) === true) {
      //if-else for array objects
      if (!currentValues.includes(e.target.value)) {
        modifiedValues = [...currentValues, e.target.value];
      } else {
        modifiedValues = currentValues.filter((element) => {
          return element !== e.target.value;
        });
      }
      this.setState({
        [e.target.name]: modifiedValues,
      });
    } else {
      //read in non-array objects from form: names and values
      this.setState({
        [e.target.name]: e.target.value,
      });
      //console.log(e.target.name);
    }

    //check all fields have been filled
    if (
      this.state.firstName !== "" &&
      this.state.lastName !== "" &&
      this.state.enquiries !== "" &&
      this.state.heardFrom !== "" &&
      this.state.contacts !== []
    ) {
      this.setState({ btnStatus: false }); //disable function deactivated if all fields are filled
    }
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
        <div>
          <label>How would you like to be contacted?:</label>
          <input
            name="contacts"
            type="checkbox"
            value="email"
            checked={this.state.contacts.includes("email")}
            onChange={this.updateFormField}
          />
          Email
          <input
            name="contacts"
            type="checkbox"
            value="phone"
            checked={this.state.contacts.includes("phone")}
            onChange={this.updateFormField}
          />
          Phone
          <input
            name="contacts"
            type="checkbox"
            value="slowMail"
            checked={this.state.contacts.includes("slowMail")}
            onChange={this.updateFormField}
          />
          Slow mail
        </div>
        <button onClick={this.submitForm} disabled={this.state.btnStatus}>
          Submit
        </button>
      </React.Fragment>
    );
  }
}
