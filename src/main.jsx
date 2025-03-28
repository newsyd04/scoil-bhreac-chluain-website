import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './index.css';

const isProduction = import.meta.env.MODE === "production";
const basename = isProduction ? "/scoil-bhreac-chluain-website" : "/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
);
