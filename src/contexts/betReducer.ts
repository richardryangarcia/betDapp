import { Reducer } from "react";
import { Actions, ActionTypes } from "./betActions";

export interface InitialValueType {
  [id: string]: any;
}

export const initialState: InitialValueType = {};
export const reducer: Reducer<InitialValueType, Actions> = (
  state: InitialValueType,
  action: Actions
) => {
  switch (action.type) {
    case ActionTypes.UPDATE_BET:
      return {
        ...state,
        [`${action.payload.name}`]: action.payload.data
      };
    case ActionTypes.GET_BETS_SUCCESS:
      return {
        ...state,
        bets: { ...state.bets, ...action.payload }
      };
    default:
      return state;
  }
};
