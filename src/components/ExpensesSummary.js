import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import expensesTotal from "../selectors/expenses-total";
import selectExpense from "../selectors/expenses";

export const ExpensesSummary = (props) => (
  <div>
    Viewing {props.expenseCount} totalling: 
    {numeral(props.expensesTotal / 100).format("$0,0.00")}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenseCount: selectExpense(state.expenses, state.filters).length,
    expensesTotal: expensesTotal(selectExpense(state.expenses, state.filters)),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
