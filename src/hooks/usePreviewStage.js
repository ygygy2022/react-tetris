import { useState, useEffect } from "react";
import { createStage } from "../gameHelpers";

export const usePreviewStage = (player) => {
  const [previewStage, setPreviewStage] = useState(createStage(5, 4)); // Assuming the preview box is 4x4
  useEffect(() => {
    const updatePreviewStage = (prevStage) => {
      const newStage = prevStage.map((row) =>
        row.map((cell) => (cell[1] === "clear" ? [0, "clear"] : cell))
      );

      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y][x] = [value, "clear"];
          }
        });
      });

      return newStage;
    };

    setPreviewStage((prev) => updatePreviewStage(prev));
  }, [player]); // This will run whenever the next tetromino changes

  return [previewStage, setPreviewStage];
};
