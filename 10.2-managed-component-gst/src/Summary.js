import React from "react";

export default function Summary(props) {
  return (
    <React.Fragment>
      <p>Original bill: ${props.bill}</p>
      <p>Service Charge (10%): ${props.serviceCharge}</p>
      <p>GST (7%): ${props.gst}</p>
      <p>Total bill (incl GST): ${props.total}</p>
    </React.Fragment>
  );
}
