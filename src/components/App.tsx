import React from "react";
import Display from "./Display";
import Buttons from "./Buttons";

import Calculator from "./styles/Calculator";

const App = () => {
  return (
    <Calculator>
      <header>TypeScript Calculator</header>
      <Display />
      <Buttons />
    </Calculator>
  );
};

export default App;
