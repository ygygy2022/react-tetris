import { useState, useCallback } from "react";

import { TETROMINOS, randomTetromino } from "../tetrominos";
import { STAGE_WIDTH, checkCollision } from "../gameHelpers";
// userPlayer is a custom hook that will be used to manage the player state.
export const usePlayer = () => {
  // useState is used to create a state variable for the player and setPlayer is used to update the player state.
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false,
  });
  //

  const [nextTetromino, setNextTetromino] = useState(randomTetromino().shape);

  const rotate = (matrix, dir) => {
    // Make the rows to become cols (transpose)
    const rotatedTetro = matrix.map((_, index) =>
      matrix.map((col) => col[index])
    );
    // Reverse each row to get a rotated matrix
    if (dir > 0) return rotatedTetro.map((row) => row.reverse());
    return rotatedTetro.reverse();
  };

  // useCallback is used to prevent the function from being created every time the component renders.
  const playerRotate = (stage, dir) => {
    // Deep clone the player
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    // Rotate the cloned player
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);

    // Check collision
    const pos = clonedPlayer.pos.x;
    // The offset is used to move the tetromino away from the wall if it is colliding with the wall.
    let offset = 1;
    // Check if the tetromino is colliding with the wall.
    while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
      clonedPlayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > clonedPlayer.tetromino[0].length) {
        rotate(clonedPlayer.tetromino, -dir);
        clonedPlayer.pos.x = pos;
        return;
      }
    }
    setPlayer(clonedPlayer);
  };

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer((prev) => ({
      ...prev,
      pos: { x: prev.pos.x + x, y: prev.pos.y + y },
      collided,
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: nextTetromino, // Use the next tetromino
      collided: false,
    });
    setNextTetromino(randomTetromino().shape); // Set the next tetromino
  }, [nextTetromino]);

  return [player, updatePlayerPos, resetPlayer, playerRotate, nextTetromino];
};
