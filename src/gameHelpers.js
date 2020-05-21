export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      // 1. Check that we are on a actualy tetromino cell
      if (player.tetromino[y][x] !== 0) {
        // 2. check that our movement is inside of the game areas height (y)
        // we shouldn't go through the bottom of the play area
        // 3. check that our tetromino isn't moving outside of the game areas width (x)
        if (
          !stage[y + player.pos.y + moveY] ||
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
        // 4. check that the cell we are moving to isn't set to clear, because if it is clear we are not colliding
      }
    }
  }
};
