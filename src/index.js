import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import Welcome from './components/Welcome';
import App from "./components/App";
import { BrowserRouter, HashRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
