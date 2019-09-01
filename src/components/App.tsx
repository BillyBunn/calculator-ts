import React, { useState } from "react";
import Display from "./Display";
import Buttons from "./Buttons";

const App = () => {
  const [display, setDisplay] = useState("0");
  const changeDisplay = (thing: string) => {
    setDisplay(thing);
  };
  return (
    <>
      <header>TypeScript Calculator</header>
      <main>
        <Display>{display}</Display>
        <Buttons changeDisplay={changeDisplay} />
      </main>
    </>
  );
};

export default App;
