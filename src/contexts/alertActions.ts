export enum ActionTypes {
  AWAIT_TX_ALERT = "WAIT_TX_ALERT",
  REMOVE_TX_ALERT = "REMOVE_TX_ALERT"
}

interface AwaitTxAlertAction {
  type: ActionTypes.AWAIT_TX_ALERT;
  payload: { hash: string };
}

interface RemoveTxAlertAction {
  type: ActionTypes.REMOVE_TX_ALERT;
  payload: { hash: string };
}

export const awaitTxAlert = (hash: string): AwaitTxAlertAction => {
  return {
    type: ActionTypes.AWAIT_TX_ALERT,
    payload: {
      hash
    }
  };
};

export const removeTxAlert = (hash: string): RemoveTxAlertAction => {
  return {
    type: ActionTypes.REMOVE_TX_ALERT,
    payload: {
      hash
    }
  };
};

export type Actions = AwaitTxAlertAction | RemoveTxAlertAction;
