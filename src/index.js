import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import GlobalStateProvider from "./components/GlobalStateProvider";
import "./styles.css";

function Root() {
  return (
    <GlobalStateProvider>
      <App />
    </GlobalStateProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);
