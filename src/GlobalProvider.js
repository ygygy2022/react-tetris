// GlobalProvider.js

import React, { useState } from "react";
import GlobalContext from "./GlobalContext";

export const GlobalProvider = ({ children }) => {
  const [height, setHeight] = useState(20);
  const [width, setWidth] = useState(12);
  const [configureLevel, setConfigureLevel] = useState(0);
  const [mode, setMode] = useState("Normal");

  return (
    <GlobalContext.Provider
      value={{
        configureLevel,
        setConfigureLevel,
        mode,
        setMode,
        height,
        setHeight,
        width,
        setWidth,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
