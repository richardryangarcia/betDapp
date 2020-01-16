import { Reducer } from "react";
import { Actions, ActionTypes } from "./alertActions";

export interface InitialValueType {
  awaitingTxs: string[];
}

export const initialState: InitialValueType = {
  awaitingTxs: []
};
export const reducer: Reducer<InitialValueType, Actions> = (
  state: InitialValueType,
  action: Actions
) => {
  switch (action.type) {
    case ActionTypes.AWAIT_TX_ALERT:
      return {
        ...state,
        awaitingTxs: [...state.awaitingTxs, action.payload.hash]
      };
    case ActionTypes.REMOVE_TX_ALERT:
      const awaitingTxs = state.awaitingTxs.filter(tx => {
        return tx !== action.payload.hash;
      });
      return {
        ...state,
        awaitingTxs: [...awaitingTxs]
      };
    default:
      return state;
  }
};
