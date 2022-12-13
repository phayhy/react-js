import React from "react";

export default function Summary(props) {
  return (
    <React.Fragment>
      <h2>Bill Summary</h2>
      <ul>
        <li>Original bill: ${props.bill}</li>
        <li>Service charge (10%): ${props.serviceCharge}</li>
        <li>GST (7%): ${props.gst}</li>
        <li>Total bill (incl GST): ${props.total}</li>
      </ul>
    </React.Fragment>
  );
}
