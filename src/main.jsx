import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { DarkModeProvider } from "../src/context/DarkModeProvider.jsx";
import { UseHeroesProvider } from "./context/UseHeroesProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeProvider>
      <UseHeroesProvider>
        <App />
      </UseHeroesProvider>
    </DarkModeProvider>
  </React.StrictMode>
);
