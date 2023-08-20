import { useState, useEffect } from "react";
import { createStage } from "../gameHelpers";

export const usePreviewStage = (player) => {
  const [previewStage, setPreviewStage] = useState(createStage(5, 5)); // Assuming the preview box is 4x4
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
