// GlobalProvider.js

import React, { useState } from "react";
import GlobalContext from "./GlobalContext";

export const GlobalProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [configureLevel, setConfigureLevel] = useState(0);

  return (
    <GlobalContext.Provider
      value={{
        score,
        setScore,
        rows,
        setRows,
        configureLevel,
        setConfigureLevel,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
