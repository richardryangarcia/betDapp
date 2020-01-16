import * as React from "react";
import { reducer, initialState, InitialValueType } from "./contractReducer";
import { Actions } from "./contractActions";

interface ProviderProps {
  children: any;
}

export interface ProviderState {
  state: InitialValueType;
  dispatch: React.Dispatch<Actions>;
}

const ContractsContext = React.createContext<ProviderState>({
  state: initialState,
  dispatch: {} as React.Dispatch<Actions>
});

const ContractsProvider: React.FC<ProviderProps> = (props: any) => {
  const children = props.children;
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <ContractsContext.Provider value={{ state, dispatch }}>
      {children}
    </ContractsContext.Provider>
  );
};

export { ContractsContext, ContractsProvider };
