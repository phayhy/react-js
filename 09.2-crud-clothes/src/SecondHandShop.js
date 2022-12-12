import React from "react";

export default class SecondHandShop extends React.Component {
  state = {
    items: [
      {
        _id: 1,
        itemName: "Jacket",
        price: 100
      },
      {
        _id: 2,
        itemName: "Old Pants",
        price: 150
      },
      {
        _id: 3,
        itemName: "Old Suit",
        price: 220
      }
    ],
    itemBeingModified: null,
    newItemName: "",
    newItemPrice: null,
    updatedItemId: null,
    updatedItemName: "",
    updatedItemPrice: null
  };

  updateFormField = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addItem = (e) => {
    let newItem = {
      _id: Math.floor(Math.random() * 10000),
      itemName: this.state.newItemName,
      price: this.state.newItemPrice
    }
    let currentValues = this.state.items;
    let modifiedValues = [...currentValues, newItem];
    this.setState({
      items: modifiedValues,
      newItemName: "",  //reset values to default
      newItemPrice: ""
    })
    console.log(`New user added: ${this.state.newItemName}`);
  };

  renderAddItem() {
    return (
      <React.Fragment>
        <input
          type="text"
          placeholder="Item name"
          value={this.state.newItemName}
          onChange={this.updateFormField}
          name="newItemName"
        />
        <input
          type="text"
          placeholder="Item price"
          value={this.state.newItemPrice}
          onChange={this.updateFormField}
          name="newItemPrice"
        />
        <button onClick={this.addItem}>Add</button>
      </React.Fragment>
    );
  }


  // the function below display the shop item normally
  displayItemInfo(item) {
    return (
      <div className="item-info">
        <h2>{item.itemName}</h2>
        <h3>${item.price}</h3>
        <button
          onClick={async () => {
            await this.setState({
              itemBeingModified: true, //change to true
              updatedItemId: item._id,
              updatedItemName: item.itemName,
              updatedItemPrice: item.price
            })
            console.log(this.state)
          }}
        >
          Edit
        </button>
        <button onClick={() => {
          this.deleteItem(item);
        }}
        >
          Delete
        </button>
        {this.displayEditItem(item)}
      </div>
    );
  }

  // the function below display the shop item for editing
  displayEditItem(item) {
    if (this.state.itemBeingModified === true && item._id === this.state.updatedItemId) {
      return (
        <div>
          <hr />
          <input
            type="text"
            value={this.state.updatedItemName}
            onChange={this.updateFormField}
            name="updatedItemName"
          />
          <input
            type="text"
            value={this.state.updatedItemPrice}
            onChange={this.updateFormField}
            name="updatedItemPrice"
          />
          <button
            onClick={() => {
              this.processEdit(item);
            }}
          >
            Submit
          </button>
        </div>
      );
    } else {
      return null
    }
  }

  processEdit = (item) => {
    let selectedItem = {
      _id: this.state.updatedItemId,
      itemName: this.state.updatedItemName,
      price: this.state.updatedItemPrice
    }

    let item_index = this.state.items.findIndex(e => e === item);
    let modifiedItems = [
      ...this.state.items.slice(0, item_index),
      selectedItem,
      ...this.state.items.slice(item_index + 1)
    ];

    this.setState({
      items: modifiedItems,
      itemBeingModified: false,  //updated ended, reset back to default
      updatedItemId: null,
      updatedItemName: "",
      updatedItemPrice: null
    });
    //console.log(modifiedItems);
    console.log(this.state);
  }



  deleteItem = (item) => {
    let item_index = this.state.items.findIndex(e => e === item);
    let modifiedItems = [
      ...this.state.items.slice(0, item_index),
      ...this.state.items.slice(item_index + 1)
    ];

    this.setState({
      items: modifiedItems
    });

  };


  render() {
    return (
      <React.Fragment>
        {/* List rendering */}
        {this.state.items.map((item) => {
          // todo:
          // if the task is not being modified, return the JSX for display the item normally
          // if the task is being modified, return the JSX for display the edit item form

          return this.displayItemInfo(item);
        })}
        {this.renderAddItem()}
      </React.Fragment>
    );
  }
}
