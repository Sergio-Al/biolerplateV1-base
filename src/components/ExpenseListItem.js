import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <h3>
      Description: {description}
      <Link to={`/edit/${id}`}> Edit</Link>
    </h3>
    <p>
      {amount} - {createdAt}
    </p>
  </div>
);

export default ExpenseListItem;
