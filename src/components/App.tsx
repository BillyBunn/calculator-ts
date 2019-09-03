import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { myTheme } from "../theme";
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

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.colors.secondary};
    background: ${props => props.theme.colors.background};
  }
`;

const Calculator = styled.main`
  background: ${props => props.theme.colors.calculator};
  .display {
    background: ${props => props.theme.colors.display};
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <ContextProvider>
        <GlobalStyle />
        <header>TypeScript Calculator</header>
        <Calculator>
          <Display />
          <Buttons />
        </Calculator>
      </ContextProvider>
    </ThemeProvider>
  );
};

export default App;
