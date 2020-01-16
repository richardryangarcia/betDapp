import * as React from "react";
import { reducer, initialState, InitialValueType } from "./alertReducer";
import { Actions } from "./alertActions";

interface ProviderProps {
  children: any;
}

export interface ProviderState {
  state: InitialValueType;
  dispatch: React.Dispatch<Actions>;
}

const AlertContext = React.createContext<ProviderState>({
  state: initialState,
  dispatch: {} as React.Dispatch<Actions>
});

const AlertProvider: React.FC<ProviderProps> = (props: any) => {
  const children = props.children;
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <AlertContext.Provider value={{ state, dispatch }}>
      {children}
    </AlertContext.Provider>
  );
};

export { AlertContext, AlertProvider };
