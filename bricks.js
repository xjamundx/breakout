export class Bricks {
  constructor(ctx, width = 100, height = 20) {
    this.ctx = ctx;
    this.color = "green";
    this.width = width;
    this.height = height;
  }
  draw(x, y) {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(x, y, this.width, this.height);
  }
}
