import React from "react";
import User from "./User";

export default function UserList(props) {
  return (
    <React.Fragment>
        <User
          key={props._id}
          name={props.name}
          email={props.email}
          beginEdit={props.beginEdit}
          deleteUser={props.deleteUser}
          user={props.user}
        />
    </React.Fragment>
  );
}
//user refer to each element maped out from users
