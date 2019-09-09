import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import Display from "./Display";
import Buttons from "./Buttons";
import GlobalStyle from "./styles/GlobalStyle";
import Calculator from "./styles/Calculator";

import { State, Action } from "../types";
import reducer, { INITIAL_STATE } from "../reducer";
export const Context = React.createContext<[State, React.Dispatch<Action>]>([
  null,
  null
]);

function ContextProvider(props: React.PropsWithChildren<{}>) {
  const value = React.useReducer<React.Reducer<State, Action>>(
    reducer,
    INITIAL_STATE
  );
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
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
