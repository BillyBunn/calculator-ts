import React from "react";
import styled from "styled-components";
import { State, Action, Context } from "./App";

const StyledDisplay = styled.div`
  background: lightgrey;
`;
const Display = () => {
  const [state] = React.useContext<[State, React.Dispatch<Action>]>(Context);
  return (
    <StyledDisplay>
      display: {state.display} <br />
      currentVal:{state.currentValue} <br />
      operator: {state.currentOperator} <br />
      arg2: {state.arg2} <br />
    </StyledDisplay>
  );
};

export default Display;
