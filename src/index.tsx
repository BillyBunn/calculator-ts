import React from "react";
import { render } from "react-dom";
import App from "./components/App";

const Main = () => <App />;

const rootElement = document.getElementById("root");
render(<Main />, rootElement);
