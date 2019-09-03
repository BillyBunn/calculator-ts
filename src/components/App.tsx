import React from "react";
import Display from "./Display";
import Buttons from "./Buttons";

export type State = {
  display: string;
  currentValue: string;
  operator: string;
  operand: string;
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
      return { ...state, display: "0", currentValue: "", operator: "" };

    case ActionType.CALCULATE: {
      const currentValue = calculate(state.currentValue);
      return {
        ...state,
        display: currentValue,
        currentValue,
        operator: "",
        operand: ""
      };
    }

    case ActionType.NUMBER: {
      const number = payload;
      let currentValue, display, arg2;

      // if an operator HAS been pressed,
      if (state.operator) {
        // 1. append the number to the current value string
        currentValue = state.currentValue + number;
        // 2. add to arg2 and display it
        arg2 = state.operand + number;
        display = arg2;
      } else {
        // if an operator has not been pressed, just append the digit
        currentValue = state.currentValue + number;
        display = state.currentValue + number;
        arg2 = state.operand;
      }

      return {
        ...state,
        display,
        currentValue,
        operand: arg2
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
      let { currentValue, display, operand: arg2 } = state;
      if (state.operator) {
        if (state.operand) {
          currentValue = calculate(state.currentValue);
          display = calculate(state.currentValue);
          arg2 = "";
        } else {
          currentValue = state.currentValue.slice(0, -1);
        }
      }
      // if there's a currentOperator in state already AND no arg2,
      // (that means there's one in the currentValue)
      // remove and replace the operator on the currentvalue
      if (state.operator && !state.operand) {
        currentValue = state.currentValue.slice(0, -1);
      } else if (state.operator && state.operand) {
        // if there's a currentOperator AND an arg2
        // 1. calculate, display, & change currentValue
        currentValue = calculate(state.currentValue);
        display = calculate(state.currentValue);
        arg2 = "";
      }
      // else {
      //   // otherwise, just add to the current value
      //   currentValue = state.currentValue;
      // }

      currentValue += operator;

      // either way, change the currentOperator in state
      return {
        ...state,
        operator,
        currentValue,
        display,
        operand: arg2
      };
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
  operator: "",
  arg1: "",
  operand: ""
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
