import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "modern-normalize";
import "./index.css";
import App from "./components/App/App";

const rootElement = document.getElementById("root")!;

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
