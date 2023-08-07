import { useState } from "react";

import { randomTetromino } from "../tetrominos";
// The player is the tetromino that is falling down the grid
export const usePlayer = () => {
  const [player, setPlayer] = useState({
    // The tetromino position
    pos: { x: 0, y: 0 },
    // The tetromino shape
    tetromino: randomTetromino().shape,
    // The tetromino collided
    collided: false,
  });

  return [player];
};
