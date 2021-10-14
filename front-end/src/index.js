import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { store } from "core/redux/store";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
