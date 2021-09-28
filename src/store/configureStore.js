import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";
import thunk from "redux-thunk";

// this constant will preseve our redux devtools functionality
// we can't put directly in createStore because a middleware is on the way
// this basically says 'use redux devtools extension as compose' or 'return a default compose
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  // store creation
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
