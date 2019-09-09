import React from "react";
import styled from "styled-components";
import { State, Action, ActionType } from "../types";
import { Context } from "./App";

const ButtonGrid = styled.div`
  /* align-content: space-evenly; */
  /* border: 1px solid black; */
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  /* justify-items: center; */

  > * {
    justify-content: center;
    align-items: center;
  }
  button:nth-child(-n + 5) {
    background-color: #27392e;
  }
`;

const StyledButton = styled.button`
  background: ${props => {
    switch (props.color) {
      case "MEMORY":
        return props.theme.colors.memory;
      case "NUMBER":
        return props.theme.colors.numbers;
      case "OPERATOR":
      case "PERCENTAGE":
      case "SQUARE_ROOT":
      case "DECIMAL":
      case "CLEAR":
      case "CLEAR_ENTRY":
        return props.theme.colors.operators;
      case "CALCULATE":
        return props.theme.colors.calculate;
      default:
        return props.theme.colors.numbers;
    }
  }};
  border: none;
  border-radius: 50%;
  color: ${props => (props.color === "CALCULATE" ? "#000" : "#fff")};
  display: flex;
  font-size: 22px;
  height: 50px;
  margin: 10px;
  outline: none;
  width: 50px;
`;

type ButtonProps = {
  children: React.ReactChild;
  type: keyof typeof ActionType;
  value?: string;
};

const Button = ({ type, value, children }: ButtonProps) => {
  const [, dispatch] = React.useContext<[State, React.Dispatch<Action>]>(
    Context
  );
  const actionType = type || "NUMBER";
  const actionPayload = (value && value.toString()) || children.toString();

  const handleClick = () =>
    dispatch({ type: ActionType[actionType], payload: actionPayload });

  const color = children === "=" ? "CALCULATE" : type;
  // console.log(children);
  return (
    <StyledButton onClick={handleClick} color={color}>
      {children}
    </StyledButton>
  );
};

const Buttons = () => {
  return (
    <ButtonGrid className="buttons">
      <Button type="MEMORY_ADD">M+</Button>
      <Button type="MEMORY_SUBTRACT">M&minus;</Button>
      <Button type="MEMORY_RECALL">MR</Button>
      <Button type="MEMORY_CLEAR">MC</Button>
      <Button type="SIGN">+/&minus;</Button>

      <Button type="SQUARE_ROOT">&radic;</Button>
      <Button type="NUMBER" value="7">
        7
      </Button>
      <Button type="NUMBER" value="8">
        8
      </Button>
      <Button type="NUMBER">9</Button>
      <Button type="OPERATOR" value="/">
        &divide;
      </Button>

      <Button type="PERCENTAGE">%</Button>
      <Button type="NUMBER">4</Button>
      <Button type="NUMBER">5</Button>
      <Button type="NUMBER">6</Button>
      <Button type="OPERATOR" value="*">
        &times;
      </Button>

      <Button type="CLEAR_ENTRY">CE</Button>
      <Button type="NUMBER">1</Button>
      <Button type="NUMBER">2</Button>
      <Button type="NUMBER">3</Button>
      <Button type="OPERATOR" value="-">
        &minus;
      </Button>

      <Button type="CLEAR">C</Button>
      <Button type="NUMBER">0</Button>
      <Button type="DECIMAL">.</Button>
      <Button type="OPERATOR" value="=">
        =
      </Button>
      <Button type="OPERATOR" value="+">
        +
      </Button>
    </ButtonGrid>
  );
};

export default Buttons;
