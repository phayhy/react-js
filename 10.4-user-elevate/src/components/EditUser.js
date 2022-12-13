import React from "react";

export default function EditUser(props) {
  return (
    <div className="box">
      <div>
        <input
          type="text"
          name="editedUserName"
          onChange={props.updateFormField}
          value={props.editedUserName}
        />
      </div>
      <div>
        <input
          type="text"
          name="editedUserEmail"
          onChange={props.updateFormField}
          value={props.editedUserEmail}
        />
      </div>
      <div>
        <button
          onClick={() => {
            props.confirmEdit(props.user);
          }}
        >
          Confirm
        </button>
        <button onClick={props.cancelEdit}>Cancel edit</button>
      </div>
    </div>
  );
}
//user refer to each element maped out from users
