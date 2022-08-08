import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import * as Sentry from "@sentry/browser";
import Routes from "./routes";
import store from "./store";
import { currentEnv } from "./consts/env";
import "./App.css";

class App extends Component {
  componentDidCatch(error) {
    Sentry.captureException(error);
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>{" "}
      </Provider>
    );
  }
}
export default App;
