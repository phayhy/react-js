import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
//npm install react-bootstrap bootstrap

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
          placeholder="Expense Date Incurred"
          value={this.state.newDateIncur}
          onChange={this.updateFormField}
          name="newDateIncur"
        />
        <input
          type="text"
          placeholder="Expense Description"
          value={this.state.newDescription}
          onChange={this.updateFormField}
          name="newDescription"
        />
        <br />
        <input
          type="text"
          placeholder="Expense Category"
          value={this.state.newCategory}
          onChange={this.updateFormField}
          name="newCategory"
        />
        <input
          type="text"
          placeholder="Expense Amount"
          value={this.state.newAmount}
          onChange={this.updateFormField}
          name="newAmount"
        />
        <input
          type="checkbox"
          value={this.state.newReconciled}
          name="Expense reconcile"
        />
        Expense Reconciled?
        <br />
        <Button onClick={this.addExpense}>Add</Button>
      </React.Fragment>
    );
  }

  // the function below display the shop expense normally
  displayExpenseInfo(expense) {
    return (
      <Card style={{ width: "18rem" }} className="mb-2">
        <Card.Body>
          <div className="expense-info">
            <ul>
            <li>{expense.dateIncur}</li>
            <li>{expense.description}</li>
            <li>{expense.category}</li>
            <li>${expense.amount}</li>
            Expense Reconciled?
            <input
              type="checkbox"
              value={expense.reconciled}
              name="Expense reconcile"
              checked={expense.reconciled}
            />
            </ul>
            <br />
            <Button
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
            </Button>
            <Button variant="danger"
              onClick={() => {
                this.deleteExpense(expense);
              }}
            >
              Delete
            </Button>
            {this.displayEditExpense(expense)}
          </div>
        </Card.Body>
      </Card>
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
          <Button
            onClick={() => {
              this.processEdit(expense);
            }}
          >
            Submit
          </Button>
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
