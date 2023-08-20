import React from "react";
import { StyledStartButton } from "./styles/StyledStartButton";
const ExitButton = ({ callback }) => (
  <StyledStartButton onClick={callback}>Exit</StyledStartButton>
);

export default ExitButton;
