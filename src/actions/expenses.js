import { v4 as uuidv4 } from "uuid";
import db from "../firebase/firebase";
import { ref, push, onValue, remove, update } from "firebase/database";
import expenses from "../reducers/expenses";

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense,
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return push(ref(db, `users/${uid}/expenses`), expense).then((ref) => {
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
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return remove(ref(db, `users/${uid}/expenses/${id}`)).then(() =>
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

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return update(ref(db, `users/${uid}/expenses/${id}`), updates).then(() => {
      dispatch(editExpense(id, updates));
    });
  };
};

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses,
});

//export const startSetExpenses;
export const startSetExpenses = () => {
  return (dispatch, getState) => {
    // Remember GetState is to get the state from redux through middleware for functions
    return new Promise((resolve, reject) => {
      const uid = getState().auth.uid;
      onValue(
        ref(db, `users/${uid}/expenses`),
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
