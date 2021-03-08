import { combineReducers } from "redux";
import reducerTemplate from "./reducers";
//import { formReducer } from "redux-form";

export default combineReducers({
  auth: reducerTemplate,
  //form: formReducer,
});
