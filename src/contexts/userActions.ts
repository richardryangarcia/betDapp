export enum ActionTypes {
  UPDATE_USER = "UPDATE_USER"
}

interface UpdateUserAction {
  type: ActionTypes.UPDATE_USER;
  payload: { data: any };
}

export const updateUser = (payload: { data: any }): UpdateUserAction => {
  return { type: ActionTypes.UPDATE_USER, payload };
};

export type Actions = UpdateUserAction;
