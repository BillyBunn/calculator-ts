import React from "react";
import Display from "./Display";
import Buttons from "./Buttons";

export type State = {
  display: string;
};

export enum ActionType {
  CLEAR = "CLEAR",
  CALCULATE = "CALCULATE",
  NUMBER = "NUMBER"
}

export type Action = {
  type: ActionType | null;
  payload?: string | number;
};

export const Context = React.createContext<[State, React.Dispatch<Action>]>([
  null,
  null
]);

function reducer(state: State, action: Action): State {
  const { type, payload } = action;
  switch (type) {
    case ActionType.CLEAR:
      return { display: "0" };
    case ActionType.CALCULATE:
      return { display: "calculatin'" };
    case ActionType.NUMBER:
      return { display: state.display + payload };
    default:
      return state;
  }
}

const INITIAL_STATE: State = {
  display: "0"
};

function ToggleProvider(props: React.PropsWithChildren<{}>) {
  const value = React.useReducer<React.Reducer<State, Action>>(
    reducer,
    INITIAL_STATE
  );
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}

const App = () => {
  return (
    <ToggleProvider>
      <header>TypeScript Calculator</header>
      <main>
        <Display />
        <Buttons />
      </main>
    </ToggleProvider>
  );
};

export default App;
