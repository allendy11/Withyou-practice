import {
  SET_INITIAL_CANVAS,
  SET_STYLE_CANVAS,
  ADD_CANVAS,
  COPY_CANVAS,
  REMOVE_CANVAS,
  // SET_CANVAS,
} from "../actions/";
import { initialState } from "./initialState";
const canvasReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIAL_CANVAS:
      let initialCanvas = {
        id: action.payload.id,
        style: { ...action.payload.style },
      };
      return {
        ...state,
        canvas: [initialCanvas],
        currentCanvas: { id: action.payload.id },
      };
    case SET_STYLE_CANVAS:
      var { id, style } = action.payload;
      var [currentCanvas] = state.canvas.filter((el) => el.id === id);
      currentCanvas = {
        ...currentCanvas,
        style: {
          ...currentCanvas.style,
          ...style,
        },
      };
      return {
        ...state,
        canvas: [
          ...state.canvas.slice(0, id),
          currentCanvas,
          ...state.canvas.slice(id + 1),
        ],
      };

    case ADD_CANVAS:
      return {
        ...state,
        canvas: [...state.canvas, action.payload],
        currentCanvas: { id: action.payload.id },
      };
    case COPY_CANVAS:
      var { id } = action.payload;
      var [currentCanvas] = state.canvas.filter((el) => el.id === id);
      var copiedCanvas = { ...currentCanvas, id: id + 1 };
      var restCanvas = state.canvas.slice(id + 1);
      if (restCanvas.length > 0) {
        restCanvas.map((el) => {
          return {
            ...el,
            id: el.id + 1,
          };
        });
        return {
          ...state,
          canvas: [
            ...state.canvas.slice(0, id),
            currentCanvas,
            copiedCanvas,
            ...restCanvas,
          ],
          currentCanvas: {
            id: id + 1,
          },
        };
      } else {
        return {
          ...state,
          canvas: [...state.canvas.slice(0, id), currentCanvas, copiedCanvas],
          currentCanvas: {
            id: id + 1,
          },
        };
      }
    case REMOVE_CANVAS:
      var { id } = action.payload;
      var restCanvas = state.canvas.slice(id + 1);
      if (restCanvas.length > 0) {
        restCanvas.map((el) => {
          return {
            ...el,
            id: el.id - 1,
          };
        });
        return {
          ...state,
          canvas: [...state.canvas.slice(0, id), ...restCanvas],
          currentCanvas: {
            id: id === 0 ? 0 : id - 1,
          },
        };
      } else {
        return {
          ...state,
          canvas: [...state.canvas.slice(0, id)],
          currentCanvas: {
            id: id === 0 ? 0 : id - 1,
          },
        };
      }
    default:
      return state;
  }
};

export default canvasReducer;
