import { v4 as uuidv4 } from "uuid";
import db from "../firebase/firebase";
import { ref, push, onValue, remove } from "firebase/database";
import expenses from "../reducers/expenses";

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense,
});

export const startAddExpense = (expenseData = {}) => {
  // we are returning a function that redux will exetutes
  // if is a traditional return function (not for redux) this could not work as expected
  // this is called internally by redux with dispatch as parameter (redux puts a dispatch as parameter in our return funcion)
  // this return function executes firebase operation first then dispatch to our redux store
  return (dispatch) => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return push(ref(db, "expenses"), expense).then((ref) => {
      dispatch(
        addExpense({
          id: ref.key,
          ...expense,
        })
      );
    });
  };
};

// REMOVE_EXPENSE
export const removeExpense = (id) => ({
  type: "REMOVE_EXPENSE",
  id,
});
export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch) => {
    return remove(ref(db, `expenses/${id}`)).then(() =>
      dispatch(removeExpense(id))
    );
  };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses,
});

//export const startSetExpenses;
export const startSetExpenses = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      onValue(
        ref(db, "expenses"),
        (snapshot) => {
          const expensesData = [];

          snapshot.forEach((childSnapshot) => {
            expensesData.push({
              id: childSnapshot.key,
              ...childSnapshot.val(),
            });
          });

          resolve(dispatch(setExpenses(expensesData)));
        },
        {
          onlyOnce: true,
        }
      );
    });
  };
};
