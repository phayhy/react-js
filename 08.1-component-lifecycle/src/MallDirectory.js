import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default class MallDirectory extends React.Component {
  state = {
    searchTerms: "",
    events: [],
    shops: [],
  };

  async componentDidMount() {
    const eventResponse = await axios.get("events.json");
    const eventData = eventResponse.data;
    const shopResponse = await axios.get("shops.json");
    const shopData = shopResponse.data;
    this.setState({
      events: eventData,
      shops: shopData,
    });
  }

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
              searchTerms: e.target.value,
            });
          }}
        />

        <h2>Shops</h2>
        {this.renderShops()}
        <h2>Events</h2>
        {this.state.events.map(function (e) {
          return (
            <div
              key={e}
              style={{
                border: "1px solid black",
                margin: "5px",
                padding: "5px",
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
