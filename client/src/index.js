import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ItemsProvider } from "./components/ItemsContext";

ReactDOM.render(
  <React.StrictMode>
    <ItemsProvider>
      <App />
    </ItemsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
