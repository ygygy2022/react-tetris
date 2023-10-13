import { checkCollision } from "../gameHelpers"; // This is a function that creates a 2D array of 12 arrays with 20 elements each, all of which are 0s.

function simulatePlacement(player, stage) {
  // Create a deep copy of player and stage to avoid modifying the original state
  let simulatedPlayer = JSON.parse(JSON.stringify(player));
  let simulatedStage = JSON.parse(JSON.stringify(stage));

  // Simulate block falling vertically until it collides
  while (true) {
    simulatedPlayer.pos.y++;
    if (checkCollision(simulatedPlayer, simulatedStage, { x: 0, y: 0 })) {
      simulatedPlayer.pos.y--;
      break;
    }
  }

  // Merge the player's block with the stage
  for (let y = 0; y < simulatedPlayer.tetromino.length; y++) {
    for (let x = 0; x < simulatedPlayer.tetromino[y].length; x++) {
      if (simulatedPlayer.tetromino[y][x]) {
        simulatedStage[y + simulatedPlayer.pos.y][x + simulatedPlayer.pos.x] = [
          simulatedPlayer.tetromino[y][x],
          "merged",
        ];
      }
    }
  }

  return [simulatedPlayer, simulatedStage];
}

function evaluateState(stage) {
  function countCompletedLines(stage) {
    let completedLines = 0;

    stage.forEach((row) => {
      if (row.every((cell) => cell[0] !== 0)) {
        completedLines++;
      }
    });
    console.log("completedLines:", completedLines);
    return completedLines;
  }

  function calculateHeight(stage) {
    let totalHeight = 0;
    console.log("stage[0].length:", stage[0].length);
    for (let x = 0; x < stage[0].length; x++) {
      let columnHeight = 0;
      for (let y = stage.length - 1; y >= 0; y--) {
        if (stage[y][x][0] !== 0 && stage[y][x][1] === "merged") {
          console.log(`Detected merged block at column ${x}, row ${y}`); // Add this line
          columnHeight = stage.length - y;
          break;
        }
      }
      totalHeight += columnHeight;
    }

    console.log("totalHeight:", totalHeight);
    return totalHeight;
  }

  function countHoles(stage) {
    let holes = 0;

    for (let y = 0; y < stage.length; y++) {
      for (let x = 0; x < stage[y].length; x++) {
        if (
          stage[y][x][0] === 0 &&
          y !== 0 &&
          stage[y - 1][x][0] !== 0 &&
          stage[y - 1][x][1] === "merged"
        ) {
          holes++;
        }
      }
    }

    console.log("holes:", holes);
    return holes;
  }

  // Define the weights for each metric
  const WEIGHTS = {
    completedLines: 100,
    height: -5, // Decreased the penalty slightly to focus more on holes
    holes: -150, // Increased the penalty to prioritize filling holes
  };

  // Calculate the score of the state using the metrics and weights
  let score =
    WEIGHTS.completedLines * countCompletedLines(stage) +
    WEIGHTS.height * calculateHeight(stage) +
    WEIGHTS.holes * countHoles(stage);

  return score;
}

// You also need to make sure the functions countCompletedLines, calculateHeight, and countHoles are implemented in JavaScript.

export default function bestMove(player, stage) {
  let bestScore = Number.NEGATIVE_INFINITY;
  let bestPos = null;

  // Iterate over all possible horizontal positions
  for (let x = 0; x < stage[0].length - player.tetromino[0].length + 1; x++) {
    let simulatedPlayer = {
      pos: { x: x, y: player.pos.y },
      tetromino: player.tetromino,
      collided: false,
    };
    const [, simulatedStage] = simulatePlacement(simulatedPlayer, stage);
    let score = evaluateState(simulatedStage);

    // If the score for this position is higher, update the best score and position
    if (score > bestScore) {
      bestScore = score;
      bestPos = x;
    }
  }

  return bestPos;
}
