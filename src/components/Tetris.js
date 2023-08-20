import React from "react";

// Styled Components
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";
// Components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
// Custom Hooks
import { useGameStatus } from "../hooks/useGameStatus";
import { useInterval } from "../hooks/useInterval";
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
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  // score, rows, and level are the game stats
  const [score, setScore, rows, setRows, level, setLevel] =
    useGameStatus(rowsCleared);

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
    // Increase level when player has cleared 10 rows
    if (rows > (level + 1) * 15) {
      setLevel((prev) => prev + 1);
      // Also increase speed
      setDropTime(1000 / (level + 1) + 200 / (level + 1));
    }

    // If the tetromino has not collided with another tetromino or the bottom of the grid
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

  const keyUp = ({ keyCode }) => {
    // If the game is not over
    if (!gameOver) {
      // Down arrow key
      if (keyCode === 40) {
        //console.log("interval on");
        setDropTime(1000 / (level + 1) + 200 / (level + 1));
      }
    }
  };

  // This function will drop the tetromino down one row when the down arrow key is pressed
  const dropPlayer = () => {
    //console.log(dropTime);
    setDropTime(null);
    drop();
  };
  // dropTime is the time it takes for the tetromino to drop one row
  useInterval(() => {
    drop();
  }, dropTime);

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
    setDropTime(1200);
    setGameOver(false);
    resetPlayer();
    setLevel(0);
    setRows(0);
    setScore(0);
  };

  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex="0"
      onKeyDown={(e) => move(e)}
      onKeyUp={keyUp}
    >
      <StyledTetris>
        <aside>
          <div>
            <Display text="normal game" />
            <Display text="Player: Yu Guo" />
            <Display text="Group number: 12" />
            <Display text="Student1:S5283828 Yu Guo Student2:s5049158 maisi hao" />
          </div>
        </aside>
        <Stage stage={stage} />
        <aside>
          {/* If the game is over, display the game over message, otherwise display the score, rows, and level. */}
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text={`Score: ${score}`} />
              <Display text={`Rows: ${rows}`} />
              <Display text={`Level: ${level}`} />
              <Display text={`Next Tetromino`} />
            </div>
          )}
          <StartButton callback={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
