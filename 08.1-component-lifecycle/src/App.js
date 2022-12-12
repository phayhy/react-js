//npm install react-bootstrap bootstrap
//npm install axios

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MallDirectory from "./MallDirectory";

function App() {
  return (
    <div className='container'>
    <React.Fragment>
      <MallDirectory />
    </React.Fragment>
    </div>
  );

}

export default App;