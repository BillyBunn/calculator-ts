import React, { FC } from "react";
import styled from "styled-components";

const StyledDisplay = styled.div`
  background: lightgrey;
`;
const Display: FC = ({ children }) => {
  return <StyledDisplay>{children}</StyledDisplay>;
};

export default Display;
