import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

export default class Menu extends React.Component {
  state = {
    searchFoodName: "",
    searchIngredient: "",
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
      if (
        this.state.searchFoodName === "" ||
        items.name.toLowerCase().includes(this.state.searchFoodName.toLowerCase())
      ) {
        jsx.push(
          <div>
            <Card style={{ width: "18rem" }} className="mb-2">
              <Card.Body>
                <Card.Subtitle key={items.name}>
                  Food Name: {items.name}
                </Card.Subtitle>
                <br />
                <Card.Text className="mb-2 text-muted" key={items.ingredients}>
                  Food Ingredients:
                  <ul>
                    {items.ingredients.map((e) => (<li>{e}</li>))}
                  </ul>
                </Card.Text>
                <Card.Text className="mb-2 text-muted" key={items.price}>
                  Food Price: ${items.price}
                </Card.Text>
              </Card.Body >
            </Card >
          </div >
        );
      }
    }
    return jsx;
  }

  render() {
    return (
      <React.Fragment>
        <h2>Menu</h2>
        <input
          type="text"
          value={this.state.searchFoodName}
          placeholder="Search food name here"
          onChange={(e) => {
            this.setState({
              searchFoodName: e.target.value
            });
          }}
        />
        <br />
        <input
          type="text"
          value={this.state.searchIngredient}
          placeholder="Search ingredient here"
          onChange={(e) => {
            this.setState({
              searchIngredient: e.target.value
            });
          }}
        />
        <hr />
        {this.renderFoodItems()}
      </React.Fragment>);
  }
}

