import React from "react";
import Display from "./Display";
import Buttons from "./Buttons";

export type State = {
  display: string;
  operator: string | null;
  firstOperand: number | null;
  waitingForSecondOperand: boolean;
};

export enum ActionType {
  CLEAR = "CLEAR",
  NUMBER = "NUMBER",
  DECIMAL = "DECIMAL",
  OPERATOR = "OPERATOR",
  SIGN = "SIGN",
  SQUARE_ROOT = "SQUARE_ROOT",
  PERCENTAGE = "PERCENTAGE",
  MEMORY = "MEMORY"
}

export type Action = {
  type: ActionType | null;
  payload?: string;
};

export const Context = React.createContext<[State, React.Dispatch<Action>]>([
  null,
  null
]);

function reducer(state: State, action: Action): State {
  const { type, payload } = action;
  switch (type) {
    case ActionType.CLEAR: {
      return {
        ...state,
        display: "0",
        firstOperand: null,
        waitingForSecondOperand: false,
        operator: null
      };
    }

    case ActionType.NUMBER: {
      const number = payload;
      let { display, waitingForSecondOperand } = state;

      if (state.waitingForSecondOperand) {
        display = number;
        waitingForSecondOperand = false;
      } else {
        display = display === "0" ? number : display + number;
      }
      return {
        ...state,
        display,
        waitingForSecondOperand
      };
    }

    case ActionType.DECIMAL: {
      let { display, waitingForSecondOperand } = state;
      if (waitingForSecondOperand) return state;

      if (!display.includes(".")) {
        display += ".";
      }
      return { ...state, display };
    }

    case ActionType.OPERATOR: {
      const nextOperator = payload;
      let { firstOperand, display, operator } = state;
      const inputValue = parseFloat(display);

      if (operator && state.waitingForSecondOperand) {
        return { ...state, operator: nextOperator };
      }

      if (firstOperand === null) {
        firstOperand = inputValue;
      } else if (operator) {
        display = performCalculation[operator](firstOperand, inputValue);
        firstOperand = parseFloat(display);
      }

      return {
        ...state,
        display,
        firstOperand,
        waitingForSecondOperand: true,
        operator: nextOperator
      };
    }

    case ActionType.MEMORY:
      return state;
    case ActionType.SQUARE_ROOT:
      return state;
    case ActionType.PERCENTAGE:
      return state;

    // case ActionType.SIGN: {
    //   let { display, firstOperand: operand } = state;
    //   display = (parseFloat(display) * -1).toString();
    //   operand = (parseFloat(operand) * -1).toString();
    //   return { ...state, display, firstOperand: operand };
    // }
    default:
      return state;
  }
}
const performCalculation = {
  "/": (firstOperand: number, secondOperand: number): string =>
    (firstOperand / secondOperand).toString(),

  "*": (firstOperand: number, secondOperand: number): string =>
    (firstOperand * secondOperand).toString(),

  "+": (firstOperand: number, secondOperand: number): string =>
    (firstOperand + secondOperand).toString(),

  "-": (firstOperand: number, secondOperand: number): string =>
    (firstOperand - secondOperand).toString(),

  "=": (firstOperand: number, secondOperand: number): string =>
    secondOperand.toString()
};

const INITIAL_STATE: State = {
  display: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null
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
