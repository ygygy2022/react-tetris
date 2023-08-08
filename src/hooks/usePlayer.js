import { useState, useCallback } from "react";

import { randomTetromino, TETROMINOS } from "../tetrominos";
import { STAGE_WIDTH } from "../gameHelpers";
// The player is the tetromino that is falling down the grid
export const usePlayer = () => {
  const [player, setPlayer] = useState({
    // The tetromino position
    pos: { x: 0, y: 0 },
    // The tetromino shape
    tetromino: TETROMINOS[0].shape,
    // The tetromino collided
    collided: false,
  });

  // This function will update the player position
  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer((prev) => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided,
    }));
  };

  // This function will reset the player
  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false,
    });
  }, []);

  return [player, updatePlayerPos, resetPlayer];
};
