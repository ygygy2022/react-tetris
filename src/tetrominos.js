/*
  This file defines the tetrominoes used in a Tetris game, outlining their shapes and colors.

  - `TETROMINOS`: An object containing definitions for all the tetrominoes in the game. Each tetromino is represented by a unique letter, and includes a `shape` (defined as a 2D array) and a `color` (defined as an RGB string).
    - Key "0" is a special placeholder, potentially used for representing empty spaces or other purposes.
  
  - `randomTetromino`: A function that randomly selects and returns a tetromino from the `TETROMINOS` object. It is used to generate random tetrominoes during the gameplay.
  
  Together, these components form the core definitions for the tetrominoes within a Tetris game, allowing for the rendering and random selection of the game's pieces.
*/

export const TETROMINOS = {
  0: {
    shape: [[0]],
    color: "0, 0, 0",
  },
  I: {
    shape: [
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
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
      ["O", "O"],
      ["O", "O"],
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
      [0, 0, 0],
      ["T", "T", "T"],
      [0, "T", 0],
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

export const randomTetromino = () => {
  // Create an array of all the tetrominos
  const tetrominos = "IJLOSTZ";
  // Get a random tetromino index from the array
  const randTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  // Return the tetromino object from the TETROMINOS array
  return TETROMINOS[randTetromino];
};
