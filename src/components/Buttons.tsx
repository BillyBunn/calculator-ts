import React from "react";
import { ActionType } from "../types";
import { Context } from "./Context";
import StyledButton from "./styles/StyledButton";
import ButtonGrid from "./styles/ButtonGrid";

type ButtonProps = {
  children: React.ReactChild;
  type: keyof typeof ActionType;
  value?: string;
};

const Button = ({ type, value, children }: ButtonProps) => {
  const [, dispatch] = React.useContext(Context);
  const actionPayload = (value && value.toString()) || children.toString();

  const handleClick = () =>
    dispatch && dispatch({ type: ActionType[type], payload: actionPayload });

  const color = children === "=" ? "CALCULATE" : type;
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
      <Button type="NUMBER">7</Button>
      <Button type="NUMBER">8</Button>
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
