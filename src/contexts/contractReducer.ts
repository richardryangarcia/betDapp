import { Reducer } from "react";
import { Actions, ActionTypes } from "./contractActions";

export interface InitialValueType {
  [id: string]: any;
}

export const initialState: InitialValueType = {};
export const reducer: Reducer<InitialValueType, Actions> = (
  state: InitialValueType,
  action: Actions
) => {
  switch (action.type) {
    case ActionTypes.ADD_CONTRACT:
      return {
        ...state,
        [`${action.payload.name}`]: {
          ...action.payload.contract,
          data: {}
        }
      };
    case ActionTypes.UPDATE_CONTRACT:
      return {
        ...state,
        [`${action.payload.name}`]: {
          ...state[`${action.payload.name}`],
          data: action.payload.data
        }
      };
    default:
      return state;
  }
};
