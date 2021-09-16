import React from "react";
import { connect } from "react-redux"; // to connect to the store
import { setTextFilter, sortByAmount, sortByDate } from "../actions/filters";

const ExpenseListFilters = (props) => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      onChange={(e) => {
        props.dispatch(setTextFilter(e.target.value)); // we are able to change the value in the filters store
        console.log(e.target.value);
      }}
    />
    <select
      value={props.filters.sortBy}
      onChange={(e) => {
        if (e.target.value === "date") {
          props.dispatch(sortByDate());
        } else if (e.target.value === "amount") {
          props.dispatch(sortByAmount());
        }
      }}
    >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

const mapStateToProps = (state) => ({
  filters: state.filters,
});
export default connect(mapStateToProps)(ExpenseListFilters); // the first argument is optional if we want to access to more store features
