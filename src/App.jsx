import "./App.css";
import "antd/dist/antd.css";
import Routes from "./routes";
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
