import React from "react";
import { Context } from "./Context";
import StyledDisplay from "./styles/StyledDisplay";

const Display = () => {
  const [state] = React.useContext(Context);
  const [showMore, setShowMore] = React.useState(false);
  return (
    <StyledDisplay className="display">
      <div onClick={() => setShowMore(!showMore)}>
        {showMore && state ? (
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
          state && state.display
        )}
      </div>
    </StyledDisplay>
  );
};

export default Display;
