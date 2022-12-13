import React from "react";

export default function User(props) {
  return (
    <div className="box">
      <h3>{props.name}</h3>
      <h4>{props.email}</h4>
      <div>
        <button
          onClick={() => {
            props.beginEdit(props.user);
          }}
        >
          Update
        </button>
        <button
          onClick={() => {
            props.deleteUser(props.user);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
//user refer to each element maped out from users
