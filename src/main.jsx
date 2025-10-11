import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import App from "./app/App";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AppProvider from "./context/AppProvider";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <AppProvider>
    <Provider store={store}>
      <BrowserRouter>
        <Toaster position="top-right" />
        <App />
      </BrowserRouter>
    </Provider>
  </AppProvider>
  // </StrictMode>
);
