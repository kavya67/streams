import React from "react";
import ReactDOM from "react-dom";
//react redux
import { Provider } from "react-redux";
import { createStore } from "redux";
//reducers
import reducers from "./reducers";

import App from "./components/App";

const store = createStore(reducers);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));
