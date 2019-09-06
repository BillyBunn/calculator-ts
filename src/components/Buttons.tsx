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
  &:after {
    /* content: '';
    position: absolute;
    background: rgba(0, 0, 0, 0.3);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0; */
  }

  /* background: rgb(2, 0, 36);
  background: linear-gradient(
    135deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  ); */
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
      <Button type="MEMORY">M+</Button>
      <Button type="MEMORY">M&minus;</Button>
      <Button type="MEMORY">MR</Button>
      <Button type="MEMORY">MC</Button>
      <Button type="SIGN">+/&minus;</Button>

      <Button type="PERCENTAGE">&Delta;%</Button>
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

      <Button type="SQUARE_ROOT">&radic;</Button>
      <Button type="NUMBER">4</Button>
      <Button type="NUMBER">5</Button>
      <Button type="NUMBER">6</Button>
      <Button type="OPERATOR" value="*">
        &times;
      </Button>

      <Button type="PERCENTAGE">%</Button>
      <Button type="NUMBER">1</Button>
      <Button type="NUMBER">2</Button>
      <Button type="NUMBER">3</Button>
      <Button type="OPERATOR" value="-">
        &minus;
      </Button>

      <Button type="CLEAR">CE</Button>
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
