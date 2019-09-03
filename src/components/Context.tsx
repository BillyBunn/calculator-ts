import React from "react";
import { State, Action } from "../types";

export const Context = React.createContext<[State, React.Dispatch<Action>]>([
  null,
  null
]);
export default Context;
