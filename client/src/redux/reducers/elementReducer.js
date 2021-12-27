import {
  SET_ELEMENTS,
  ADD_ELEMENT,
  PUT_ELEMENT,
  UPDATE_ELEMENT,
  SELECT_ON_ELEMENT,
  SELECT_OFF_ELEMENT,
  MOVE_ON_ELEMENT,
  MOVE_OFF_ELEMENT,
} from "../actions/";
import { initialState } from "./initialState";

const elementReducer = (state = initialState, action) => {
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
      var { canvasId, element } = action.payload;
      // currentCanvas = state.canvas.filter(
      //   (el) => el === action.payload.canvasId
      // );
      // currentCanvas = {
      //   ...currentCanvas,
      //   elements: [...currentCanvas.elements, action.payload.element],
      // };
      return {
        ...state,
        elements: [...state.elements, { canvasId, ...element }],
        // ...state,
        // canvas: [
        //   ...state.canvas.slice(0, action.payload.canvasId),
        //   currentCanvas,
        //   ...state.canvas.slice(action.payload.canvasId + 1),
        // ],
      };
    case UPDATE_ELEMENT:
      var { canvasId, elementId, style } = action.payload;
      var idx = state.elements.findIndex((el) => {
        return el.canvasId === canvasId && el.id === elementId;
      });
      var currentElement = state.elements[idx];
      currentElement = {
        ...currentElement,
        style: { ...currentElement.style, ...style },
      };
      return {
        ...state,
        elements: [
          ...state.elements.slice(0, idx),
          currentElement,
          ...state.elements.slice(idx + 1),
        ],
      };
    case SELECT_ON_ELEMENT:
      var { canvasId, elementId } = action.payload;
      var idx = state.elements.findIndex((el) => {
        return el.canvasId === canvasId && el.id === elementId;
      });
      var currentElement = state.elements[idx];
      currentElement = {
        ...currentElement,
        onSelect: true,
      };
      return {
        ...state,
        elements: [
          ...state.elements.slice(0, idx),
          currentElement,
          ...state.elements.slice(idx + 1),
        ],
        currentElement: { id: `${elementId}` },
      };
    case SELECT_OFF_ELEMENT:
      var { canvasId } = action.payload;
      state.elements
        .filter((el) => el.canvasId === canvasId)
        .map((el) => (el.onSelect = false));
      return {
        ...state,
      };
    case MOVE_ON_ELEMENT:
      var { canvasId, elementId } = action.payload;
      var idx = state.elements.findIndex((el) => {
        return el.canvasId === canvasId && el.id === elementId;
      });
      var currentElement = state.elements[idx];
      currentElement = {
        ...currentElement,
        onMove: true,
      };
      return {
        ...state,
        elements: [
          ...state.elements.slice(0, idx),
          currentElement,
          ...state.elements.slice(idx + 1),
        ],
      };
    case MOVE_OFF_ELEMENT:
      var { canvasId } = action.payload;
      state.elements
        .filter((el) => el.canvasId === canvasId)
        .map((el) => (el.onMove = false));
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default elementReducer;
