import { useState, useEffect } from "react";
import { createStage } from "../gameHelpers";
// This custom hook is used to set up the preview stage.
export const usePreviewStage = (player) => {
  // This is the preview stage
  const [previewStage, setPreviewStage] = useState(createStage(7, 21)); // Assuming the preview box is 4x4
  useEffect(() => {
    const updatePreviewStage = (prevStage) => {
      const newStage = prevStage.map((row) =>
        row.map((cell) => (cell[1] === "clear" ? [0, "clear"] : cell))
      );

      // Calculate tetromino's width and height
      const tetrominoHeight = player.tetromino.length;
      const tetrominoWidth = player.tetromino[0].length;

      // Calculate the starting position to center the tetromino in the preview box
      const offsetY = Math.floor((newStage.length - tetrominoHeight) / 2);
      const offsetX = Math.floor((newStage[0].length - tetrominoWidth) / 2);

      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + offsetY][x + offsetX] = [value, "clear"];
          }
        });
      });

      return newStage;
    };

    setPreviewStage((prev) => updatePreviewStage(prev));
  }, [player]); // This will run whenever the next tetromino changes

  return [previewStage, setPreviewStage];
};
