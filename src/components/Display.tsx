import React from "react";
import styled from "styled-components";
import { State, Action } from "../types";
import { Context } from "./App";

const StyledDisplay = styled.div`
  align-items: center;
  background: ${props => props.theme.colors.displayBorder};
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  > div {
    background: ${props => props.theme.colors.display};
    border-radius: 10px;
    flex: 1;
    font-family: "Lucida Console", Monaco, monospace;
    font-size: 30px;
    padding: 0px 8px;
    text-align: right;
  }
`;
const Display = () => {
  const [state] = React.useContext<[State, React.Dispatch<Action>]>(Context);
  const [showMore, setShowMore] = React.useState(false);
  return (
    <StyledDisplay className="display">
      <div onClick={() => setShowMore(!showMore)}>
        {showMore ? (
          <ul>
            <li>display: {`${state.display}`}</li>
            <li>operator: {`${state.operator}`}</li>
            <li>firstOperand: {`${state.firstOperand}`}</li>
            <li>
              waitingForSecondOperand: {`${state.waitingForSecondOperand}`}
            </li>
            <li>memory: {`${state.memory}`}</li>
          </ul>
        ) : (
          state.display
        )}
      </div>
    </StyledDisplay>
  );
};

export default Display;
