import React from "react";
import styled from "styled-components";
import { State, Action, Context, ActionType } from "./App";

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  border: 1px solid black;
  > * {
    border: 1px solid black;
  }
`;

const Buttons = () => {
  const [, dispatch] = React.useContext<[State, React.Dispatch<Action>]>(
    Context
  );

  return (
    <ButtonGrid>
      <button>M+</button>
      <button>M&minus;</button>
      <button>MR</button>
      <button>MC</button>
      <button>+/&minus;</button>

      <button>&Delta;%</button>
      <button onClick={() => dispatch({ type: ActionType.CALCULATE })}>
        7
      </button>
      <button>8</button>
      <button>9</button>
      <button>&divide;</button>

      <button>&radic;</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>&times;</button>

      <button>%</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>&minus;</button>

      <button>CE</button>
      <button>0</button>
      <button>.</button>
      <button>=</button>
      <button>+</button>
    </ButtonGrid>
  );
};

export default Buttons;
