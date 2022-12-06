import './App.css'
import React from 'react';

export default function App() {

  const pop = () => {
    alert("poppity pop");
  }

  return (
    <React.Fragment>
      <button onClick={pop}>Press me</button>
    </React.Fragment>
  )
}
