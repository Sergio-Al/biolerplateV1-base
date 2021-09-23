import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";
import expenses from "../fixtures/expenses";
import expensesTotal from "../../selectors/expenses-total";

test("should correctly render ExpensesSummary with no expenses", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={[].length} expensesTotal={[]} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should correctly render ExpensesSummary with 1 expense", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={234} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("Should correctly render ExpensesSummary with multiple expenses", () => {
  const wrapper = shallow(
    <ExpensesSummary
      expenseCount={expenses.length}
      expensesTotal={expensesTotal(expenses)}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
