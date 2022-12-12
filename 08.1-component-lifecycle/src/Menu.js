import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import axios from "axios"


export default class Menu extends React.Component {
  state = {
    searchFoodName: "",
    searchIngredient: "",
    foodItems: [],
  };


  async componentDidMount() {
    const foodResponse = await axios.get("foodItems.json");
    const foodData = foodResponse.data;

    this.setState({
      foodItems: foodData
    });
  }

  renderFoodItems() {

    let jsx = [];

    for (let items of this.state.foodItems) {
      if (
        (this.state.searchFoodName === "" ||
          items.name.toLowerCase().includes(this.state.searchFoodName.toLowerCase())) &&
        (this.state.searchIngredient === "" ||
          items.ingredients.toString().toLowerCase().includes(this.state.searchIngredient.toLowerCase()))
      ) {
        jsx.push(
          <div>
            <Card style={{ width: "18rem" }} className="mb-2">
              <Card.Img variant="top" src={items.image} />
              <Card.Body>
                <Card.Subtitle key={items.name}>
                  Food Name: {items.name}
                </Card.Subtitle>
                <br />
                <Card.Text className="mb-2 text-muted" key={items.ingredients}>
                  Food Ingredients:
                  <ul>
                    {items.ingredients.map((e) => (<li key={e}>{e}</li>))}
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

