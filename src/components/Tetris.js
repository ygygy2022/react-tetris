import React from "react";

// Styled Components
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";

//
import { createStage } from "../gameHelpers"; // This is a function that creates a 2D array of 12 arrays with 20 elements each, all of which are 0s.

// Components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

const Tetris = () => (
  <StyledTetrisWrapper>
    <StyledTetris>
      <Stage stage={createStage()} />
      <aside>
        <div>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
        </div>
        <StartButton />
      </aside>
    </StyledTetris>
  </StyledTetrisWrapper>
);

export default Tetris;
