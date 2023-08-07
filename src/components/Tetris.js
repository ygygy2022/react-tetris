import React from "react";

// Styled Components
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";

// Components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import { createStage } from "../gameHelpers"; // This is a function that creates a 2D array of 12 arrays with 20 elements each, all of which are 0s.
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";
// Tetris component is the main component that will render the game
const Tetris = () => {
  const [dropTime, setDropTime] = React.useState(null);
  const [gameOver, setGameOver] = React.useState(false);

  const [player] = usePlayer();
  const [stage, setStage] = useStage(player);
  console.log("re-render");
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {/* If the game is over, display the game over message, otherwise display the score, rows, and level. */}
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </div>
          )}
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
