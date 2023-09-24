// GlobalProvider.js

import React, { useState } from "react";
import GlobalContext from "./GlobalContext";

export const GlobalProvider = ({ children }) => {
  const [configureLevel, setConfigureLevel] = useState(0);
  const [mode, setMode] = useState("Normal");

  return (
    <GlobalContext.Provider
      value={{
        configureLevel,
        setConfigureLevel,
        mode,
        setMode,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
