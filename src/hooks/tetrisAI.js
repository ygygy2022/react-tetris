import { checkCollision } from "../gameHelpers"; // This is a function that creates a 2D array of 12 arrays with 20 elements each, all of which are 0s.
function simulatePlacement(player, stage) {
  // 创建玩家和舞台的深拷贝，以避免修改原始状态
  let simulatedPlayer = JSON.parse(JSON.stringify(player));
  let simulatedStage = JSON.parse(JSON.stringify(stage));

  // 将舞台中的所有整数单元转换为数组格式
  for (let y = 0; y < simulatedStage.length; y++) {
    for (let x = 0; x < simulatedStage[y].length; x++) {
      if (typeof simulatedStage[y][x] === "number") {
        simulatedStage[y][x] = [simulatedStage[y][x], "clear"];
      }
    }
  }

  // 模拟方块垂直下落，直到碰撞为止
  while (true) {
    simulatedPlayer.pos.y++;
    if (checkCollision(simulatedPlayer, simulatedStage, { x: 0, y: 0 })) {
      simulatedPlayer.pos.y--;
      break;
    }
  }

  // 将玩家的方块与舞台合并
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
      if (row.every((cell) => cell !== 0)) {
        completedLines++;
      }
    });

    return completedLines;
  }

  function calculateHeight(stage) {
    let height = 0;

    for (let y = 0; y < stage.length; y++) {
      for (let x = 0; x < stage[y].length; x++) {
        if (stage[y][x] !== 0) {
          height += stage.length - y; // 加上距离底部的距离
          break;
        }
      }
    }

    return height;
  }

  function countHoles(stage) {
    let holes = 0;

    for (let y = 0; y < stage.length; y++) {
      for (let x = 0; x < stage[y].length; x++) {
        if (stage[y][x] === 0 && (y === 0 || stage[y - 1][x] !== 0)) {
          holes++;
        }
      }
    }

    return holes;
  }

  // 定义每个指标的权重
  const WEIGHTS = {
    completedLines: 100,
    height: -10,
    holes: -50,
  };

  // 使用指标和权重计算状态的分数
  let score =
    WEIGHTS.completedLines * countCompletedLines(stage) +
    WEIGHTS.height * calculateHeight(stage) +
    WEIGHTS.holes * countHoles(stage);

  return score;
}

// 您还需要确保 countCompletedLines、calculateHeight 和 countHoles 函数在 JavaScript 中已经实现。

function bestMove(player, stage) {
  let bestScore = Number.NEGATIVE_INFINITY;
  let bestPos = null;

  // 遍历所有可能的水平位置
  for (let x = 0; x < stage[0].length - player.tetromino[0].length + 1; x++) {
    let simulatedPlayer = {
      pos: { x: x, y: player.pos.y },
      tetromino: player.tetromino,
      collided: false,
    };
    const [, simulatedStage] = simulatePlacement(simulatedPlayer, stage);
    let score = evaluateState(simulatedStage);

    // 如果此位置得分更高，则更新最佳得分和位置
    if (score > bestScore) {
      bestScore = score;
      bestPos = x;
    }
  }

  return bestPos;
}

export { bestMove };
