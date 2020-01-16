export enum ActionTypes {
  ADD_CONTRACT = "ADD_CONTRACT",
  UPDATE_CONTRACT = "UPDATE_CONTRACT"
}

interface AddContractAction {
  type: ActionTypes.ADD_CONTRACT;
  payload: any;
}

export const addContract = (payload: {
  name: string;
  contract: any;
}): AddContractAction => {
  return { type: ActionTypes.ADD_CONTRACT, payload };
};

interface UpdateContractAction {
  type: ActionTypes.UPDATE_CONTRACT;
  payload: any;
}

export const updateContract = (payload: {
  name: string;
  data: any;
}): UpdateContractAction => {
  return { type: ActionTypes.UPDATE_CONTRACT, payload };
};

export type Actions = AddContractAction | UpdateContractAction;
