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
  operator: null,
  memory: 0
};

function ContextProvider(props: React.PropsWithChildren<{}>) {
  const value = React.useReducer<React.Reducer<State, Action>>(
    reducer,
    INITIAL_STATE
  );
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}

const GlobalStyle = createGlobalStyle`
  html, body {
    background: ${props => props.theme.colors.background};
    height: 100%;
    margin: 0px;
    margin:0px;
    padding: 0px;
  }
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    color: ${props => props.theme.colors.secondary};
    font-family: sans-serif;
  }
`;

const Calculator = styled.main`
  align-items: center;
  background: ${props => props.theme.colors.calculator};
  border-radius: 10px 10px 50px 50px;
  display: flex;
  flex-flow: column nowrap;
  margin: 4rem auto 0 auto;
  padding: 50px;
  width: 450px;

  > header {
    align-self: flex-start;
    color: ${props => props.theme.colors.main};
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: bold;
  }

  .display {
    margin-bottom: 50px;
    width: 100%;
  }

  .buttons {
    background: ${props => props.theme.colors.calculator};
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <ContextProvider>
        <GlobalStyle />
        <Calculator>
          <header>TypeScript Calculator</header>
          <Display />
          <Buttons />
        </Calculator>
      </ContextProvider>
    </ThemeProvider>
  );
};

export default App;
