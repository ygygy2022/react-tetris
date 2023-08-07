import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from "../tetrominos";
/* Cell component is a single cell of the tetris grid that will be 
rendered in the playfield */
const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color} />
);

export default Cell;
