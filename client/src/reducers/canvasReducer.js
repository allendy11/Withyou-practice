import {
  ADD_CANVAS,
  COPY_CANVAS,
  REMOVE_CANVAS,
  // SET_CANVAS,
} from "../actions/";
import { initialState } from "./initialState";
const canvasReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CANVAS:
      return {
        ...state,
        canvas: [...state.canvas, action.payload],
      };
    case COPY_CANVAS:
      return {
        ...state,
        canvas: [...state.canvas, action.payload],
      };
    case REMOVE_CANVAS:
      return {
        ...state,
        canvas: state.canvas.filter(
          (el) => el.canvasId !== action.payload.canvasId
        ),
      };
    default:
      return state;
  }
};

export default canvasReducer;
