import React from "react";
import "./index.css";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
// Wrap your rendering code in a call to `createRoot`
const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
