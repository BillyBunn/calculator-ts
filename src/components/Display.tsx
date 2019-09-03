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
      {state.display}
      {/* <ul>
        <li>display: {`${state.display}`}</li>
        <li>operator: {`${state.operator}`}</li>
        <li>firstOperand: {`${state.firstOperand}`}</li>
        <li>waitingForSecondOperand: {`${state.waitingForSecondOperand}`}</li>
      </ul> */}
    </StyledDisplay>
  );
};

export default Display;
