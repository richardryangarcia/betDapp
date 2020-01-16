import * as React from "react";
import { reducer, initialState, InitialValueType } from "./betReducer";
import { Actions } from "./betActions";

interface ProviderProps {
  children: any;
}

export interface ProviderState {
  state: InitialValueType;
  dispatch: React.Dispatch<Actions>;
}

const BetContext = React.createContext<ProviderState>({
  state: initialState,
  dispatch: {} as React.Dispatch<Actions>
});

const BetsProvider: React.FC<ProviderProps> = (props: any) => {
  const children = props.children;
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <BetContext.Provider value={{ state, dispatch }}>
      {children}
    </BetContext.Provider>
  );
};

export { BetContext, BetsProvider };
