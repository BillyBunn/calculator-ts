import React from "react";
import Display from "./Display";
import Buttons from "./Buttons";

export type State = {
  display: string;
};

export enum ActionType {
  CLEAR = "CLEAR",
  CALCULATE = "CALCULATE"
}

export type Action = {
  type: ActionType | null;
};

export const Context = React.createContext<[State, React.Dispatch<Action>]>([
  null,
  null
]);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.CLEAR:
      return { display: "" };
    case ActionType.CALCULATE:
      return { display: "calculatin'" };
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
