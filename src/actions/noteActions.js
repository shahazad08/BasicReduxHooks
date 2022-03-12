import { ActionTypes } from "../constants/action-types";

export const incrementData = (data) => {
  return {
    type: ActionTypes.INCREMENT,
    payload: data,
  };
};

export const decrementData = (data) => {
  return {
    type: ActionTypes.DECREMENT,
    payload: data,
  };
};