//Display Tetris game on screen
// Desc: This file contains the Tetris component, which is the main component that will render the game.
import React, { useContext } from "react";
import GlobalContext from "../GlobalContext";

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
import { usePreviewStage } from "../hooks/usePreviewStage";
import {
  LevelUpAudioPlayer,
  GameOverAudioPlayer,
  GameStartAudioPlayer,
} from "./BackgroundSound";
import moveFile from "../backsound/move.mp3";
import bestMove from "../hooks/tetrisAI";
// Tetris component is the main component that will render the game
const Tetris = () => {
  // React Hooks
  const [startplayLevelUp, setStartPlayLevelUp] = React.useState(false);
  const [startplayGameOver, setStartGameOver] = React.useState(false);
  const [startplayGameStart, setStartGameStart] = React.useState(false);
  // username is the username of the player
  const [username, setUsername] = React.useState("default");
  // dropTime is the time it takes for the tetromino to drop one row
  const [dropTime, setDropTime] = React.useState(null);
  // gameOver is a boolean that will be set to true when the game is over
  const [gameOver, setGameOver] = React.useState(false);
  // Global Context Hooks for game mode
  const { mode, height, width } = useContext(GlobalContext);
  // player is the tetromino that is falling down the grid
  const [player, nextPlayer, updatePlayerPos, resetPlayer, playerRotate] =
    usePlayer(mode);
  // stage is the grid that the tetrominos will be placed on
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  // preview is the tetromino that will be displayed in the preview box
  const [preview, setPreview] = usePreviewStage(nextPlayer);
  // score, rows, and level are the game stats
  const [score, setScore, rows, setRows, level, setLevel] =
    useGameStatus(rowsCleared);

  // This function will move the tetromino left or right
  const moveSound = new Audio(moveFile);
  moveSound.volume = 0.2;
  const playMoveSound = () => {
    moveSound.currentTime = 0; // Reset sound to start
    moveSound.play();
  };
  const movePlayer = (dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
      playMoveSound();
    }
  };

  const saveScoreToDB = () => {
    fetch("http://localhost:5000/scores/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        score: score,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
      moveSound.play();
    } else {
      // If the tetromino has collided with another tetromino or the bottom of the grid
      // Game Over
      if (player.pos.y < 1) {
        console.log("GAME OVER!!!");
        setStartGameOver(true);
        setStartGameStart(false);
        setGameOver(true);
        setDropTime(null);
        saveScoreToDB();
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
    setDropTime(null);
    drop();
  };
  // dropTime is the time it takes for the tetromino to drop one row
  useInterval(() => {
    console.log(bestMove(player, stage));
    movePlayer(bestMove(player, stage));
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
  // when level up, play level up sound
  React.useEffect(() => {
    if (level > 0) {
      // Avoid playing the sound at the initial load
      setStartPlayLevelUp(true);
      setTimeout(() => setStartPlayLevelUp(false), 1500); // Assuming the audio length is 3 seconds. Adjust as needed.
    }
  }, [level]);
  // only run once on mount for updating username
  React.useEffect(() => {
    const enteredUsername = window.prompt("Please entre your user name:");
    setUsername(enteredUsername);
  }, []);

  // This function will start the game
  const startGame = () => {
    // Reset everything
    setStage(createStage(height, width));
    setPreview(createStage(7, 21));
    setDropTime(100 / (level + 1) + 200 / (level + 1));
    setGameOver(false);
    resetPlayer();
    setLevel(0);
    setRows(0);
    setScore(0);
    setStartGameStart(true);
    setStartGameOver(false);
  };
  // The Tetris component will render the game
  return (
    <StyledTetrisWrapper
      // The Tetris component will listen for key presses
      role="button"
      tabIndex="0"
      onKeyDown={(e) => move(e)}
      onKeyUp={keyUp}
    >
      <StyledTetris>
        {/* Audio players */}
        {startplayGameOver ? <GameOverAudioPlayer startplay /> : null}
        {startplayLevelUp ? <LevelUpAudioPlayer startplay /> : null}
        {startplayGameStart ? <GameStartAudioPlayer startplay /> : null}
        <aside>
          <div>
            <Display text={mode + " Mode"} />
            <Display text={"Player: " + username} />
            <Display text="Group number: 18A" />
            <Display text="Student1:S5283828 Yu Guo Student2:s5049158 maisi hao Student3:s5003833 Jiaxiang Yao" />
            <Display text={`Next Tetromino:`} />
            {/* display the next tetromino. */}
            <Stage stage={preview} />
          </div>
        </aside>
        {/* The game will be displayed on the right side of the game. */}
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
            </div>
          )}
          {/* Start button to start the game */}
          <StartButton callback={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
