import React from "react";
import { connect } from "react-redux";

const ExpenseList = (props) => (
  <div>
    <h1>ExpenseList</h1>
    {props.expenses.length}
    {props.filters.text}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseList); // argument in connect(This of we wanna get of the store)(What we want to connect)
