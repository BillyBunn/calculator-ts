import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Display from "./Display";
import Buttons from "./Buttons";

import { State, Action } from "../types";
import reducer from "../reducer";
export const Context = React.createContext<[State, React.Dispatch<Action>]>([
  null,
  null
]);

export const INITIAL_STATE: State = {
  display: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null
};

function ContextProvider(props: React.PropsWithChildren<{}>) {
  const value = React.useReducer<React.Reducer<State, Action>>(
    reducer,
    INITIAL_STATE
  );
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}

const Calculator = styled.main``;

// background-color: ${props => props.theme.colors.secondary};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F8F8F8;
    font-family: sans-serif
  }`;

const App = () => {
  return (
    <ContextProvider>
      <GlobalStyle />
      <header>TypeScript Calculator</header>
      <Calculator>
        <Display />
        <Buttons />
      </Calculator>
    </ContextProvider>
  );
};

export default App;
