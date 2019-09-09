import React from "react";
import styled from "styled-components";
import Display from "./Display";
import Buttons from "./Buttons";
import Calculator from "./styles/Calculator";

const Footer = styled.footer`
  display: flex;
  flex-flow: column nowrap;
  margin-top: 2rem;
  text-align: center;
  > * {
    margin-bottom: 0.5rem;
  }
`;

const App = () => {
  return (
    <>
      <Calculator>
        <header>TypeScript Calculator</header>
        <Display />
        <Buttons />
      </Calculator>
      <Footer>
        <span>
          Built with{" "}
          <span role="img" aria-label="Love">
            ❤️
          </span>{" "}
          by <a href="https://billybunn.com/">Billy Bunn</a>.
        </span>
        <span>
          <a href="https://github.com/BillyBunn/calculator-ts">
            See it on GitHub
          </a>
        </span>
      </Footer>
    </>
  );
};

export default App;
