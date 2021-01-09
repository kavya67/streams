import { combineReducers } from "redux";
import authReducer from "./authReducer";
// redux form step 1
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
});
