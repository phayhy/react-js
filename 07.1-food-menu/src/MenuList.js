import React from "react";

export default class MenuList extends React.Component {

  state = {
    foodItems: [
      "Egg Tarts",
      "Chicken Rice",
      "Penang Rojak",
      "Steamed Chicken Noodles"
    ]
  }

  renderFoodItems() {
    let jsx = [];
    for (let items of this.state.foodItems) {
      jsx.push(<li key={items}>{items}</li>);
    }
    return jsx;
  }

  render() {
    return (
      <React.Fragment>
        <h1>Menu</h1>
        <h2>Food items (version 1)</h2>
        <ul>{this.renderFoodItems()}</ul>
        <h2>Food items (version 2)</h2>
        {
          this.state.foodItems.map(function(e) {
            return (
              <div
                key={e}
                style={{
                  border: "1px solid black",
                  margin: "5px",
                  padding: "5px"
                }}
              >
                {e}
              </div>
            );
          })
        }
      </React.Fragment>
    );
  };
}

