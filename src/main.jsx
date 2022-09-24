import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/styles.css";
import { PokemonProvider } from "./context/pokemon-context";
import { DarkProvider } from "./context/dark-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DarkProvider>
    <PokemonProvider>
      <App />
    </PokemonProvider>
  </DarkProvider>
);
