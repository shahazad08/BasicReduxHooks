import { ActionTypes } from "../constants/action-types";


const initialState = {
  data:0
  };

  export const noteReducer = (state=initialState, { type, payload }) => {
    switch (type) {
      case ActionTypes.INCREMENT:
        return {...state,data:payload}
      case ActionTypes.DECREMENT:
          return {...state,data:payload}
      default:
        return state;
    }
  };