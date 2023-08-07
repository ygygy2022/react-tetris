export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;
// Game board is represented by a 2D array of cells, with each cell being represented by an array of two values: [0, 'clear'].
export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );
