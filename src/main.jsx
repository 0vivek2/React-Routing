import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/React-Routing/">
    <App />
  </BrowserRouter>
);

