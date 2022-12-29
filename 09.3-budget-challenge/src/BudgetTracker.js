import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
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

  updateBoolean = (e) => {
    this.setState({
      newReconciled: e.target.checked,
    });
  };

  changeBoolean = () => {
    let changeBoolean = !this.state.updatedReconciled;

    this.setState({
      updatedReconciled: changeBoolean,
    });
  };

  addExpense = (e) => {
    let newExpense = {
      _id: Math.floor(Math.random() * 10000),
      dateIncur: this.state.newDateIncur,
      description: this.state.newDescription,
      category: this.state.newCategory,
      amount: this.state.newAmount,
      reconciled: this.state.newReconciled,
    };
    let currentValues = this.state.expenses;
    let modifiedValues = [...currentValues, newExpense];
    this.setState({
      expenses: modifiedValues,
      //reset initial values
      newDateIncur: "",
      newDescription: "",
      newCategory: "",
      newAmount: "",
      newReconciled: null,
    });
    this.resetValues();
    console.log(`New user added: ${this.state.newDescription}`);
  };

  renderAddExpense() {
    return (
      <React.Fragment>
        <hr />
        <h3>Add new expense</h3>
        <ul>
          <li>
            <b>Date incurred: &nbsp;</b>
            <input
              type="text"
              placeholder="e.g., 9 August 2022"
              value={this.state.newDateIncur}
              onChange={this.updateFormField}
              name="newDateIncur"
            />
          </li>
          <li>
            <b>Description: &nbsp;</b>
            <input
              type="text"
              placeholder="e.g., buffet, tickets"
              value={this.state.newDescription}
              onChange={this.updateFormField}
              name="newDescription"
            />
          </li>
          <li>
            <b>Category: &nbsp;</b>
            <input
              type="text"
              placeholder="e.g., food, travel, others"
              value={this.state.newCategory}
              onChange={this.updateFormField}
              name="newCategory"
            />
          </li>
          <li>
            <b>Amount: &nbsp;</b>
            <input
              type="text"
              placeholder="e.g., 100"
              value={this.state.newAmount}
              onChange={this.updateFormField}
              name="newAmount"
            />
          </li>
          <li>
            <b>Expense Reconciled? &nbsp;</b>
            <input
              type="checkbox"
              value={this.state.newReconciled}
              checked={this.state.newReconciled}
              onClick={this.updateBoolean}
              name="Expense reconcile"
            />
          </li>
        </ul>
        <Button onClick={this.addExpense}>Add</Button>
      </React.Fragment>
    );
  }

  // the function below display the shop expense normally
  displayExpenseInfo(expense) {
    return (
      <Card style={{ width: "24rem" }} className="mb-2">
        <Card.Body>
          <div className="expense-info">
            <ul>
              <li>
                <b>Date incurred:</b> {expense.dateIncur}
              </li>
              <li>
                <b>Description:</b> {expense.description}
              </li>
              <li>
                <b>Category:</b> {expense.category}
              </li>
              <li>
                <b>Amount:</b> ${expense.amount}
              </li>
              <li>
                <b>Expense Reconciled? &nbsp;</b>
                <input
                  type="checkbox"
                  value={expense.reconciled}
                  name="Expense reconcile"
                  checked={expense.reconciled}
                />
              </li>
            </ul>
            <Button
              variant="success"
              onClick={async () => {
                await this.setState({
                  expenseBeingModified: true, //change to true
                  updatedId: expense._id,
                  updatedDateIncur: expense.dateIncur,
                  updatedDescription: expense.description,
                  updatedCategory: expense.category,
                  updatedAmount: expense.amount,
                  updatedReconciled: expense.reconciled,
                });
                console.log(this.state);
              }}
            >
              Edit
            </Button>
            <Button
              variant="danger"
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
          <ul>
            <li>
              <b>Date incurred: &nbsp;</b>
              <input
                type="text"
                value={this.state.updatedDateIncur}
                onChange={this.updateFormField}
                name="updatedDateIncur"
              />
            </li>
            <li>
              <b>Description: &nbsp;</b>
              <input
                type="text"
                value={this.state.updatedDescription}
                onChange={this.updateFormField}
                name="updatedDescription"
              />
            </li>
            <li>
              <b>Category: &nbsp;</b>
              <input
                type="text"
                value={this.state.updatedCategory}
                onChange={this.updateFormField}
                name="updatedCategory"
              />
            </li>
            <li>
              <b>Amount: &nbsp;</b>
              <input
                type="text"
                value={this.state.updatedAmount}
                onChange={this.updateFormField}
                name="updatedAmount"
              />
            </li>
            <li>
              <b>Expense Reconciled? &nbsp;</b>
              <input
                type="checkbox"
                value={this.state.updatedReconciled}
                name="updatedReconciled"
                onClick={this.changeBoolean}
                checked={this.state.updatedReconciled}
              />
            </li>
          </ul>
          <Button
            variant="secondary"
            onClick={() => {
              this.processEdit(expense);
            }}
          >
            Save changes
          </Button>
          <Button
            variant="outline-secondary"
            onClick={() => {
              this.cancelEdit(expense);
            }}
          >
            Cancel
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
      dateIncur: this.state.updatedDateIncur,
      description: this.state.updatedDescription,
      category: this.state.updatedCategory,
      amount: this.state.updatedAmount,
      reconciled: this.state.updatedReconciled,
    };
    //change the status of boolean here?

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
      updatedDateIncur: "",
      updatedDescription: "",
      updatedCategory: "",
      updatedAmount: null,
      updatedReconciled: null,
    });
    //console.log(modifiedExpenses);
    console.log(this.state);
  };

  cancelEdit = () => {
    this.setState({
      expenseBeingModified: null, //updated ended, reset back to default
      updatedId: null,
      updatedDateIncur: "",
      updatedDescription: "",
      updatedCategory: "",
      updatedAmount: null,
      updatedReconciled: null,
    });
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
