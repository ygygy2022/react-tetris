import React from "react";

//
import { createStage } from "../gameHelpers"; // This is a function that creates a 2D array of 12 arrays with 20 elements each, all of which are 0s.

// Components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

const Tetris = () => (
  <div>
    <Stage stage={createStage()} />
    <aside>
      <div>
        <Display text="Score" />
        <Display text="Rows" />
        <Display text="Level" />
      </div>
      <StartButton />
    </aside>
  </div>
);

export default Tetris;
