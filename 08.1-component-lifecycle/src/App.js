//npm install react-bootstrap bootstrap
//npm install axios

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MallDirectory from "./MallDirectory";
import Menu from "./Menu";

function App() {
  return (
    <div className='container'>
    <React.Fragment>
      <MallDirectory />
      <hr/>
      <Menu />
    </React.Fragment>
    </div>
  );

}

export default App;