import React from "react";
import styled from "styled-components";

const StyledDisplay = styled.div`
  background: lightgrey;
`;
const Display = ({ children }) => {
  return <StyledDisplay>{children}</StyledDisplay>;
};

export default Display;
