import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./tailwind.css";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./store";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ToastContainer />
    <App />
  </Provider>
);
