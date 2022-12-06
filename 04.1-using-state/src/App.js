import React from "react";
import NumberBox from "./NumberBox";
import AlertBox from "./AlertBox";


export default function App() {
  return (
    <React.Fragment>
      <NumberBox initialValue = {15}/>
      <p></p>
      <AlertBox initialValue = {"Hello this is an Alertbox using state"} />
    </React.Fragment>
  )
}
