import {
  SET_ELEMENTS,
  ADD_ELEMENT,
  PUT_ELEMENT,
  UPDATE_ELEMENT,
} from "../actions/";
import { initialState } from "./initialState";

const elementReducer = (state = initialState, action) => {
  let currentCanvas = {};
  let currentElement = {};
  switch (action.type) {
    case SET_ELEMENTS:
      return {
        ...state,
        elements: action.payload,
      };
    case ADD_ELEMENT:
      return {
        ...state,
        elements: [...state.elements, action.payload],
      };
    case PUT_ELEMENT:
      currentCanvas = state.canvas.filter(
        (el) => el === action.payload.canvasId
      );
      currentCanvas = {
        ...currentCanvas,
        elements: [...currentCanvas.elements, action.payload.element],
      };
      return {
        ...state,
        canvas: [
          ...state.canvas.slice(0, action.payload.canvasId),
          currentCanvas,
          ...state.canvas.slice(action.payload.canvasId + 1),
        ],
      };
    case UPDATE_ELEMENT:
      currentCanvas = state.canvas.filter(
        (el) => el === action.payload.canvasId
      );
      currentElement = currentCanvas.elements.filter(
        (el) => el.id === action.payload.elementId
      );
      currentElement = {
        ...currentElement,
        style: { ...currentElement.style, ...action.payload.style },
      };

      return {};
    default:
      return state;
  }
};

export default elementReducer;
