import { combineReducers } from "redux";
import authReducer from "./authReducer";
// redux form step 1
import { reducer as formReducer } from "redux-form";
//streams reducers
import streamReducers from "./streamReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducers,
});
