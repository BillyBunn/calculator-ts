import React from "react";
import styled from "styled-components";

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
  changeDisplay: (thing: React.ReactNode) => void;
  children: React.ReactChild;
};
const Button = ({ changeDisplay, children }: ButtonProps) => (
  <button onClick={() => changeDisplay(children)}>{children}</button>
);

type ButtonsProps = {
  changeDisplay: (thing: React.ReactNode) => void;
};

const Buttons = ({ changeDisplay }: ButtonsProps) => {
  return (
    <ButtonGrid>
      <Button changeDisplay={changeDisplay}>M+</Button>
      <Button changeDisplay={changeDisplay}>M&minus;</Button>
      <Button changeDisplay={changeDisplay}>MR</Button>
      <Button changeDisplay={changeDisplay}>MC</Button>
      <Button changeDisplay={changeDisplay}>+/&minus;</Button>

      <Button changeDisplay={changeDisplay}>&Delta;%</Button>
      <Button changeDisplay={changeDisplay}>7</Button>
      <Button changeDisplay={changeDisplay}>8</Button>
      <Button changeDisplay={changeDisplay}>9</Button>
      <Button changeDisplay={changeDisplay}>&divide;</Button>

      <Button changeDisplay={changeDisplay}>&radic;</Button>
      <Button changeDisplay={changeDisplay}>4</Button>
      <Button changeDisplay={changeDisplay}>5</Button>
      <Button changeDisplay={changeDisplay}>6</Button>
      <Button changeDisplay={changeDisplay}>&times;</Button>

      <Button changeDisplay={changeDisplay}>%</Button>
      <Button changeDisplay={changeDisplay}>1</Button>
      <Button changeDisplay={changeDisplay}>2</Button>
      <Button changeDisplay={changeDisplay}>3</Button>
      <Button changeDisplay={changeDisplay}>&minus;</Button>

      <Button changeDisplay={changeDisplay}>CE</Button>
      <Button changeDisplay={changeDisplay}>0</Button>
      <Button changeDisplay={changeDisplay}>.</Button>
      <Button changeDisplay={changeDisplay}>=</Button>
      <Button changeDisplay={changeDisplay}>+</Button>
    </ButtonGrid>
  );
};

export default Buttons;
