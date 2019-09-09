import styled from "styled-components";

const StyledDisplay = styled.div`
  align-items: center;
  background: ${props => props.theme.colors.displayBorder};
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  > div {
    background: ${props => props.theme.colors.display};
    border-radius: 10px;
    flex: 1;
    font-family: "Lucida Console", Monaco, monospace;
    font-size: 30px;
    padding: 0px 8px;
    text-align: right;
  }
`;

export default StyledDisplay;
