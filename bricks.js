const bricks = [
  [10, 100],
  [10, 125],
  [10, 150],

  [125, 100],
  [125, 125],
  [125, 150],

  [240, 100],
  [240, 125],
  [240, 150],

  [355, 100],
  [355, 125],
  [355, 150],

  [470, 100],
  [470, 125],
  [470, 150],
];

export class Bricks {
  constructor(ctx, width = 100, height = 20) {
    this.ctx = ctx;
    this.color = "green";
    this.brickWidth = width;
    this.brickHeight = height;
    this.bricksLeft = bricks.length;
  }
  draw() {
    // draw everything
    for (let brick of bricks) {
      if (!brick) continue;
      let [x, y] = brick;
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(x, y, this.brickWidth, this.brickHeight);
    }
  }
  detectHit(x, y) {
    for (let i = 0; i < bricks.length; i++) {
      if (!bricks[i]) continue;
      let [brickX, brickY] = bricks[i];
      if (x < brickX) continue;
      if (x > brickX + this.brickWidth) continue;
      if (y < brickY) continue;
      if (y > brickY + this.brickHeight) continue;
      delete bricks[i];
      this.bricksLeft--;
      return true;
    }
  }
}
