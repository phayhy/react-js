import React from "react";

export default function GST(props) {
  return (
    <React.Fragment>
      <div>
        <label>Bill amount:</label>
        <input
          type="text"
          name="bill"
          value={props.bill}
          onChange={props.updateField}
        />
        <button onClick={props.calculate}>Calculate GST</button>
      </div>
    </React.Fragment>
  );
}
