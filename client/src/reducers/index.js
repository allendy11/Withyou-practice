import { combineReducers } from "redux";
import canvasReducer from "./canvasReducer";
import elementReducer from "./elementReducer";

const rootReducer = combineReducers({
  canvasReducer,
  elementReducer,
});

export default rootReducer;
