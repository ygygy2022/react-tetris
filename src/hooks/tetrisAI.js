import { checkCollision } from "../gameHelpers"; // This is a function that creates a 2D array of 12 arrays with 20 elements each, all of which are 0s.
import { rotate } from "./usePlayer";
function simulatePlacement(player, stage) {
  // 创建玩家和舞台的深拷贝，以避免修改原始状态
  let simulatedPlayer = JSON.parse(JSON.stringify(player));
  let simulatedStage = stage.map((row) => row.slice());

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
  let bestRotation = null;

  function purePlayerRotate(player, stage, dir) {
    // 深度克隆玩家
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    // 旋转克隆的玩家
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);

    // 检查碰撞
    const pos = clonedPlayer.pos.x;
    // offset 用于在方块与墙碰撞时将其从墙上移开
    let offset = 1;
    // 检查方块是否与墙碰撞
    while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
      clonedPlayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > clonedPlayer.tetromino[0].length) {
        rotate(clonedPlayer.tetromino, -dir);
        clonedPlayer.pos.x = pos;
        return clonedPlayer; // 返回未旋转的玩家
      }
    }

    return clonedPlayer; // 返回旋转后的玩家
  }

  // 注意：您需要确保 rotate 和 checkCollision 函数已在您的代码中实现。

  // 遍历所有可能的旋转方向（我们假设每个方块有4种旋转状态）
  for (let rotationDir = 0; rotationDir < 4; rotationDir++) {
    // 使用 purePlayerRotate 获取旋转后的方块
    let rotatedPlayer = purePlayerRotate(player, stage, rotationDir);
    let rotatedTetromino = rotatedPlayer.tetromino;

    // 处理 rotatedTetromino 是数字的情况
    if (typeof rotatedTetromino[0] === "number") {
      rotatedTetromino = [rotatedTetromino];
    }

    // 对于每个可能的 x 位置
    for (let x = 0; x < stage[0].length - rotatedTetromino[0].length + 1; x++) {
      let simulatedPlayer = {
        pos: { x: x, y: player.pos.y },
        tetromino: rotatedTetromino,
        collided: false,
      };
      let [, simulatedStage] = simulatePlacement(simulatedPlayer, stage);
      let score = evaluateState(simulatedStage);

      // 如果此步骤更好，更新最佳分数、位置和旋转
      if (score > bestScore) {
        bestScore = score;
        bestPos = x;
        bestRotation = rotationDir;
      }
    }
  }

  return [bestPos, bestRotation];
}

export { bestMove };
