import { useCallback, useState, useEffect } from "react";

export const useGameStatus = (rowsCleared) => {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const linePoints = [10, 30, 50, 100];

  // useCallback is used to prevent infinite loop
  const calcScore = useCallback(() => {
    if (rowsCleared > 0) {
      let remainingRows = rowsCleared * 5;
      let newScore = 0; // Temporary variable to store the score

      // Loop through the rows and calculate score
      while (remainingRows > 0) {
        if (remainingRows > 4) {
          newScore += linePoints[3] * (level + 1 + (remainingRows - 2));
          remainingRows -= 4;
        } else {
          newScore += linePoints[remainingRows - 1] * (level + 1);
          remainingRows = 0; // End the loop
        }
      }

      // Update the total score and rows cleared outside the loop
      setScore((prev) => prev + newScore);
      setRows((prev) => prev + rowsCleared / 2);
    }
  }, [level, linePoints, rowsCleared]);

  useEffect(() => {
    calcScore();
  }, [calcScore, rowsCleared, score]);

  return [score, setScore, rows, setRows, level, setLevel];
};