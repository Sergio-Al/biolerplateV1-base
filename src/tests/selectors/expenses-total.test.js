import selectExpensesTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

console.log([].map((expense) => expense.amount));

test("should return 0 if no expenses", () => {
  const totalExpenses = selectExpensesTotal([]);
  expect(totalExpenses).toBe(0);
});

test("should correctly add up a single expense", () => {
  expect(selectExpensesTotal([expenses[2]])).toBe(expenses[2].amount);
});

test("should correctly add up multiple expenses", () => {
  expect(selectExpensesTotal(expenses)).toBe(114195);
});
