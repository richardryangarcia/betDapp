import * as React from "react";
import { reducer, initialState, InitialValueType } from "./userReducer";
import { Actions } from "./userActions";

interface ProviderProps {
  children: any;
}

export interface ProviderState {
  state: InitialValueType;
  dispatch: React.Dispatch<Actions>;
}

const UserContext = React.createContext<ProviderState>({
  state: initialState,
  dispatch: {} as React.Dispatch<Actions>
});

const UserProvider: React.FC<ProviderProps> = (props: any) => {
  const children = props.children;
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
