import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";
import expenses from "../fixtures/expenses";
import expensesTotal from "../../selectors/expenses-total";

test("should render empty or zero with no expenses", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={[].length} expensesTotal={[]} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("Should render expenses Summary correctly", () => {
  const wrapper = shallow(
    <ExpensesSummary
      expenseCount={expenses.length}
      expensesTotal={expensesTotal(expenses)}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
