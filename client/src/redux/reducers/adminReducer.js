import {} from "../actions";
import { initialState } from "./initialState";
import { ADMIN_ADD_TEMPLATE, ADMIN_ADD_ELEMENT } from "redux/actions";
const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADMIN_ADD_TEMPLATE:
    //   return {
    //     ...state,
    //   };
    case ADMIN_ADD_ELEMENT:
      const addElement = {
        id: action.payload.elementId,
        src: action.payload.src,
      };
      return {
        ...state,
        adminElements: [...state.adminElements, addElement],
      };
    default:
      return state;
  }
};

export default adminReducer;
