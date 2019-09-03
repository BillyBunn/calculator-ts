import React from "react";
import Display from "./Display";
import Buttons from "./Buttons";

export type State = {
  display: string;
  currentValue: string;
  currentOperator: string;
  arg1: string;
  arg2: string;
};

export enum ActionType {
  CLEAR = "CLEAR",
  CALCULATE = "CALCULATE",
  NUMBER = "NUMBER",
  OPERATOR = "OPERATOR",
  SIGN = "SIGN"
}

export type Action = {
  type: ActionType | null;
  payload?: string | number | undefined;
};

export const Context = React.createContext<[State, React.Dispatch<Action>]>([
  null,
  null
]);

function reducer(state: State, action: Action): State {
  const { type, payload } = action;
  switch (type) {
    case ActionType.CLEAR:
      return { ...state, display: "0", currentValue: "", currentOperator: "" };

    case ActionType.CALCULATE: {
      const currentValue = calculate(state.currentValue);
      return {
        ...state,
        display: currentValue,
        currentValue,
        currentOperator: "",
        arg2: ""
      };
    }

    case ActionType.NUMBER: {
      const number = payload;
      let currentValue, display, arg2;

      // if an operator HAS been pressed,
      if (state.currentOperator) {
        // 1. append the number to the current value string
        currentValue = state.currentValue + number;
        // 2. add to arg2 and display it
        arg2 = state.arg2 + number;
        display = arg2;
      } else {
        // if an operator has not been pressed, just append the digit
        currentValue = state.currentValue + number;
        display = state.currentValue + number;
        arg2 = state.arg2;
      }

      return {
        ...state,
        display,
        currentValue,
        arg2
      };
    }
    case ActionType.SIGN: {
      // it's zero - do nothing
      if (!state.currentValue || parseFloat(state.currentValue) === 0)
        return state;

      let display, currentValue;
      // it's positive - make negative
      if (parseFloat(state.currentValue) > 0) {
        display = "-" + state.display;
        currentValue = "-" + state.currentValue;
      }
      // it's negative - make positive
      if (parseFloat(state.currentValue) < 0) {
        display = state.display.substring(1);
        currentValue = state.currentValue.substring(1);
      }
      return { ...state, display, currentValue };
    }
    case ActionType.OPERATOR: {
      const operator = payload;
      let currentValue;
      // if there's a currentOperator in state already,
      // (that means there's one in the currentValue)
      // remove and replace the operator on the currentvalue
      if (state.currentOperator) {
        currentValue = state.currentValue.slice(0, -1) + operator;
      } else {
        // otherwise, just add to the current value
        currentValue = state.currentValue + operator;
      }

      // either way, change the currentOperator in state
      return { ...state, currentOperator: operator, currentValue };
    }
    default:
      return state;
  }
}
const calculate = (entry: string) => {
  return eval(entry);
};

const INITIAL_STATE: State = {
  display: "0",
  currentValue: "",
  currentOperator: "",
  arg1: "",
  arg2: ""
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
