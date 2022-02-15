import "./App.css";
import Routes from "./router";
import useWindowDimiisions from "./hooks/index";
import React, { createContext } from "react";

export const dimmisonContext = createContext();

function App() {
  const size = useWindowDimiisions();
  return (
    <div className="App">
      <dimmisonContext.Provider value={size}>
        <Routes />
      </dimmisonContext.Provider>
    </div>
  );
}

export default App;
