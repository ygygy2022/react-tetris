import { useState, useEffect, useContext } from "react";
import { createStage } from "../gameHelpers";
import GlobalContext from "../GlobalContext";
// This custom hook is used to set up the stage.
export const useStage = (player, resetPlayer) => {
  // This is the stage that will be used to render the tetrominos
  const { height, width } = useContext(GlobalContext);
  const [stage, setStage] = useState(createStage(height, width));

  const [rowsCleared, setRowsCleared] = useState(0);
  // useEffect is used to update the stage
  useEffect(() => {
    setRowsCleared(0);
    // This function will sweep the rows that are full
    const sweepRows = (newStage) =>
      newStage.reduce((acc, row) => {
        // If there is no 0 in the row, then the row is full
        if (row.findIndex((cell) => cell[0] === 0) === -1) {
          // Add 1 to rowsCleared
          setRowsCleared((prev) => prev + 1);
          // Add a new row of 0s to the top of the stage
          acc.unshift(new Array(newStage[0].length).fill([0, "clear"]));
          return acc;
        }
        // If the row is not full, then add the row to the accumulator
        acc.push(row);
        return acc;
      }, []);

    const updateStage = (prevStage) => {
      // First flush the stage
      const newStage = prevStage.map((row) =>
        row.map((cell) => (cell[1] === "clear" ? [0, "clear"] : cell))
      );

      // Then draw the tetromino
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? "merged" : "clear"}`,
            ];
          }
        });
      });
      // Then check if we collided
      if (player.collided) {
        resetPlayer();
        return sweepRows(newStage);
      }

      return newStage;
    };

    setStage((prev) => updateStage(prev));
  }, [player, resetPlayer]);

  return [stage, setStage, rowsCleared];
};
