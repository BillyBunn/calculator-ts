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
  payload: string;
};
