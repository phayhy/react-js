import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

export default class Menu extends React.Component {
  state = {
    foodItems: [
      {
        _id: 101,
        name: "Chicken Udon Soup",
        price: 11.99,
        ingredients: ["chicken stock", "udon", "chicken breast"],
      },
      {
        _id: 203,
        name: "Salmon Teriyaki Don",
        price: 9.9,
        ingredients: ["salmon", "rice", "soya sauce"],
      },
      {
        _id: 401,
        name: "Raw Salmon Slices",
        price: 15.99,
        ingredients: ["salmon"],
      },
      {
        _id: 402,
        name: "Chicken Miso Ramen",
        price: 15.99,
        ingredients: ["chicken", "miso", "ramen"],
      },
    ],
  };

  renderFoodItems() {
    let jsx = [];
    for (let items of this.state.foodItems) {
      jsx.push(
        <div>           
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Subtitle key={items.name}>
                Food Name: {items.name}
              </Card.Subtitle>
              <br/>
              <Card.Text className="mb-2 text-muted" key={items.ingredients}>
                Food ingredients: {items.ingredients.map((e)=>`${e}, `)}
              </Card.Text>
              <Card.Text className="mb-2 text-muted" key={items.price}>
                Food Price: ${items.price}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      );
    }
    return jsx;
  }

  render() {
    return <React.Fragment>

        {this.renderFoodItems()}
        </React.Fragment>;
  }
}
