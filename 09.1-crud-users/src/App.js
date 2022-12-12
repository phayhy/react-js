import React from "react";
import "./App.css";

export default class App extends React.Component {
  state = {
    users: [
      {
        _id: Math.floor(Math.random() * 10000),
        name: "Jon Snow",
        email: "jonsnow@winterfell.com"
      },
      {
        _id: Math.floor(Math.random() * 10000),
        name: "Ned Stark",
        email: "nedstark@winterfell.com"
      },
      {
        _id: Math.floor(Math.random() * 10000),
        name: "Frodo Baggins",
        email: "frodo@bagend.com"
      }
    ],
    newUserName: "",
    newUserEmail: ""
  };

  renderAddUser() {
    return (
      <React.Fragment>
        <input
          type="text"
          placeholder="User name"
          value={this.state.newUserName}
          onChange={this.updateFormField}
          name="newUserName"
        />
        <input
          type="text"
          placeholder="User email"
          value={this.state.newUserEmail}
          onChange={this.updateFormField}
          name="newUserEmail"
        />
        <button click={this.addUser}>Add</button>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div className="App">
        {this.state.users.map((user) => {
          return (
            <React.Fragment key={user._id}>
              <div class="box">
                <h3>{user.name}</h3>
                <h4>{user.email}</h4>
                <button
                  onClick={() => {
                    this.beginEdit(user);
                  }}
                >
                  Update
                </button>
                <button
                  onClick={() => {
                    this.deleteUser(user);
                  }}
                >
                  Delete
                </button>
              </div>
            </React.Fragment>
          );
        })}
        {this.renderAddUser()}
      </div>
    );
  }

  addUser = () => {};

  beginEdit = (user) => {};

  deleteUser = (user) => {};
}
