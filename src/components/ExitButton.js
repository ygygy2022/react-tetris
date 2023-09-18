import React from "react";
import { StyledStartButton } from "./styles/StyledStartButton";
// StartButton component is used to render the Exit button.
const ExitButton = ({ callback }) => (
  <StyledStartButton onClick={callback}>Exit</StyledStartButton>
);
export default ExitButton;
