import React, { FC } from "react";
import { render } from "react-dom";
import App from "./components/App";

const Main: FC = () => <App />;

const rootElement = document.getElementById("root");
render(<Main />, rootElement);
