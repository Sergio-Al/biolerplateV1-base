import React from "react";
import { connect } from "react-redux"; // to connect to the store
import { setTextFilter } from "../actions/filters";

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
  </div>
);

const mapStateToProps = (state) => ({
  filters: state.filters,
});
export default connect(mapStateToProps)(ExpenseListFilters); // the first argument is optional if we want to access to more store features
