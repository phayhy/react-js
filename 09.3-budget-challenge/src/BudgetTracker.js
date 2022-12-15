import React from "react";

export default class BudgetTracker extends React.Component {
  state = {
    expenses: [
      {
        _id: 1,
        dateIncur: "15 March 2016",
        description: "Sofa",
        category: "others",
        amount: 1000,
        reconciled: true,
      },
      {
        _id: 2,
        dateIncur: "27 June 2017",
        description: "Lobster Buffet",
        category: "food",
        amount: 98,
        reconciled: true,
      },
      {
        _id: 3,
        dateIncur: "9 December 2018",
        description: "Europe train ticket",
        category: "travel",
        amount: 220,
        reconciled: false,
      },
    ],
    expenseBeingModified: null,
    newDateIncur: "",
    newDescription: "",
    newCategory: "",
    newAmount: null,
    newReconciled: null,
    updatedId: null,
    updatedDateIncur: "",
    updatedDescription: "",
    updatedCategory: "",
    updatedAmount: null,
    updatedReconciled: null,
  };

  updateFormField = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addExpense = (e) => {
    let newExpense = {
      _id: Math.floor(Math.random() * 10000),
      description: this.state.newDescription,
      amount: this.state.newAmount,
    };
    let currentValues = this.state.expenses;
    let modifiedValues = [...currentValues, newExpense];
    this.setState({
      expenses: modifiedValues,
      newDescription: "", //reset values to default
      newAmount: "",
    });
    console.log(`New user added: ${this.state.newDescription}`);
  };

  renderAddExpense() {
    return (
      <React.Fragment>
        <hr />
        <h3>Add new expense</h3>
        <input
          type="text"
          placeholder="Expense name"
          value={this.state.newDescription}
          onChange={this.updateFormField}
          name="newDescription"
        />
        <input
          type="text"
          placeholder="Expense amount"
          value={this.state.newAmount}
          onChange={this.updateFormField}
          name="newAmount"
        />
        <button onClick={this.addExpense}>Add</button>
      </React.Fragment>
    );
  }

  // the function below display the shop expense normally
  displayExpenseInfo(expense) {
    return (
      <div className="expense-info">
        <h2>{expense.description}</h2>
        <h3>${expense.amount}</h3>
        <button
          onClick={async () => {
            await this.setState({
              expenseBeingModified: true, //change to true
              updatedId: expense._id,
              updatedDescription: expense.description,
              updatedAmount: expense.amount,
            });
            console.log(this.state);
          }}
        >
          Edit
        </button>
        <button
          onClick={() => {
            this.deleteExpense(expense);
          }}
        >
          Delete
        </button>
        {this.displayEditExpense(expense)}
      </div>
    );
  }

  // the function below display the shop expense for editing
  displayEditExpense(expense) {
    if (
      this.state.expenseBeingModified === true &&
      expense._id === this.state.updatedId
    ) {
      return (
        <div>
          <hr />
          <input
            type="text"
            value={this.state.updatedDescription}
            onChange={this.updateFormField}
            name="updatedDescription"
          />
          <input
            type="text"
            value={this.state.updatedAmount}
            onChange={this.updateFormField}
            name="updatedAmount"
          />
          <button
            onClick={() => {
              this.processEdit(expense);
            }}
          >
            Submit
          </button>
        </div>
      );
    } else {
      return null;
    }
  }

  processEdit = (expense) => {
    let selectedExpense = {
      _id: this.state.updatedId,
      description: this.state.updatedDescription,
      amount: this.state.updatedAmount,
    };

    let expense_index = this.state.expenses.findIndex((e) => e === expense);
    let modifiedExpenses = [
      ...this.state.expenses.slice(0, expense_index),
      selectedExpense,
      ...this.state.expenses.slice(expense_index + 1),
    ];

    this.setState({
      expenses: modifiedExpenses,
      expenseBeingModified: false, //updated ended, reset back to default
      updatedId: null,
      updatedDescription: "",
      updatedAmount: null,
    });
    //console.log(modifiedExpenses);
    console.log(this.state);
  };

  deleteExpense = (expense) => {
    let expense_index = this.state.expenses.findIndex((e) => e === expense);
    let modifiedExpenses = [
      ...this.state.expenses.slice(0, expense_index),
      ...this.state.expenses.slice(expense_index + 1),
    ];

    this.setState({
      expenses: modifiedExpenses,
    });
  };

  render() {
    return (
      <React.Fragment>
        {/* List rendering */}
        {this.state.expenses.map((expense) => {
          // todo:
          // if the task is not being modified, return the JSX for display the expense normally
          // if the task is being modified, return the JSX for display the edit expense form

          return this.displayExpenseInfo(expense);
        })}
        {this.renderAddExpense()}
      </React.Fragment>
    );
  }
}
