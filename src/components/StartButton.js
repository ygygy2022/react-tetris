import React from "react";
import { StyledStartButton } from "./styles/StyledStartButton";
// StartButton component is used to render the start button.
const StartButton = ({ callback }) => (
  <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
);

export default StartButton;
