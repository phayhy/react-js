import React from "react";

export default class MallDirectory extends React.Component {
  state = {
    searchTerms: "",
    events: [
      "10% off at Coffee beans",
      "Carolling at Don Don Donki",
      "Free parking vouchers for spending above $100.00"
    ],
    shops: [
      {
        id: 1,
        name: "Macdonalds",
        floor: 1,
        unit: 202,
        type: "F&B"
      },
      {
        id: 2,
        name: "Coffee Beans",
        floor: 2,
        unit: 301,
        type: "F&B"
      },
      {
        id: 3,
        name: "Uniqo",
        floor: 1,
        unit: 101,
        type: "F&B"
      },
      {
        id: 4,
        name: "Don Don Donki",
        floor: 5,
        unit: 103,
        type: "Supermarket"
      }
    ]
  };

  renderShops() {
    let jsx = [];

    for (let s of this.state.shops) {
      if (
        this.state.searchTerms === "" ||
        s.name.toLowerCase().includes(this.state.searchTerms.toLowerCase())
      ) {
        jsx.push(
          <div key={s.id}>
            <h3>{s.name}</h3>
            <ul>
              <li>Floor: {s.floor}</li>
              <li>Unit: {s.unit}</li>
              <li>Type: {s.type}</li>
            </ul>
          </div>
        );
      }
    }
    return jsx;
  }

  render() {
    return (
      <React.Fragment>
        <h1>Generic Mall Shopping Directory</h1>

        <input
          type="text"
          value={this.state.searchTerms}
          placeholder="Enter search terms here"
          onChange={(e) => {
            this.setState({
              searchTerms: e.target.value
            });
          }}
        />

        <h2>Shops</h2>
        {this.renderShops()}
        <h2>Events</h2>
        {this.state.events.map(function(e) {
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
        })}
      </React.Fragment>
    );
  }
}
