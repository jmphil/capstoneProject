import { combineReducers } from "redux";
import reducerTemplate from "./reducers";

import assetReducer from "./assetReducer"

export default combineReducers({
  auth: reducerTemplate,
  assets: assetReducer
});
