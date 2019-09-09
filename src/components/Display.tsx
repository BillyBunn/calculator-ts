import React from "react";
import { State, Action } from "../types";
import { Context } from "./Context";
import StyledDisplay from "./styles/StyledDisplay";

const Display = () => {
  const [state] = React.useContext<[State, React.Dispatch<Action>]>(Context);
  const [showMore, setShowMore] = React.useState(false);
  return (
    <StyledDisplay className="display">
      <div onClick={() => setShowMore(!showMore)}>
        {showMore ? (
          <>
            <h3 style={{ fontSize: "60%", textAlign: "center" }}>state</h3>
            <ul style={{ fontSize: "50%", textAlign: "left" }}>
              <li>display: {`${state.display}`}</li>
              <li>operator: {`${state.operator}`}</li>
              <li>firstOperand: {`${state.firstOperand}`}</li>
              <li>
                waitingForSecondOperand: {`${state.waitingForSecondOperand}`}
              </li>
              <li>memory: {`${state.memory}`}</li>
            </ul>
          </>
        ) : (
          state.display
        )}
      </div>
    </StyledDisplay>
  );
};

export default Display;
