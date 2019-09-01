import React, { FC, useState } from "react";
import Display from "./Display";
import Buttons from "./Buttons";

const App: FC = () => {
  const [display, setDisplay] = useState("numbers");
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
