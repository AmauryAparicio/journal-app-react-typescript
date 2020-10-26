import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import JournalApp from "./JournalApp";
import store from "./store/store";

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <JournalApp />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
