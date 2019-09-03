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
  type?: keyof typeof ActionType;
  value?: string;
};

const Button = ({ children, type, value }: ButtonProps) => {
  const [, dispatch] = React.useContext<[State, React.Dispatch<Action>]>(
    Context
  );
  const actionType = type || "NUMBER";
  const actionPayload = (value && value.toString()) || children.toString();

  const handleClick = () =>
    dispatch({ type: ActionType[actionType], payload: actionPayload });

  return <button onClick={handleClick}>{children}</button>;
};

const Buttons = () => {
  return (
    <ButtonGrid>
      <Button type="MEMORY">M+</Button>
      <Button type="MEMORY">M&minus;</Button>
      <Button type="MEMORY">MR</Button>
      <Button type="MEMORY">MC</Button>
      <Button type="SIGN">+/&minus;</Button>

      <Button>&Delta;%</Button>
      <Button value="7">7</Button>
      <Button value="8">8</Button>
      <Button>9</Button>
      <Button type="OPERATOR" value="/">
        &divide;
      </Button>

      <Button type="SQUARE_ROOT">&radic;</Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button type="OPERATOR" value="*">
        &times;
      </Button>

      <Button type="PERCENTAGE">%</Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button type="OPERATOR" value="-">
        &minus;
      </Button>

      <Button type="CLEAR">CE</Button>
      <Button>0</Button>
      <Button type="DECIMAL">.</Button>
      <Button type="OPERATOR" value="+">
        =
      </Button>
      <Button type="OPERATOR" value="+">
        +
      </Button>
    </ButtonGrid>
  );
};

export default Buttons;
