export enum ActionTypes {
  UPDATE_BET = "UPDATE_BET",
  GET_BETS_SUCCESS = "GET_BETS_SUCCESS"
}

interface UpdateBetAction {
  type: ActionTypes.UPDATE_BET;
  payload: { name: string; data: any };
}

export const addBet = (payload: {
  name: string;
  data: any;
}): UpdateBetAction => {
  return { type: ActionTypes.UPDATE_BET, payload };
};

interface GetBetsSuccessAction {
  type: ActionTypes.GET_BETS_SUCCESS;
  payload: any;
}

export const getBetsSuccess = (payload: any): GetBetsSuccessAction => {
  return {
    type: ActionTypes.GET_BETS_SUCCESS,
    payload
  };
};

export type Actions = UpdateBetAction | GetBetsSuccessAction;
