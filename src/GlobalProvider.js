// GlobalProvider.js

import React, { useState } from "react";
import GlobalContext from "./GlobalContext";

export const GlobalProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(0);

  return (
    <GlobalContext.Provider
      value={{ score, setScore, rows, setRows, level, setLevel }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
