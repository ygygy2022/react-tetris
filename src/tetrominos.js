// this file contains the tetrominos' shape and their colors, will be used to render the tetrominos in the playfield

export const TETROMINOS = {
  0: { shape: [[0]], color: "0, 0, 0" },
  I: {
    shape: [
      [0, 0, "I", 0, 0],
      [0, 0, "I", 0, 0],
      [0, 0, "I", 0, 0],
      [0, 0, "I", 0, 0],
    ],
    color: "80, 227, 230",
  },
  X: {
    shape: [
      [0, 0, "I", 0, 0],
      [0, 0, "I", 0, 0],
      [0, 0, "I", 0, 0],
    ],
    color: "80, 227, 230",
  },
  J: {
    shape: [
      [0, "J", 0],
      [0, "J", 0],
      ["J", "J", 0],
    ],
    color: "36, 95, 223",
  },
  C: {
    shape: [
      [0, "J", 0],
      ["J", "J", 0],
    ],
    color: "36, 95, 223",
  },
  L: {
    shape: [
      [0, "L", 0],
      [0, "L", 0],
      [0, "L", "L"],
    ],
    color: "223, 173, 36",
  },
  O: {
    shape: [
      [0, 0, "O", "O", 0, 0],
      [0, 0, "O", "O", 0, 0],
    ],
    color: "223, 217, 36",
  },
  S: {
    shape: [
      [0, "S", "S"],
      ["S", "S", 0],
      [0, 0, 0],
    ],
    color: "48, 211, 56",
  },
  T: {
    shape: [
      ["T", "T", "T"],
      [0, "T", 0],
      [0, 0, 0],
    ],
    color: "132, 61, 198",
  },
  Z: {
    shape: [
      ["Z", "Z", 0],
      [0, "Z", "Z"],
      [0, 0, 0],
    ],
    color: "227, 78, 78",
  },
};
// this function will return a random tetromino form normal mode
export const randomTetromino = () => {
  const tetrominos = "IJLOSTZ";
  const randTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];
};

// this function will return a random tetromino for extended mode
export const randomExtendedTetromino = () => {
  const tetrominos = "IJLOSTZCX";
  const randTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];
};
