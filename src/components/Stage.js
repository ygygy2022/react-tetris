import React from "react";
import { StyledStage } from "./styles/StyledStage";
import Cell from "./Cell";

// Stage component is used to render the game board by iterating through the stage array and rendering each cell.

const Stage = ({ stage }) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {stage.map((row) => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}{" "}
  </StyledStage>
);

export default Stage;
