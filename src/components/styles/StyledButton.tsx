import styled from "styled-components";

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

export default StyledButton;
