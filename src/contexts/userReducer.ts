import { Reducer } from "react";
import { Actions, ActionTypes } from "./userActions";

export interface InitialValueType {
  imageHash?: string;
  firstName?: string;
  lastName?: string;
  balance?: string;
  account?: string;
}

export const initialState: InitialValueType = {};
export const reducer: Reducer<InitialValueType, Actions> = (
  state: InitialValueType,
  action: Actions
) => {
  switch (action.type) {
    case ActionTypes.UPDATE_USER:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
