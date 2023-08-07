import { useState } from "react";
import { createStage } from "../gameHelpers";
// The stage is the grid that the tetrominos will be placed on
export const useStage = () => {
  const [stage, setStage] = useState(createStage());
  return [stage, setStage];
};
