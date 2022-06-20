import React from "react";
import ReactDOM from "react-dom/client";

import { GlobalStyle } from "./global";
import { Home } from "./Screen/Home";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Home />
    <GlobalStyle />
  </React.StrictMode>
);
