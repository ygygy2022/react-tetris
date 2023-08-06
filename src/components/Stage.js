import React from "react";

import Cell from "./Cell";

const Stage = ({ stage }) => (
  <div>
    {/* Iterate through each row of the stage array
     */}
    {stage.map((row) => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}{" "}
  </div>
);

export default Stage;
