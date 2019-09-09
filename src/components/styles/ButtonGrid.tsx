import styled from "styled-components";

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  > * {
    justify-content: center;
    align-items: center;
  }
  button:nth-child(-n + 5) {
    background-color: #27392e;
  }
`;

export default ButtonGrid;
