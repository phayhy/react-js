import React from "react";
import './styles.css';

function App() {
  return (
    <React.Fragment>
    <h1>Hello World</h1>
    <p style={{backgroundColor:'yellow'}}>Welcome to our first React App</p>
    <img src={require('./logo.svg').default} height = "400"/>
    <img src={require('./bubble-tea.jpg')} height= "400" alt="bubble tea"/>
    </React.Fragment>
    );
}
export default App;
