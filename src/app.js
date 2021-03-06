// install -> import -> use
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // Provide store to all components
import AppRouter, { history } from "./routes/AppRouter";
import ConfigureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css"; // this is from expenseform component file, we moved here because we'll use this in other files too
import "./firebase/firebase";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import LoadingPage from "./components/LoadingPage";

const store = ConfigureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRenderer = false;
const renderApp = () => {
  if (!hasRenderer) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRenderer = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

onAuthStateChanged(getAuth(), (user) => {
  if (user) {
    store.dispatch(login(user.uid));
    console.log("uid", user.uid);
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
