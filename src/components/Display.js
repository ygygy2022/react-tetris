import React from "react";
import { StyledDisplay } from "./styles/StyledDisplay";
// Display component is used to render the game over text.
const Display = ({ gameOver, text }) => (
  <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
);

export default Display;
