import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/global.css"; // Certifique-se de que o arquivo existe neste caminho

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
