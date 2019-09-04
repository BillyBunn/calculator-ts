import React from "react";
import styled from "styled-components";
import { State, Action, ActionType } from "../types";
import { Context } from "./App";

const ButtonGrid = styled.div`
  border: 1px solid black;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  padding: 30px;
  > * {
    border: 1px solid black;
  }
`;

const StyledButton = styled.button`
  background: ${props => {
    console.log(props);
    switch (props.type) {
      case "NUMBER":
        return "#040404";
      case "OPERATOR":
        return "#69432D";
      case "MEMORY":
        return "#27392E";
      default:
        return "red";
    }
  }};
  border-radius: 50%;
  color: #fff;
  height: 50px;
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

  return (
    <StyledButton onClick={handleClick} type={type}>
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
