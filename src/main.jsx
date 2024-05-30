import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import CalcInterface from "./Component/CalcInterface";
import "./assets/Scss/interface.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CalcInterface />
  </React.StrictMode>,
);
