import React from "react";
import ReactDOM from "react-dom";
//react redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
//redux-thunk
import reduxThunk from "redux-thunk";
//reducers
import reducers from "./reducers";

import App from "./components/App";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
