import React from "react";
import styled from "styled-components";
import { State, Action } from "../types";
import { Context } from "./App";

const StyledDisplay = styled.div`
  align-items: center;
  background: ${props => props.theme.colors.display};
  display: flex;
  flex: 1;
  flex-flow: row nowrap;
  justify-content: flex-end;
  font-family: "Lucida Console", Monaco, monospace;
  font-size: 30px;
`;
const Display = () => {
  const [state] = React.useContext<[State, React.Dispatch<Action>]>(Context);
  return (
    <StyledDisplay className="display">
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
