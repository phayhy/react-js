//https://react-bootstrap.github.io/getting-started/introduction/
//npm install react-bootstrap bootstrap

import React from "react";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Importing Bootstrap Components
/*import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";*/
import {Container, Form, Button} from 'react-bootstrap';

// Importing own components
import SumOfTwo from "./SumOfTwo";

const number1 = 15;
const number2 = 63;

function App() {
  return (
    <React.Fragment>
      <Container>
        <div class="bg-light p-5 rounded">
          <h1>Calculate sum</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>First Number</Form.Label>
              <Form.Control type="number" value = {number1} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Second Number</Form.Label>
              <Form.Control type="number" value = {number2} />
            </Form.Group>
          </Form>
          <p></p>
          <SumOfTwo num1 = {number1} num2 = {number2} />
        </div>
      </Container>
    </React.Fragment>
  );
}

export default App;

