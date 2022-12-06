//https://react-bootstrap.github.io/getting-started/introduction/
//npm install react-bootstrap bootstrap

import React from "react";
import Cards from "./Cards";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

function App() {
  return (
    <React.Fragment>
      <h1 style={{ marginLeft: "1rem" }}>Task: Add three Card elements</h1>
      <Card border="secondary" style={{ marginLeft: "1rem", width: "21rem" }}>
        <Card.Body>
          <Cards h2="First card's h2" />
          <Cards h3="First card's h3" />
        </Card.Body>
      </Card>
      <br />
      <Card border="secondary" style={{ marginLeft: "1rem", width: "21rem" }}>
        <Card.Body>
          <Cards h2="Second card's h2" />
          <Cards h3="Second card's h3" />
        </Card.Body>
      </Card>
      <br />
      <Card border="secondary" style={{ marginLeft: "1rem", width: "21rem" }}>
        <Card.Body>
          <Cards h2="Third card's h2" />
          <Cards h3="Third card's h3" />
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}

export default App;


