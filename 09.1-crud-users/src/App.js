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
    newUserEmail: "",
    beingUpdated: false,  //status of user being updated
    updatedUserId: null,
    updatedUserName: "",
    updatedUserEmail: ""
  };

  updateFormField = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addUser = (e) => {
    let newUser = {
      _id: Math.floor(Math.random() * 10000),
      name: this.state.newUserName,
      email: this.state.newUserEmail
    }
    let currentValues = this.state.users;
    let modifiedValues = [...currentValues, newUser];
    this.setState({
      users: modifiedValues,
      newUserName: "",  //reset values to default
      newUserEmail: ""
    })
    console.log(`New user added: ${this.state.newUserName}`);
  };

  displayEdit = (user) => {
    if (this.state.beingUpdated === true && user._id === this.state.updatedUserId) {
      return (
        <div>
          <hr />
          <input
            type="text"
            value={this.state.updatedUserName}
            onChange={this.updateFormField}
            name="updatedUserName"
          />
          <input
            type="text"
            value={this.state.updatedUserEmail}
            onChange={this.updateFormField}
            name="updatedUserEmail"
          />
          <button
            onClick={() => {
              this.processEdit(user);
            }}
          >
            Edit
          </button>
        </div>
      );
    } else {
      return null
    }
  }


  processEdit = (user) => {
    let selectedUser = {
      _id: this.state.updatedUserId,
      name: this.state.updatedUserName,
      email: this.state.updatedUserEmail
    }

    let user_index = this.state.users.findIndex(e => e === user);
    let modifiedUsers = [
      ...this.state.users.slice(0, user_index),
      selectedUser,
      ...this.state.users.slice(user_index + 1)
    ];

    this.setState({
      users: modifiedUsers,
      beingUpdated: false,  //updated ended, reset back to default
      updatedUserId: null,
      updatedUserName: "",
      updatedUserEmail: ""
    });
    //console.log(modifiedUsers);
    console.log(this.state);
  }

  deleteUser = (user) => {
    let user_index = this.state.users.findIndex(e => e === user);
    let modifiedUsers = [
      ...this.state.users.slice(0, user_index),
      ...this.state.users.slice(user_index + 1)
    ];

    this.setState({
      users: modifiedUsers
    });

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
        <button onClick={this.addUser}>Add</button>
      </React.Fragment>
    );
  }


  render() {
    return (
      <div className="App">
        {this.state.users.map((user) => {
          return (
            <React.Fragment key={user._id}>
              <div className="box">
                <h3>{user.name}</h3>
                <h4>{user.email}</h4>
                <button
                  onClick={async () => {
                    await this.setState({
                      beingUpdated: true, //change from false to true
                      updatedUserId: user._id,
                      updatedUserName: user.name,
                      updatedUserEmail: user.email
                    })
                    console.log(this.state)
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
                {this.displayEdit(user)}
              </div>
            </React.Fragment>
          );
        })
        }
        {this.renderAddUser()}
      </div >
    );
  }


}
