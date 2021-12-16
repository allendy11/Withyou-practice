import { combineReducers } from "redux";
import canvasReducer from "./canvasReducer";
import elementReducer from "./elementReducer";
import adminReducer from "./adminReducer";
const rootReducer = combineReducers({
  canvasReducer,
  elementReducer,
  adminReducer,
});

export default rootReducer;
