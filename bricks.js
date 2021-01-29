const bricks = [
  [10, 100],
  [10, 125],
  [10, 150],

  [135, 100],
  [135, 125],
  [135, 150],

  [260, 100],
  [260, 125],
  [260, 150],


  [510, 100],
  [510, 125],
  [510, 150],
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

      delete bricks[i];
      this.bricksLeft--;
      return true;
    }
  }
}
