import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import Welcome from './components/Welcome';
import App from "./components/App";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import store from '../src/redux/reducer'
import store from '../src/app/store'

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </StrictMode>
);
