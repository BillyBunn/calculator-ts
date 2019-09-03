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

type ButtonProps = {
  action?: () => void;
  children: React.ReactChild;
};
const Button = ({ action, children }: ButtonProps) => (
  <button onClick={action}>{children}</button>
);

const Buttons = () => {
  const [, dispatch] = React.useContext<[State, React.Dispatch<Action>]>(
    Context
  );

  return (
    <ButtonGrid>
      <Button>M+</Button>
      <Button>M&minus;</Button>
      <Button>MR</Button>
      <Button>MC</Button>
      <Button>+/&minus;</Button>

      <Button>&Delta;%</Button>
      <Button action={() => dispatch({ type: ActionType.NUMBER, payload: 7 })}>
        7
      </Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button>&divide;</Button>

      <Button>&radic;</Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button>&times;</Button>

      <Button>%</Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>&minus;</Button>

      <Button action={() => dispatch({ type: ActionType.CLEAR })}>CE</Button>
      <Button>0</Button>
      <Button>.</Button>
      <Button>=</Button>
      <Button>+</Button>
    </ButtonGrid>
  );
};

export default Buttons;
