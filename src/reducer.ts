import React from "react";

import { State, Action, ActionType } from "./types";

export const Context = React.createContext<[State, React.Dispatch<Action>]>([
  null,
  null
]);

export default function reducer(state: State, action: Action): State {
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

    case ActionType.SQUARE_ROOT: {
      let { display } = state;
      display =
        display === "0" ? "0" : Math.sqrt(parseFloat(display)).toString();
      return { ...state, display };
    }

    case ActionType.MEMORY:
      return state;
    case ActionType.PERCENTAGE:
      return state;
    case ActionType.SIGN:
      return state;
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
