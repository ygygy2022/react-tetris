import React from "react";

// Styled Components
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";

// Components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import { createStage, checkCollision } from "../gameHelpers"; // This is a function that creates a 2D array of 12 arrays with 20 elements each, all of which are 0s.
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";
// Tetris component is the main component that will render the game
const Tetris = () => {
  // React Hooks
  // dropTime is the time it takes for the tetromino to drop one row
  const [dropTime, setDropTime] = React.useState(null);
  // gameOver is a boolean that will be set to true when the game is over
  const [gameOver, setGameOver] = React.useState(false);
  // player is the tetromino that is falling down the grid
  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  // stage is the grid that the tetrominos will be placed on
  const [stage, setStage] = useStage(player, resetPlayer);
  // console.log("re-render");
  console.log("re-render");

  // This function will move the tetromino left or right
  const movePlayer = (dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  // This function will drop the tetromino down one row
  const drop = () => {
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      // If the tetromino has collided with another tetromino or the bottom of the grid
      // Game Over
      if (player.pos.y < 1) {
        console.log("GAME OVER!!!");
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  // This function will drop the tetromino down one row when the down arrow key is pressed
  const dropPlayer = () => {
    drop();
  };

  // move is a callback function that will be called when a key is pressed
  const move = ({ keyCode }) => {
    // If the game is not over
    if (!gameOver) {
      // Left arrow key
      if (keyCode === 37) {
        movePlayer(-1);
      }
      // Right arrow key
      else if (keyCode === 39) {
        movePlayer(1);
      }
      // Down arrow key
      else if (keyCode === 40) {
        dropPlayer();
      }
      // A key (rotate left)
      else if (keyCode === 65) {
        playerRotate(stage, -1);
      }
      // D key (rotate right)
      else if (keyCode === 68) {
        playerRotate(stage, 1);
      }
    }
  };

  // This function will start the game
  const startGame = () => {
    // Reset everything
    setStage(createStage());
    setGameOver(false);
    resetPlayer();
  };

  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={(e) => move(e)}>
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
          <StartButton callback={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
